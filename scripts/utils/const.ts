export const AOS_BASE_URL = (country: string = 'th') =>
  `https://www.apple.com/${country}/shop`

export const AOS_FULFILLMENT_URL = (country: string = 'th') =>
  `${AOS_BASE_URL(country)}/fulfillment-messages`
