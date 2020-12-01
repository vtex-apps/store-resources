import { ItemsFilter, InstallmentsCriteria } from 'vtex.search-graphql'
import { QueryHookOptions, useQuery } from 'react-apollo'

import products from './queries/products.gql'
import ProductType, { ProductFragment } from './fragments/ProductType'
import ItemType, { SkuFragment } from './fragments/ItemType'
import SellerType, { SellerFragment } from './fragments/SellerType'
import CommertialOfferType, {
  CommertialOfferFragment,
} from './fragments/CommertialOfferType'
import InstallmentType, {
  InstallmentFragment,
} from './fragments/InstallmentType'

type Installment = {
  Installments: InstallmentFragment[]
}

type CommertialOffer = CommertialOfferFragment & Installment

type Seller = SellerFragment & CommertialOffer

type Item = SkuFragment & { sellers: Seller[] }

type ProductsQueryResult = {
  products: Array<ProductFragment & { items: Item[] }>
}

type ProductQueryVariables = {
  category?: string
  collection?: string
  specificationFilters?: string[]
  orderBy?: string
  from?: number
  to?: number
  hideUnavailableItems?: boolean
  skusFilter?: ItemsFilter
  installmentCriteria?: InstallmentsCriteria
}

// We need to fake usage of some JS from the other modules so they
// are not removed out from the type generation
export {
  ProductType,
  ItemType,
  SellerType,
  CommertialOfferType,
  InstallmentType,
}

export default function useQueryProducts(
  options: QueryHookOptions<ProductsQueryResult, ProductQueryVariables>
) {
  return useQuery<ProductsQueryResult, ProductQueryVariables>(products, options)
}
