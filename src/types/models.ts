interface IProductAvailability {
  name: string
  partNumber: string
  family: string
  imageKey: string
  price: number
  color: string
  storage: string
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
