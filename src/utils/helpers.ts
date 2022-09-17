import axios from 'axios'
import { IAvailabilityModels } from '../types'

export const AVAILABILITY_MODELS_URL =
  'https://raw.githubusercontent.com/iamprompt/apple-store-th-inventory-status/main/availability.json'

export const availabilityModels = async () => {
  const { data } = await axios.get<IAvailabilityModels>(AVAILABILITY_MODELS_URL)
  return data
}
