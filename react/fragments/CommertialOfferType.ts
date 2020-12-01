import type { Offer } from 'vtex.search-graphql'

export type CommertialOfferFragment = Pick<
  Offer,
  | 'discountHighlights'
  | 'teasers'
  | 'Price'
  | 'ListPrice'
  | 'Tax'
  | 'taxPercentage'
  | 'spotPrice'
  | 'PriceWithoutDiscount'
  | 'RewardValue'
  | 'PriceValidUntil'
  | 'AvailableQuantity'
>

export default {}
