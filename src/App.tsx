import clsx from 'clsx'
import { useState } from 'react'
import useSWR from 'swr'
import { IAvailabilityModels } from './types'
import { AVAILABILITY_MODELS_URL, fetcher, dayjs } from './utils'

const MODEL_FAMILY = [
  'iphone14promax',
  'iphone14pro',
  'iphone14plus',
  'iphone14',
]

const App = () => {
  const { data, error } = useSWR<IAvailabilityModels>(
    AVAILABILITY_MODELS_URL,
    fetcher
  )
  const [filter, setFilter] = useState(false)

  if (error) return <div>failed to load</div>

  if (!data) return <div>loading...</div>

  return (
    <div className="px-5 py-10">
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
              'border-2 border-[#0071E3] text-white py-2 px-3 rounded-full',
              filter
                ? 'bg-[#0071E3] hover:bg-gray-100 hover:text-black'
                : 'bg-gray-100 text-black hover:bg-[#0071E3] hover:text-white'
            )}
          >
            {filter ? 'แสดงทั้งหมด' : 'แสดงเฉพาะที่มีสินค้า'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
        {data.items
          .sort(
            (a, b) =>
              MODEL_FAMILY.findIndex((family) => family === a.family) -
              MODEL_FAMILY.findIndex((family) => family === b.family)
          )
          .filter(
            (item) =>
              item.availability.stores.some((store) => store.isAvailable) ||
              !filter
          )
          .map((model) => (
            <div
              key={model.partNumber}
              className={clsx(
                'bg-gray-100 rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl border border-gray-150',
                model.availability.stores.some((store) => store.isAvailable) &&
                  'bg-green-50'
              )}
            >
              <div className="p-3 flex flex-col items-center justify-center h-[350px]">
                <img
                  src={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/${model.imageKey}?fmt=png-alpha`}
                  alt={model.name}
                />
                <h2 className="font-bold text-xl text-center my-2">
                  {model.name}
                </h2>
              </div>
              <div className="">
                <div
                  className={clsx(
                    'p-2 m-4 rounded-xl border-2 text-center h-16 items-center justify-center flex flex-col',
                    model.availability.stores[1].isAvailable
                      ? ' bg-[#333333] border-[#333333] opacity-100 text-white'
                      : 'border-gray-300 bg-gray-100 opacity-50'
                  )}
                >
                  <div className="font-semibold">Apple Central World</div>
                  {model.availability.stores[1].isAvailable && (
                    <div>{model.availability.stores[1].status}</div>
                  )}
                </div>
                <div
                  className={clsx(
                    'p-2 m-4 rounded-xl border-2 text-center h-16 items-center justify-center flex flex-col',
                    model.availability.stores[0].isAvailable
                      ? ' bg-[#333333] border-[#333333] opacity-100 text-white'
                      : 'border-gray-300 bg-gray-100 opacity-50'
                  )}
                >
                  <div className="font-semibold">Apple Iconsiam</div>
                  {model.availability.stores[0].isAvailable && (
                    <div>{model.availability.stores[0].status}</div>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}

export default App
