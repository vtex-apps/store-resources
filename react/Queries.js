/** DEPRECATED, being kept just for retrocompatibility.
 * Create individual entry points for each query instead */

import orderForm from './queries/orderForm.gql'
import product from './queries/product.gql'
import productPreviewFragment from './queries/productPreview.gql'
import recommendationsAndBenefits from './queries/recommendationsAndBenefits.gql'
import search from './queries/search.gql'
import productSearch from './queries/productSearch.gql'
import productSearchV2 from './queries/productSearchV2.gql'
import productSearchV3 from './queries/productSearchV3.gql'
import session from './queries/session.gql'
import productBenefits from './queries/productBenefits.gql'
import address from './queries/address.gql'
import searchMetadata from './queries/searchMetadata.gql'
import searchMetadataV2 from './queries/searchMetadataV2.gql'
import productCategoryTree from './queries/UNSTABLE__productCategoryTree.gql'
import facets from './queries/facets.gql'
import facetsV2 from './queries/facetsV2.gql'
import topSearches from './queries/topSearches.gql'
import suggestionSearches from './queries/suggestionSearches.gql'
import suggestionProducts from './queries/suggestionProducts.gql'

export default {
  address,
  orderForm,
  product,
  productSearch,
  productSearchV2,
  productSearchV3,
  productPreviewFragment,
  recommendationsAndBenefits,
  search,
  session,
  productBenefits,
  UNSTABLE__productCategoryTree: productCategoryTree,
  searchMetadata,
  searchMetadataV2,
  facets,
  facetsV2,
  topSearches,
  suggestionSearches,
  suggestionProducts
};
