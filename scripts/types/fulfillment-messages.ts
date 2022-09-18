export type IAppleFulfillment = {
  head: Head
  body: Body
}

export type Head = {
  status: string
  data: Data
}

export type Body = {
  content: Content
}

export type Content = {
  pickupMessage: PickupMessage
  deliveryMessage: DeliveryMessage
}

// Delivery Messages - Information about delivery options
export type DeliveryMessage = Record<string, DeliveryMessageInfo> & {
  geoLocated: boolean
  availableOptionsText: string
  dudeCookieSet: boolean
  processing: string
  contentloaded: string
  dudeLocated: boolean
  locationCookieValueFoundForThisCountry: boolean
  accessibilityDeliveryOptions: string
}

export type DeliveryMessageInfo = {
  regular: DeliveryMessageInfoVariant
}

export type DeliveryMessageInfoVariant = {
  orderByDeliveryBy: string
  deliveryOptionMessages: DeliveryOptionMessage[]
  deliveryOptions: DeliveryOption[]
  promoMessage: string
  deliveryOptionsLink: DeliveryOptionsLink
  showDeliveryOptionsLink: boolean
  messageType: string
  basePartNumber: string
  commitCodeId: string
  subHeader: string
  defaultLocationEnabled: boolean
  idl: boolean
  inHomeSetup: boolean
  isElectronic: boolean
  isBuyable: boolean
}

export type DeliveryOptionMessage = {
  displayName: string
  inHomeSetup: string
  encodedUpperDateString: string
}

export type DeliveryOption = {
  displayName: string
  date: string
  shippingCost: string
  additionalContent: null
}

export type DeliveryOptionsLink = {
  text: string
  dataVar: Data
  newTab: boolean
}

export type Data = {}

// Pickup Message - Information about picking up the item at Apple Stores
export type PickupMessage = {
  stores: PickupStore[]
  overlayInitiatedFromWarmStart: boolean
  viewMoreHoursLinkText: string
  storesCount: string
  little: boolean
  location: string
  notAvailableNearby: string
  notAvailableNearOneStore: string
  warmDudeWithAPU: boolean
  viewMoreHoursVoText: string
  availability: PickupAvailability
  viewDetailsText: string
  legendLabelText: string
  filteredTopStore: boolean
}

export type PickupAvailability = {
  isComingSoon: boolean
}

export type PickupStore = {
  storeEmail: string
  storeName: string
  reservationUrl: string
  makeReservationUrl: string
  storeImageUrl: string
  country: string
  city: string
  storeNumber: string
  partsAvailability: PartsAvailability
  phoneNumber: string
  pickupTypeAvailabilityText: string
  address: StoreAddress
  hoursUrl: string
  storeHours: StoreHours
  pickupEncodedUpperDateString: string
  storelatitude: number
  storelongitude: number
  storedistance: number
  storeDistanceWithUnit: string
  storeDistanceVoText: string
  retailStore: RetailStore
  storelistnumber: number
  storeListNumber: number
  pickupOptionsDetails: PickupOptionsDetails
  rank: number
}

export type StoreAddress = {
  address: string
  address3: string
  address2: string
  postalCode: string
}

export type PartsAvailability = Record<string, PartsAvailabilityInfo>

export type PartsAvailabilityInfo = {
  storePickEligible: boolean
  pickupSearchQuote: string
  partNumber: string
  purchaseOption: string
  ctoOptions: string
  pickupDisplay: string
  pickupType: string
  messageTypes: MessageTypes
}

export type MessageTypes = Record<string, MessageTypesInfo>
export type MessageTypesInfo = {
  storeSearchEnabled: boolean
  storePickupLabel: string
  storeSelectionEnabled: boolean
  storePickupQuote: string
  storePickupQuote2_0?: string
  storePickupLinkText: string
  storePickupProductTitle: string
}

export type PickupOptionsDetails = {
  whatToExpectAtPickup: string
  comparePickupOptionsLink: string
  pickupOptions: PickupOption[]
}

export type PickupOption = {
  pickupOptionTitle: string
  pickupOptionDescription: string
  index: number
}

export type RetailStore = {
  storeNumber: string
  storeUniqueId: string
  name: string
  storeTypeKey: string
  storeSubTypeKey: string
  storeType: string
  phoneNumber: string
  email: string
  carrierCode: null
  locationType: null
  latitude: number
  longitude: number
  address: RetailStoreAddress
  urlKey: null
  directionsUrl: null
  storeImageUrl: string
  makeReservationUrl: string
  hoursAndInfoUrl: string
  storeHours: StoreHour[]
  storeHolidays: any[]
  secureStoreImageUrl: string
  distance: number
  distanceUnit: string
  distanceWithUnit: string
  timezone: string
  storeIsActive: boolean
  lastUpdated: number
  lastFetched: number
  dateStamp: string
  distanceSeparator: string
  nextAvailableDate: null
  storeHolidayLookAheadWindow: number
  driveDistanceWithUnit: null
  driveDistanceInMeters: null
  dynamicAttributes: Data
  storePickupMethodByType: StorePickupMethodByType
  storeTimings: null
  availableNow: boolean
}

export type RetailStoreAddress = {
  city: string
  companyName: string
  countryCode: string
  county: null
  district: string
  geoCode: null
  label: null
  languageCode: string
  mailStop: null
  postalCode: string
  province: null
  state: null
  street: string
  street2: string
  street3: null
  suburb: null
  type: string
  addrSourceType: null
  outsideCityFlag: null
  daytimePhoneAreaCode: null
  eveningPhoneAreaCode: null
  daytimePhone: string
  fullPhoneNumber: null
  eveningPhone: null
  emailAddress: null
  firstName: null
  lastName: null
  suffix: null
  lastNamePhonetic: null
  firstNamePhonetic: null
  title: null
  businessAddress: boolean
  uuid: string
  mobilePhone: null
  mobilePhoneAreaCode: null
  cityStateZip: null
  daytimePhoneSelected: boolean
  middleName: null
  residenceStatus: null
  moveInDate: null
  subscriberId: null
  locationType: null
  carrierCode: null
  metadata: Data
  verificationState: string
  expiration: null
  markForDeletion: boolean
  primaryAddress: boolean
  correctionResult: null
  fullDaytimePhone: string
  fullEveningPhone: null
  twoLineAddress: string
  addressVerified: boolean
}

export type StoreHour = {
  storeDays: string
  voStoreDays: null
  storeTimings: string
}

export type StorePickupMethodByType = {
  INSTORE: Instore
}

export type Instore = {
  typeDirection: TypeDirection
  typeMeetupLocation: TypeMeetupLocation
  typeCoordinate: TypeCoordinate
  services: string[]
  type: string
}

export type TypeCoordinate = {
  lat: number
  lon: number
}

export type TypeDirection = {
  directionByLocale: null
}

export type TypeMeetupLocation = {
  meetingLocationByLocale: null
}

export type StoreHours = {
  storeHoursText: string
  bopisPickupDays: string
  bopisPickupHours: string
  hours: Hour[]
}

export type Hour = {
  storeTimings: string
  storeDays: string
}
