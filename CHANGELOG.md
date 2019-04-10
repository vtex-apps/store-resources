# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0-beta] - 2019-04-10
### Changed
- Update search query to use `productSearch` query instead of `search`.

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
- Add `specificationGroups ` in `product` query.

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
