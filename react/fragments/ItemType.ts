import type { Sku } from 'vtex.search-graphql'

export type SkuFragment = Pick<
  Sku,
  | 'itemId'
  | 'name'
  | 'nameComplete'
  | 'complementName'
  | 'ean'
  | 'variations'
  | 'referenceId'
  | 'measurementUnit'
  | 'unitMultiplier'
  | 'images'
>

export default {}
