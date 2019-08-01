# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
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
