# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.90.0] - 2023-04-25

### Added
- `shippingOptions` to `products` query.

## [0.89.0] - 2023-03-16

## [0.88.0] - 2022-07-20

### Added
- `rule` to the `productSearch`, `products` and `productSuggestions` query.

## [0.87.0] - 2022-07-01

### Added
- `count` to `productSuggestions` query.

## [0.86.0] - 2022-02-14

### Added
- `orderBy` to the `productSuggestions` query.

## [0.85.0] - 2021-09-01

### Added
- `priceDefinition` to the `updateItems` mutation
- `priceDefinition` to the `addToCart` mutation
- `priceDefinition` to the `orderForm` query

## [0.84.0] - 2021-08-09

### Added
- `sellerId` to `itemsWithSimulation` query.

## [0.83.0] - 2021-07-28

### Added
- `sampling` to `FacetsV2` query.

## [0.82.0] - 2021-07-14

### Added
- `categoryTreeBehavior` to the `facetsV2` query.

## [0.81.0] - 2021-07-08

### Added
- `initialAttributes` to `FacetsV2`.

## [0.80.0] - 2021-05-03

### Added
- `recommendationShelf` query.

## [0.79.0] - 2021-03-30
### Added
- Field `sellerDefault` to `Seller` fragment.

## [0.78.0] - 2021-03-11

### Added
- Add `availableQuantity` to the `itemsWithSimulation` query.

## [0.77.0] - 2021-02-11

### Changed
- Use fragments on `produtSuggestions` query.

## [0.76.0] - 2021-02-01

### Added
- `hideUnavailableItems` to `productSuggestions` query.

## [0.75.2] - 2021-01-19 [YANKED]
### Added
- `originalName` to `properties` on Product fragment.

## [0.75.1] - 2021-01-05
### Added
- `categoryId` to `product` fragment.

## [0.75.0] - 2020-12-04
### Added
- New hook `useQueryProducts`.
- Types for `QueryProducts` on `QueryProductsTypes` module.

## [0.74.1] - 2020-12-01
### Added
- `scope: private` to `orderForm` query.

## [0.74.0] - 2020-11-13
### Added
- `misspelled` and `operator` to the `productSuggestions` query.

## [0.73.0] - 2020-10-08
### Added
- Added `quantity` and arguments to `facets: values` on `facetsV2`.

## [0.72.0] - 2020-10-07
### Added
- `productRecommendations` query from vtex.shelf.

### Changed
- Use fragments in Product fields, making it easier to add new fields across queries.

## [0.71.0] - 2020-09-22
### Added
- `itemsWithSimulation` query.

## [0.70.0] - 2020-09-18
### Added
- `excludedPaymentSystems` and `includedPaymentSystems` arguments to `productSearchV3` query.

## [0.69.0] - 2020-09-10

### Added
- Add new fields to the teasers from the `products` query.

## [0.68.0] - 2020-08-12

### Added
- `productOriginVtex` to the `productSuggestions` query.
- `simulationBehavior` to the `productSuggestions` query.

