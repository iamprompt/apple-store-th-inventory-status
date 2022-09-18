import clsx from 'clsx'
import { FC, useMemo } from 'react'
import { IAvailabilityModels } from '../../types'
import { MODEL_CAPACITY, MODEL_COLOR, MODEL_FAMILY } from '../../utils/const'
import StatusDetailBox from '../StatusDetailBox'

const AvailabilityProductCard: FC<IAvailabilityModels['items'][0]> = ({
  availability,
  name,
  family,
  color,
  storage,
  imageKey,
  price,
  partNumber,
}) => {
  const isPickupAvailable = useMemo(
    () => availability.stores.some((store) => store.isAvailable),
    [availability]
  )

  return (
    <div
      className={clsx(
        'rounded-2xl overflow-hidden flex flex-col shadow-lg hover:shadow-xl border border-gray-150',
        isPickupAvailable ? 'bg-green-50' : 'bg-gray-100'
      )}
    >
      <div className="p-3 flex flex-col items-center">
        <img
          src={`https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/${imageKey}?fmt=png-alpha`}
          alt={name}
          className={clsx(
            'aspect-square w-full max-w-[300px]',
            isPickupAvailable ? 'filter grayscale-0' : 'filter grayscale'
          )}
        />
        <div>
          <h2 className="font-bold text-lg text-center">
            {MODEL_FAMILY[family]}
          </h2>
          <p className="text-center text-gray-600">{MODEL_COLOR[color]}</p>
          <p className="text-center text-gray-600">{MODEL_CAPACITY[storage]}</p>
          <p className="text-center text-gray-600 mt-3">
            {new Intl.NumberFormat('th-TH', {
              style: 'currency',
              currency: 'THB',
            }).format(price)}
          </p>
        </div>
      </div>
      <div className="flex flex-col m-4 space-y-4">
        {availability.stores.map((store) => (
          <StatusDetailBox
            key={`${store.storeName}-${partNumber}`}
            isAvailable={store.isAvailable}
            title={`Apple ${store.storeName}`}
            status={store.status}
          />
        ))}
        {availability.delivery.status && (
          <StatusDetailBox
            isAvailable={!!availability.delivery.status}
            title="การจัดส่ง"
            status={availability.delivery.status}
          />
        )}
      </div>
    </div>
  )
}

export default AvailabilityProductCard
