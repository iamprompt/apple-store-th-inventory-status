import { readFile, writeFile } from 'fs/promises'
import { IModels, Model } from './types/models'
import { GET_AOS_FULFILLMENT } from './utils/helpers'
;(async () => {
  const models: IModels = {}
  try {
    const modelList = await readFile('./models.json', 'utf-8')
    Object.assign(models, JSON.parse(modelList))
  } catch (error) {}

  const parts = Object.values(models.iphone).reduce(
    (acc, model) => ({
      ...acc,
      [model.partNumber]: model.name,
    }),
    {}
  )

  const productAvailability: IProductAvailability[] = []
  const partNos = Object.keys(parts)

  while (partNos.length > 0) {
    const partNoSet = partNos.splice(0, 10)

    const iphoneResult = await GET_AOS_FULFILLMENT({
      country: 'th',
      partNos: partNoSet,
    })

    // console.log(
    //   Object.keys(iphoneResult.pickupMessage.stores[0].partsAvailability).length
    // )

    for (const partNo of partNoSet) {
      const storeAvailability = iphoneResult.pickupMessage.stores.map(
        (store) => {
          const storeProduct = store.partsAvailability[partNo]

          return {
            storeName: store.storeName,
            isAvailable: storeProduct.pickupDisplay === 'available',
            status: storeProduct.pickupSearchQuote,
          }
        }
      )

      // console.log(JSON.stringify(iphoneResult.deliveryMessage, null, 2))

      productAvailability.push({
        ...models.iphone.find((model) => model.partNumber === partNo)!,
        availability: {
          stores: storeAvailability,
          delivery: {
            status:
              iphoneResult.deliveryMessage[
                partNo
              ].regular?.deliveryOptionMessages[0].displayName?.trim(),
          },
        },
      })
    }

    // console.log(productAvailability)
    await writeFile(
      './availability.json',
      JSON.stringify(productAvailability, null, 2)
    )
  }
})()

interface IProductAvailability extends Model {
  availability: {
    stores: {
      storeName: string
      isAvailable: boolean
      status: string
    }[]
    delivery: {
      status: string
    }
  }
}
