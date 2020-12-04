import type { QueryHookOptions } from 'react-apollo'
import { useQuery } from 'react-apollo'

import type { Data, Variables } from './QueryProductsTypes'
import products from './queries/products.gql'

export default function useQueryProducts(
  options: QueryHookOptions<Data, Variables>
) {
  return useQuery<Data, Variables>(products, options)
}
