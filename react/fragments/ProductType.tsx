import type { Product } from 'vtex.search-graphql'

export type ProductFragment = Pick<
  Product,
  | 'cacheId'
  | 'productId'
  | 'description'
  | 'productName'
  | 'productReference'
  | 'linkText'
  | 'brand'
  | 'brandId'
  | 'link'
  | 'categories'
  | 'priceRange'
  | 'specificationGroups'
  | 'skuSpecifications'
  | 'productClusters'
  | 'clusterHighlights'
  | 'properties'
>

export default {}
