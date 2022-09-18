import { MODEL_CAPACITY, MODEL_COLOR, MODEL_FAMILY } from '../utils/const'

interface IProductAvailability {
  name: string
  partNumber: string
  family: keyof typeof MODEL_FAMILY
  imageKey: string
  price: number
  color: keyof typeof MODEL_COLOR
  storage: keyof typeof MODEL_CAPACITY
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

export interface IAvailabilityModels {
  updatedAt: string
  items: IProductAvailability[]
}
