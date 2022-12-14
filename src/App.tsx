import clsx from 'clsx'
import { useMemo, useState } from 'react'
import useSWR from 'swr'
import { AvailabilityProductCard } from './components'
import Footer from './components/Footer'
import { IAvailabilityModels } from './types'
import { AVAILABILITY_MODELS_URL, fetcher, dayjs } from './utils'
import {
  MODEL_CAPACITY,
  MODEL_COLOR,
  MODEL_COLOR_URL_PARAM,
  MODEL_FAMILY,
  MODEL_FAMILY_URL_PARAM,
  MODEL_SCREEN_SIZE_URL_PARAM,
} from './utils/const'

const App = () => {
  const { data, error } = useSWR<IAvailabilityModels>(
    AVAILABILITY_MODELS_URL,
    fetcher
  )
  const [filter, setFilter] = useState<boolean>(true)

  const availabilityModel = useMemo(() => {
    if (!data) return null
    return data.items
      .sort(
        (a, b) =>
          Object.keys(MODEL_CAPACITY).indexOf(a.storage) -
          Object.keys(MODEL_CAPACITY).indexOf(b.storage)
      )
      .sort(
        (a, b) =>
          Object.keys(MODEL_COLOR).indexOf(a.color) -
          Object.keys(MODEL_COLOR).indexOf(b.color)
      )
      .sort(
        (a, b) =>
          Object.keys(MODEL_FAMILY).indexOf(a.family) -
          Object.keys(MODEL_FAMILY).indexOf(b.family)
      )
  }, [data])

  const filteredPickupAvailabilityModel = useMemo(() => {
    if (!availabilityModel) return null
    return availabilityModel.filter(
      (model) =>
        model.availability.stores.some((store) => store.isAvailable) || !filter
    )
  }, [availabilityModel, filter])

  if (error) return <div>failed to load</div>

  if (!data) return <div>loading...</div>

  return (
    <div className="px-5 pt-8">
      <div className="text-center mb-10 space-y-3">
        <h1 className="text-4xl font-bold">
          สถานะ iPhone 14 ใน Apple Store ประเทศไทย
        </h1>
        <p className="font-normal text-2xl">
          อัปเดต:{' '}
          {dayjs(data.updatedAt).format('DD MMMM BBBB เวลา HH:mm:ss น.')}
        </p>
        <div className="flex justify-center my-3 font-normal">
          <button
            onClick={() => setFilter(!filter)}
            className={clsx(
              'text-white py-2 px-3 rounded-full bg-[#0071E3] hover:bg-[#147CE5]'
            )}
          >
            {filter ? 'แสดงทั้งหมด' : 'แสดงเฉพาะที่มีสินค้า'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {filteredPickupAvailabilityModel?.map((model) => {
          const productLink = `https://www.apple.com/th/shop/buy-iphone/${
            MODEL_FAMILY_URL_PARAM[model.family]
          }/${MODEL_SCREEN_SIZE_URL_PARAM[model.family]}-${model.storage}-${
            MODEL_COLOR_URL_PARAM[model.color]
          }`

          return (
            <a
              key={model.partNumber}
              href={productLink}
              target="_blank"
              rel="noreferrer"
            >
              <AvailabilityProductCard {...model} />
            </a>
          )
        })}
      </div>
      <Footer />
    </div>
  )
}

export default App
