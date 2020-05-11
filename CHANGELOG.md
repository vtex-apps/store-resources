# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- Remove `suggestions`, `correction` and `banners` from `productSearchV3` and create a query for each one.

## [0.57.0] - 2020-05-08
### Added
-  `taxPercentage` on the `product` query.

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
