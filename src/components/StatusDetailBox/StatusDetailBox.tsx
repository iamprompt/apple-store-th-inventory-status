import clsx from 'clsx'
import { FC } from 'react'

interface IStatusDetailBoxProps {
  isAvailable: boolean
  title: string
  status: string
}

const StatusDetailBox: FC<IStatusDetailBoxProps> = ({
  isAvailable,
  title,
  status,
}) => {
  return (
    <div
      className={clsx(
        'p-2 rounded-xl border-2 text-center h-16 items-center justify-center flex flex-col w-full',
        isAvailable
          ? ' bg-[#333333] border-[#333333] opacity-100 text-white'
          : 'border-gray-300 bg-gray-100 opacity-50'
      )}
    >
      <div className="font-semibold">{title}</div>
      <div>{status}</div>
    </div>
  )
}

export default StatusDetailBox
