export type IModels = Record<string, Model[]>

export interface Model {
  name: string
  partNumber: string
  family: string
  imageKey: string
  price: number
}
