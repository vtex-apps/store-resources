/** DEPRECATED, being kept just for retrocompatibility.
 * Create individual entry points for each mutation instead */

import addToCart from './mutations/addToCart.gql'
import updateItems from './mutations/updateItems.gql'
import updateOrderFormProfile from './mutations/updateOrderFormProfile.gql'
import updateOrderFormShipping from './mutations/updateOrderFormShipping.gql'
import updateOrderFormCheckin from './mutations/updateOrderFormCheckin.gql'

export default {
  addToCart,
  updateItems,
  updateOrderFormProfile,
  updateOrderFormShipping,
  updateOrderFormCheckin,
}
