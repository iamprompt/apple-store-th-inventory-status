interface IProductAvailability {
  name: string
  partNumber: string
  family: string
  imageKey: string
  price: number
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