## [0.67.0] - 2020-07-23
### Added
- `PaymentSystemName` to `Installments of `Product` query.

## [0.66.0] - 2020-07-22
### Added
- Add `correction` to `productSearchV3`.

## [0.65.0] - 2020-07-21
### Added
- `originalName` field to `specificationGroups`, `specifications`, `skuSpecifications.field` and `skuSpecifications.values` of `product`, `products`, `productBenefits`, `productSearchV2`, `productSearchV3`, and `productSuggestions` query.

## [0.64.0] - 2020-07-14
### Added
- `spotPrice` on `products`, `productSearch`, `productSearchV2` and `productSearchV3` queries.

## [0.63.0] - 2020-07-10

### Added
- `selectedProperties` field to the `product` object.

## [0.62.0] - 2020-07-08
### Added
- `skuSpecifications` field to `productSearchV3` query.

## [0.61.0] - 2020-06-17

### Added
- Redirect field to `productSearch`.
- Breadcrumb to `facets`.

### Changed
- Split `suggestions`, `correction` and `banners` into three new queries.

## [0.60.1] - 2020-06-02

### Added
- Add hidden property to facets.

## [0.60.0] - 2020-06-02
### Added
- `taxPercentage` and `Tax` on `products`, `productSearch`, `productSearchV2` and `productSearchV3` queries.

## [0.59.1] - 2020-05-19
### Fixed
- `updateItems` and `addItem` mutations missing `productId`.

## [0.59.0] - 2020-05-18 [YANKED]
### Added
- `productId` on the `orderForm` query.

## [0.58.1] - 2020-05-13
### Fixed
- Add workspace querystring to manifest.json href.

## [0.58.0] - 2020-05-12
### Added
- Adds `sellers` attribute for the orderForm query.

## [0.57.0] - 2020-05-08
### Added
- `taxPercentage` on the `product` query.

## [0.56.2] - 2020-04-20
### Fixed
- Issue where lazy PWA would prevent PWA features from working (reverts 0.52.1)

## [0.56.1] - 2020-04-14
### Fixed
- Problem caused by `0.56.0`.

## [0.56.0] - 2020-04-13 [YANKED]
### Added
-  `spotPrice` on the `product` query.

## [0.55.0] - 2020-04-08
### Added
- `productSearchV3`, `facetsV2`, `searchMetadataV2`, `topSearches`, `suggestionProducts` and `suggestionSearches` queries.

## [0.54.0] - 2020-03-26
### Added
- Installment Criteria as possible param on productSearchV2 query

## [0.53.0] - 2020-03-25
### Added
- Adds item metadata with assembly options

## [0.52.1] - 2020-03-13
- Make PWA Provider do a lazy query.

## [0.52.0] - 2020-03-11
### Added
- Get product estimated arrival date in product query.

## [0.51.1] - 2020-03-07
### Fixed
- Remove gifts from product query temporarily.

## [0.51.0] - 2020-03-03
### Added
- `installmentCriteria` param on products query.

## [0.50.0] - 2020-03-03
### Added
- `gifts` field to product queries.

## [0.49.0] - 2020-03-02
### Added
- Add queryArgs field to facets resolver for new search URLs structure

## [0.48.0] - 2020-03-02
### Added
- Create `products` query.

## [0.47.0] - 2020-02-19
### Changed
- Fetch all SKUs images in product query.

## [0.46.0] - 2020-02-17
### Added
- Separate entry points for each query and mutation

## [0.45.0] - 2020-02-12
### Added
- Consume `canHaveAttachment` resolver in OrderFormItem.

## [0.44.0] - 2020-02-07 [YANKED]
### Added
- Add queryArgs field to facets resolver for new search URLs structure

## [0.43.0] - 2020-01-24
### Added
- `simulationBehavior` to productSearch query.

## [0.42.0] - 2020-01-14
### Added
-  `skuSpecifications` on the `product` query.

## [0.41.0] - 2020-01-04
### Added
- `lastName` field to `clientProfileData` field in `orderForm` query.
- `userProfileId` field to `orderForm` query.

## [0.40.0] - 2020-01-02
### Added
- `facetsBehavior` to the `facets` query.

## [0.39.1] - 2019-12-27
### Fixed
- Add docs builder.

## [0.39.0] - 2019-12-20
### Added
- UTM and UTMi args to addToCart query.

## [0.38.0] - 2019-12-04
### Added
- Send `installWebApp` pixel event on install prompt.

## [0.37.1] - 2019-11-12
### Added
- Save when user answer when the install prompt is showed.

### Removed
- `idb`

## [0.37.0] - 2019-11-11
### Added
- use priceRange resolver in productSearchv2.

## [0.36.3] - 2019-11-11
### Changed
- Make `skusFilter` variable default value be `ALL_AVAILABLE` in search query.

## [0.36.2] - 2019-11-08
### Added
- Care `skusFilter` variable to productSearchV2 query.

## [0.36.1] - 2019-11-07
### Changed
- Renames queries with same name

## [0.36.0] - 2019-11-06
### Added
- Create facets query.

## [0.35.0] - 2019-11-01
### Added
- Check if user already dismissed app installation using local storage variable.
- Check if user already installed app by checking display mode.

## [0.34.1] - 2019-10-29

## [0.34.0] - 2019-10-29
### Added
- `useOrderForm` hook.

## [0.33.2] - 2019-10-25
### Changed
- Make `orderFormConsumer` use hook.

## [0.33.1] - 2019-10-24
### Removed
- titletag and metaTagDescription resolvers from productSearch. They are used from the searchMetadata query and are unneeded.

## [0.33.0] - 2019-10-23
### Added
- `category`, `collection` and `specificationFilters` arguments to `productSearchV2` query.

## [0.32.0] - 2019-10-14
### Added
- Fetch `variations` attribute of `product` from `productSearchV2` query.

## [0.31.0] - 2019-10-14 [YANKED]
### Added
- Check if user already dismissed app installation using local storage variable.
- Check if user already installed app by checking display mode.

## [0.30.1] - 2019-10-14

## [0.30.0] - 2019-10-03
### Added
- `specificationGroups` to products queries.

## [0.29.0] - 2019-09-20
### Added
- `defaultValue` to `InputValue` in `Product` query.

## [0.28.0] - 2019-09-19
### Added
- `required` field to `AssemblyOptions` in `Product` query.

## [0.27.0] - 2019-09-16
### Added
- `InputValues` to `Product` query.

## [0.26.0] - 2019-09-10
### Changed
- Start using search queries from `search-graphql`.

## [0.25.0] - 2019-09-02
### Added
- `searchMetadata` query.

## [0.24.0] - 2019-08-29
### Added
- `promptOnCustomEvent` in `PWAContext`.

## [0.23.0] - 2019-08-29
### Changed
- Create unstable productCategoryTree query.
- Add variable to skip category tree resolver in product query.

## [0.22.0] - 2019-08-28
### Added
- Helmet with PWA metadata and links in `PWAProvider`.
- Query to get PWA data in `PWAContext`.

## [0.21.0] - 2019-08-27
### Added
- brandId to productSearchV2

## [0.20.0] - 2019-08-09

### Added
- Field `videos` to product items

## [0.19.2] - 2019-08-05
### Changed
- Limit installments query, using MAX criteria.

## [0.19.1] - 2019-07-31
### Changed
- Remove categoryTree resolver from productSearch search.
- Remove deprecated fields from facets query.

## [0.19.0] - 2019-07-26
### Added
- More fields on cart queries for assembly options.

## [0.18.0] - 2019-07-19
### Added
- Fields `productRefId`, `additionalInfo`, `productCategoryIds`, `productCategories` to cart related queries: `orderForm`, `addToCart` and `updateItems`.

## [0.17.0] - 2019-07-18
### Added
- `customData` field in `OrderForm` query.

## [0.16.0] - 2019-07-10
### Added
- Added `adress` query.

## [0.15.2] - 2019-07-10
### Added
- Added `properties` field in `ProductSearchV2` query.

## [0.15.1] - 2019-07-04
### Added
- Added `Teasers` and `Discount` field in `Product` and `ProductSearchV2` queries.

## [0.15.0] - 2019-07-02
### Added
- `ProductUniqueIdentifier` parameter to product query

## [0.14.4] - 2019-06-28
### Fixed
- Return `Installments` for `search-result`.

## [0.14.3] - 2019-06-27

### Fixed
- Build assets with new builder hub.

## [0.14.2] - 2019-06-24
### Added
- `brandId` to `Product` query.

## [0.14.1] - 2019-06-17

### Fixed

- Ask up to five levels of department filters.

## [0.14.0] - 2019-06-14

### Added

- Field `productReference` to `productSearchV2` query.

## [0.13.0] - 2019-06-12

### Added

- Field `productReference` to `product` query.

## [0.12.3] - 2019-05-24

### Added

- `productBenefits` query.

### Changed

- Add warning of removal in next major to `recommendationAndBenefits` file.

## [0.12.2] - 2019-05-20

### Added

- Fetch breadcrumb params in productSearch query.

## [0.12.1] - 2019-05-14

### Fixed

- Use `hideUnavailableItems` parameter on facets query.

## [0.12.0] - 2019-05-10

### Added

- `PWAContext` and `usePWA` to allow apps to control, for now, the install prompt (Add to Home Screen).

## [0.11.1] - 2019-05-10

### Added

- Queries product cluster id.

## [0.11.0] - 2019-05-07

## [0.10.1] - 2019-05-06

### Added

- Use new paramenter `hieUnavailableItems` on product search v2.

## [0.10.0] - 2019-05-01

### Added

- New `productSearchV2` query.

## [0.9.0] - 2019-04-26

### Changed

- Separate facets and search input variables.

## [0.8.0] - 2019-04-25

### Added

- New `productSearch` query.

## [0.7.2] - 2019-04-01

### Added

- Add cartIndex to orderForm queries.

## [0.7.1] - 2019-04-01

### Added

- Add checkin fields to OrderForm query/mutation.

## [0.7.0] - 2019-03-31

### Added

- Add `discountHighlights` field in search and product queries.

## [0.6.3] - 2019-03-28

### Changed

- Removed unused `itemMetadata` fields from orderForm queries/mutations.

## [0.6.2] - 2019-03-28

### Fixed

- Make updateOrderFormShipping output.

## [0.6.1] - 2019-03-27

### Added

- Add `specificationGroups` in `product` query.

## [0.6.0] - 2019-03-21

### Added

- Return the full `orderForm` from the items mutations.

## [0.5.1] - 2019-02-28

### Added

- Add update order form checkin mutation.

## [0.5.0] - 2019-02-27

### Added

- Add assembly options resolvers on OrderForm query

## [0.4.1] - 2019-02-14

### Added

- `address` on `session` query

## [0.4.0] - 2019-02-11

### Added

- Add assembly options fields to product and orderForm query.

## [0.3.1] - 2019-02-05

### Changed

- Add `description` of the product to search query.

## [0.3.0] - 2019-01-18

### Changed

- Update React builder to 3.x.

## [0.2.0] - 2019-01-16

### Changed

- Add more queries and rename the `.gql` files.
- Add OrderFormContext mutations.

## [0.1.2] - 2019-01-14

### Changed

- Remove `description` of the product to search query.
