import type { Seller } from 'vtex.search-graphql'

export type SellerFragment = Pick<
  Seller,
  'sellerId' | 'sellerName' | 'sellerDefault'
>

export default {}
