import clsx from 'clsx'
import { FC, useMemo } from 'react'
import { IAvailabilityModels } from '../../types'
import { MODEL_CAPACITY, MODEL_COLOR, MODEL_FAMILY } from '../../utils/const'

const AvailabilityProductCard: FC<IAvailabilityModels['items'][0]> = ({
  availability,
  name,
  family,
  color,
  storage,
  imageKey,
}) => {
  const isAvailable = useMemo(
    () => availability.stores.some((store) => store.isAvailable),
    [availability]
  )

  return (
    <div
      className={clsx(
        'rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl border border-gray-150',
        isAvailable ? 'bg-green-50' : 'bg-gray-100'
      )}
    >
      <div className="p-3 flex flex-col items-center">
        <img
          src={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/${imageKey}?fmt=png-alpha`}
          alt={name}
          className={clsx(
            'aspect-square w-full max-w-[300px]',
            isAvailable ? 'filter grayscale-0' : 'filter grayscale'
          )}
        />
        <h2 className="font-bold text-lg text-center">
          {MODEL_FAMILY[family]}
        </h2>
        <p className="text-center text-gray-600">
          {MODEL_COLOR[color]} {MODEL_CAPACITY[storage]}
        </p>
      </div>
      <div>
        <div
          className={clsx(
            'p-2 m-4 rounded-xl border-2 text-center h-16 items-center justify-center flex flex-col',
            availability.stores[1].isAvailable
              ? ' bg-[#333333] border-[#333333] opacity-100 text-white'
              : 'border-gray-300 bg-gray-100 opacity-50'
          )}
        >
          <div className="font-semibold">Apple Central World</div>
          {availability.stores[1].isAvailable && (
            <div>{availability.stores[1].status}</div>
          )}
        </div>
        <div
          className={clsx(
            'p-2 m-4 rounded-xl border-2 text-center h-16 items-center justify-center flex flex-col',
            availability.stores[0].isAvailable
              ? ' bg-[#333333] border-[#333333] opacity-100 text-white'
              : 'border-gray-300 bg-gray-100 opacity-50'
          )}
        >
          <div className="font-semibold">Apple Iconsiam</div>
          {availability.stores[0].isAvailable && (
            <div>{availability.stores[0].status}</div>
          )}
        </div>
        <div
          className={clsx(
            'p-2 m-4 rounded-xl border-2 text-center h-16 items-center justify-center flex flex-col',
            !!availability.delivery.status
              ? ' bg-[#333333] border-[#333333] opacity-100 text-white'
              : 'border-gray-300 bg-gray-100 opacity-50'
          )}
        >
          <div className="font-semibold">การจัดส่ง</div>
          {availability.delivery.status && (
            <div>{availability.delivery.status}</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AvailabilityProductCard
