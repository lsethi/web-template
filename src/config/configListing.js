/////////////////////////////////////////////////////////
// Configurations related to listing.                  //
// Main configuration here is the extended data config //
/////////////////////////////////////////////////////////

// NOTE: if you want to change the structure of the data,
// you should also check src/util/configHelpers.js
// some validation is added there.

/**
 * Configuration options for listing fields (custom extended data fields):
 * - key:                           Unique key for the extended data field.
 * - scope (optional):              Scope of the extended data can be either 'public' or 'private'.
 *                                  Default value: 'public'.
 *                                  Note: listing doesn't support 'protected' scope atm.
 * - includeForListingTypes:        An array of listing types, for which the extended
 *   (optional)                     data is relevant and should be added.
 * - schemaType (optional):         Schema for this extended data field.
 *                                  This is relevant when rendering components and querying listings.
 *                                  Possible values: 'enum', 'multi-enum', 'text', 'long', 'boolean'.
 * - enumOptions (optional):        Options shown for 'enum' and 'multi-enum' extended data.
 *                                  These are used to render options for inputs and filters on
 *                                  EditListingPage, ListingPage, and SearchPage.
 * - filterConfig:                  Filter configuration for listings query.
 *    - indexForSearch (optional):    If set as true, it is assumed that the extended data key has
 *                                    search index in place. I.e. the key can be used to filter
 *                                    listing queries (then scope needs to be 'public').
 *                                    Note: Flex CLI can be used to set search index for the key:
 *                                    https://www.sharetribe.com/docs/references/extended-data/#search-schema
 *                                    Read more about filtering listings with public data keys from API Reference:
 *                                    https://www.sharetribe.com/api-reference/marketplace.html#extended-data-filtering
 *                                    Default value: false,
 *   - filterType:                    Sometimes a single schemaType can be rendered with different filter components.
 *                                    For 'enum' schema, filterType can be 'SelectSingleFilter' or 'SelectMultipleFilter'
 *   - label:                         Label for the filter, if the field can be used as query filter
 *   - searchMode (optional):         Search mode for indexed data with multi-enum schema.
 *                                    Possible values: 'has_all' or 'has_any'.
 *   - group:                         SearchPageWithMap has grouped filters. Possible values: 'primary' or 'secondary'.
 * - showConfig:                    Configuration for rendering listing. (How the field should be shown.)
 *   - label:                         Label for the saved data.
 *   - isDetail                       Can be used to hide detail row (of type enum, boolean, or long) from listing page.
 *                                    Default value: true,
 * - saveConfig:                    Configuration for adding and modifying extended data fields.
 *   - label:                         Label for the input field.
 *   - placeholderMessage (optional): Default message for user input.
 *   - isRequired (optional):         Is the field required for providers to fill
 *   - requiredMessage (optional):    Message for those fields, which are mandatory.
 */
