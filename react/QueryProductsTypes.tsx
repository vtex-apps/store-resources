import type { InstallmentsCriteria, ItemsFilter } from 'vtex.search-graphql'

import type { CommertialOfferFragment } from './fragments/CommertialOfferType'
import CommertialOfferType from './fragments/CommertialOfferType'
import type { InstallmentFragment } from './fragments/InstallmentType'
import InstallmentType from './fragments/InstallmentType'
import type { SkuFragment } from './fragments/ItemType'
import ItemType from './fragments/ItemType'
import type { ProductFragment } from './fragments/ProductType'
import ProductType from './fragments/ProductType'
import type { SellerFragment } from './fragments/SellerType'
import SellerType from './fragments/SellerType'

type Installment = {
  Installments: InstallmentFragment[]
}

type CommertialOffer = CommertialOfferFragment & Installment

type Seller = SellerFragment & CommertialOffer

type Item = SkuFragment & { sellers: Seller[] }

export type Data = {
  products: Array<ProductFragment & { items: Item[] }>
}

export type Variables = {
  category?: string
  collection?: string
  specificationFilters?: string[]
  orderBy?: string
  from?: number
  to?: number
  hideUnavailableItems?: boolean
  skusFilter?: ItemsFilter
  installmentCriteria?: InstallmentsCriteria
  shippingOptions?: string[]
  advertisementOptions: AdvertisementOptions
}

type AdvertisementOptions = {
  showSponsored?: boolean
  sponsoredCount?: number
  repeatSponsoredProducts?: boolean
  advertisementPlacement?: string
}

// We need to fake usage of some JS from the other modules so they
// are not removed out from the type generation
export {
  CommertialOfferType,
  InstallmentType, ItemType, ProductType, SellerType
}

