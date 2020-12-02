import { QueryHookOptions, useQuery } from 'react-apollo'

import {
  ProductsQueryResult,
  ProductQueryVariables,
} from './QueryProductsTypes'
import products from './queries/products.gql'

export default function useQueryProducts(
  options: QueryHookOptions<ProductsQueryResult, ProductQueryVariables>
) {
  return useQuery<ProductsQueryResult, ProductQueryVariables>(products, options)
}
