import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { revalidatePath } from 'next/cache'
export const Parcels: CollectionConfig = {
  slug: 'parcels',
  labels: {
    singular: 'Parcel',
    plural: 'Parcels',
  },
  admin: {
    group: 'CRM',
    useAsTitle: 'apn_unformatted',
  },
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'apn_original',
      type: 'text',
      label: 'APN',
    },
	{
      name: 'apn_unformatted',
      type: 'text',
      label: 'APN Unformatted',
      required: true,
    },
    {
      name: 'fips_code',
      type: 'text',
      label: 'FIPS Code',
    },
	{
      name: 'depth_ft',
      type: 'number',
	  label: 'Depth (ft)',
    },
    {
      name: 'frontage_ft',
      type: 'number',
      label: 'Frontage (ft)',
    },
    {
      name: 'area_sq_ft',
      type: 'number',
      label: 'Area (sq ft)',
    },
    {
      name: 'area_acres',
      type: 'number',
      label: 'Area (acres)',
    },
    {
      name: 'county_name',
      type: 'text',
      label: 'County',
    },
    {
      name: 'county_land_use_code',
      type: 'text',
      label: 'Land Use Code',
    },
    {
      name: 'county_land_use_description',
      type: 'text',
      label: 'Land Use Description',
    },
    {
      name: 'standardized_land_use_category',
      type: 'text',
      label: 'Standardized Land Use Category',
    },
    {
      name: 'standardized_land_use_type',
      type: 'text',
      label: 'Standardized Land Use Type',
    },
    {
      name: 'location_description',
      type: 'richText',
      label: 'Location Description',
    },
    {
      name: 'zoning_classification',
      type: 'text',
      label: 'Zoning Classification',
    },
    {
      name: 'buildingCount',
      type: 'number',
      label: '# Buildings',
    },
    {
      name: 'tax_account_number',
      type: 'text',
      label: 'Tax Account Number',
    },
    {
      name: 'legal_description',
      type: 'text',
      label: 'Legal Description',
    },
    {
      name: 'lot_code',
      type: 'text',
      label: 'Lot Code',
    },
    {
      name: 'lot_number',
      type: 'text',
      label: 'Lot Number',
    },
    {
      name: 'subdivision',
      type: 'text',
      label: 'Subdivision',
    },
    {
      name: 'municipality',
      type: 'text',
      label: 'Municipality',
    },
    {
      name: 'section_township_range',
      type: 'text',
      label: 'Section/Township/Range',
    },
  ],
}