export const listingFields = [
  {
    key: 'listingType',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'selling', label: 'For Sale' },
      { option: 'renting-out', label: 'For Rent Or Lease' },
      { option: 'offering', label: 'Offering Services' },
      { option: 'request-for-quotation', label: 'Request For Quotation' },
    ],
    filterConfig: {
      indexForSearch: true,
      filterType: 'SelectSingleFilter',
      label: 'Listing Types',
      group: 'primary',
    },
    saveConfig: {
      label: '',
      isRequired: false
    },
  },
  {
    key: 'category',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'commercial-buildings', label: 'Commercial Buildings',},
      { option: 'residential-buildings', label: 'Residential Buildings' },
      { option: 'materials', label: 'Materials' },
      { option: 'services', label: "Services" },
      { option: 'real-estate', label: "Real Estate" },
    ],
    filterConfig: {
      indexForSearch: true,
      filterType: 'SelectSingleFilter',
      label: 'Category',
      group: 'primary',
    },
    showConfig: {
      label: 'Category',
      isDetail: true,
    },
    saveConfig: {
      label: 'Category',
      placeholderMessage: 'Select an option…',
      isRequired: true,
      requiredMessage: 'You need to select a category.',
    },
  },
  {
    key: 'subcategory',
    scope: 'public',
    schemaType: 'enum',
    enumOptions: [
      { option: 'community-and-recreational-centers', label: 'Community and recreational centers',parent:'commercial-buildings' },
      { option: 'emergency-and-disaster-relief-housing', label: 'Emergency and disaster relief housing',parent:'commercial-buildings'},
      { option: 'healthcare-facilities', label: 'Healthcare facilities',parent:'commercial-buildings' },
      { option: 'hotel-and-hospitality-buildings', label: 'Hotel and hospitality buildings',parent:'commercial-buildings' },
      { option: 'offices-and-workspaces', label: 'Offices and workspaces',parent:'commercial-buildings' },
      { option: 'retail-spaces', label: 'Retail spaces',parent:'commercial-buildings' },
      { option: 'schools-and-classrooms', label: 'Schools and classrooms',parent:'commercial-buildings' },
      { option: 'shipping-containers', label: 'Shipping containers',parent:'commercial-buildings' },
      { option: 'specialty-structures', label: 'Specialty structures',parent:'commercial-buildings' },
      { option: 'storage-and-warehouse-facilities', label: 'Storage and warehouse facilities',parent:'commercial-buildings' },
      { option: 'workforce-housing', label: 'Workforce housing',parent:'commercial-buildings' },
      { option: 'single-family', label: 'Single family',parent:'residential-buildings' },
      { option: 'multifamily', label: 'Multifamily',parent:'residential-buildings' },
      { option: 'appliances', label: 'Appliances',parent:'materials' },
      { option: 'building-materials', label: 'Building materials',parent:'materials' },
      { option: 'hvac-equipment', label: 'Hvac equipment',parent:'materials' },
      { option: 'hardware-and-fasteners', label: 'Hardware and fasteners',parent:'materials' },
      { option: 'electrical', label: 'Electrical',parent:'materials' },
      { option: 'flooring-tile-and-wall-finishes', label: 'Flooring, tile and wall finishes',parent:'materials' },
      { option: 'kitchen-and-bathroom-fixtures-millwork-and-countertops', label: 'Kitchen and bathroom fixtures, millwork, and countertops',parent:'materials' },
      { option: 'mass-timber-and-clt', label: 'Mass,timber and clt',parent:'materials' },
      { option: 'roofing-materials', label: 'Roofing materials',parent:'materials' },
      { option: 'plumbing', label: 'Plumbing',parent:'materials' },
      { option: 'windows-and-doors', label: 'Windows and doors',parent:'materials' },
      { option: 'architects-and-engineers', label: 'Architects and engineers',parent:'services' },
      { option: 'crane-and-rigging', label: 'Crane and rigging',parent:'services' },
      { option: 'estimation-and-takeoffs', label: 'Estimation and takeoffs',parent:'services' },
      { option: 'finishing-contractors', label: 'Finishing contractors',parent:'services' },
      { option: 'general-contractring', label: 'General contractring',parent:'services' },
      { option: 'manufacturing', label: 'Manufacturing',parent:'services' },
      { option: 'mechanical-electric-and-plumbing', label: 'Mechanical,electric and plumbing',parent:'services' },
      { option: 'site-preparation-and-installation', label: 'Site preparation and installation',parent:'services' },
      { option: 'transportation-and-logistics-companies', label: 'Transportation and logistics companies',parent:'services' },
      { option: 'residential', label: 'Residential',parent:'real-estate' },
      { option: 'commercial', label: 'Commercial',parent:'real-estate' },
      { option: 'financing', label: 'Financing',parent:'real-estate' },
      // Add more subcategory options as needed
    ],
    filterConfig: {
      indexForSearch: true,
      filterType: 'SelectMultipleFilter',
      label: 'Subcategory',
      group: 'primary',
    },
    showConfig: {
      label: 'Subcategory',
      isDetail: true,
    },
    saveConfig: {
      label: 'Subcategory',
      placeholderMessage: 'Select an option…',
      isRequired: false,
      requiredMessage: 'You need to select a subcategory.',
    },
  },
  


  // {
  //   key: 'tire',
  //   scope: 'public',
  //   schemaType: 'enum',
  //   enumOptions: [
  //     { option: '29', label: '29' },
  //     { option: '28', label: '28' },
  //     { option: '27', label: '27' },
  //     { option: '26', label: '26' },
  //     { option: '24', label: '24' },
  //     { option: '20', label: '20' },
  //     { option: '18', label: '18' },
  //   ],
  //   filterConfig: {
  //     indexForSearch: true,
  //     label: 'Tire size',
  //     group: 'secondary',
  //   },
  //   showConfig: {
  //     label: 'Tire size',
  //     isDetail: true,
  //   },
  //   saveConfig: {
  //     label: 'Tire size',
  //     placeholderMessage: 'Select an option…',
  //     isRequired: true,
  //     requiredMessage: 'You need to select a tire size.',
  //   },
  // },
  // {
  //   key: 'brand',
  //   scope: 'public',
  //   schemaType: 'enum',
  //   enumOptions: [
  //     { option: 'cube', label: 'Cube' },
  //     { option: 'diamant', label: 'Diamant' },
  //     { option: 'ghost', label: 'GHOST' },
  //     { option: 'giant', label: 'Giant' },
  //     { option: 'kalkhoff', label: 'Kalkhoff' },
  //     { option: 'kona', label: 'Kona' },
  //     { option: 'otler', label: 'Otler' },
  //     { option: 'vermont', label: 'Vermont' },
  //   ],
  //   filterConfig: {
  //     indexForSearch: true,
  //     label: 'Brand',
  //     group: 'secondary',
  //   },
  //   showConfig: {
  //     label: 'Brand',
  //     isDetail: true,
  //   },
  //   saveConfig: {
  //     label: 'Brand',
  //     placeholderMessage: 'Select an option…',
  //     isRequired: true,
  //     requiredMessage: 'You need to select a brand.',
  //   },
  // },
  // {
  //   key: 'accessories',
  //   scope: 'public',
  //   schemaType: 'multi-enum',
  //   enumOptions: [
  //     { option: 'bell', label: 'Bell' },
  //     { option: 'lights', label: 'Lights' },
  //     { option: 'lock', label: 'Lock' },
  //     { option: 'mudguard', label: 'Mudguard' },
  //   ],
  //   filterConfig: {
  //     indexForSearch: true,
  //     label: 'Accessories',
  //     searchMode: 'has_all',
  //     group: 'secondary',
  //   },
  //   showConfig: {
  //     label: 'Accessories',
  //   },
  //   saveConfig: {
  //     label: 'Accessories',
  //     placeholderMessage: 'Select an option…',
  //     isRequired: false,
  //   },
  // },

  // // An example of how to use transaction type specific custom fields and private data.
  // {
  //   key: 'note',
  //   scope: 'public',
  //   includeForListingTypes: ['product-selling'],
  //   schemaType: 'text',
  //   showConfig: {
  //     label: 'Extra notes',
  //   },
  //   saveConfig: {
  //     label: 'Extra notes',
  //     placeholderMessage: 'Some public extra note about this bike...',
  //   },
  // },
  // {
  //   key: 'privatenote',
  //   scope: 'private',
  //   includeForListingTypes: ['daily-booking'],
  //   schemaType: 'text',
  //   saveConfig: {
  //     label: 'Private notes',
  //     placeholderMessage: 'Some private note about this bike...',
  //   },
  // },
];

