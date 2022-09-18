import axios from 'axios'
import { IAppleFulfillment } from '../types/fulfillment-messages'
import { AOS_FULFILLMENT_URL } from './const'

interface IGetAosFulfillmentArgs {
  country?: string
  little?: boolean
  fts?: boolean
  pl?: boolean // Pickup
  location?: string

  // Computation Needed
  partNos?: string[]
}

export const GET_AOS_FULFILLMENT = async ({
  country = 'th',
  partNos = [],
  ...args
}: IGetAosFulfillmentArgs = {}) => {
  const parts = partNos.reduce((acc, partNo, i) => {
    return {
      ...acc,
      [`parts.${i}`]: partNo,
    }
  }, {})

  return axios
    .get<IAppleFulfillment>(AOS_FULFILLMENT_URL(country), {
      params: {
        // pl: true,
        // fts: true,
        'mts.0': 'regular',
        'mts.1': 'sticky',
        little: false,
        location: '10600',
        postalCode: '10600',
        ...args,
        ...parts,
      },
    })
    .then((res) => {
      return res.data.body.content
    })
}