///////////////////////////////////////////////////////////////////////
// Configurations related to listing types and transaction processes //
///////////////////////////////////////////////////////////////////////

// A presets of supported listing configurations
//
// Note 1: With first iteration of hosted configs, we are unlikely to support
//         multiple listing types, even though this template has some
//         rudimentary support for it.
// Note 2: transaction type is part of listing type. It defines what transaction process and units
//         are used when transaction is created against a specific listing.

/**
 * Configuration options for listing experience:
 * - listingType:     Unique string. This will be saved to listing's public data on
 *                    EditListingWizard.
 * - label            Label for the listing type. Used as microcopy for options to select
 *                    listing type in EditListingWizard.
 * - transactionType  Set of configurations how this listing type will behave when transaction is
 *                    created.
 *   - process          Transaction process.
 *                      The process must match one of the processes that this client app can handle
 *                      (check src/util/transaction.js) and the process must also exists in correct
 *                      marketplace environment.
 *   - alias            Valid alias for the aforementioned process. This will be saved to listing's
 *                      public data as transctionProcessAlias and transaction is initiated with this.
 *   - unitType         Unit type is mainly used as pricing unit. This will be saved to
 *                      transaction's protected data.
 *                      Recommendation: don't use same unit types in completely different processes
 *                      ('item' sold should not be priced the same as 'item' booked).
 * - stockType        This is relevant only to listings with product-selling listing type.
 *                    If set to 'oneItem', stock management is not showed and the listing is
 *                    considered unique (stock = 1).
 *                    Possible values: 'oneItem' and 'multipleItems'.
 *                    Default: 'multipleItems'.
 */

export const listingTypes = [
//2luke2@protonmail.com
  // {
  //   listingType: 'daily-booking',
  //   label: 'Daily booking',
  //   transactionType: {
  //     process: 'default-booking',
  //     alias: 'default-booking/release-1',
  //     unitType: 'day',
  //   },
  // },
  // // Here are some examples for other listingTypes
  // // TODO: SearchPage does not work well if both booking and product selling are used at the same time
  // {
  //   listingType: 'nightly-booking',
  //   label: 'Nightly booking',
  //   transactionType: {
  //     process: 'default-booking',
  //     alias: 'default-booking/release-1',
  //     unitType: 'night',
  //   },
  // },
  // {
  //   listingType: 'hourly-booking',
  //   label: 'Hourly booking',
  //   transactionType: {
  //     process: 'default-booking',
  //     alias: 'default-booking/release-1',
  //     unitType: 'hour',
  //   },
  // },
  
  {
    listingType: 'renting-out',
    schemaType: 'enum',
    label: 'For Rent Or Lease',
    transactionType: {
      process: 'default-booking',
      alias: 'default-booking/release-1',
      unitType: 'item',
    },
    stockType: 'multipleItems',
    
  },
  {
    listingType: 'offering',
    schemaType: 'enum',
    label: 'Offering Services',
    transactionType: {
      process: 'default-purchase',
      alias: 'default-purchase/release-1',
      unitType: 'item',
    },
    stockType: 'multipleItems',
  },
  {
    listingType: 'request-for-quotation',
    schemaType: 'enum',
    label: 'Request For Quotation',
    transactionType: {
      process: 'default-purchase',
      alias: 'default-purchase/release-1',
      unitType: 'item',
    },
    stockType: 'multipleItems',
  }
];

// SearchPage can enforce listing query to only those listings with valid listingType
// However, it only works if you have set 'enum' type search schema for the public data fields
//   - listingType
//
//  Similar setup could be expanded to 2 other extended data fields:
//   - transactionProcessAlias
//   - unitType
//
// Read More:
// https://www.sharetribe.com/docs/how-to/manage-search-schemas-with-flex-cli/#adding-listing-search-schemas
export const enforceValidListingType = false;
