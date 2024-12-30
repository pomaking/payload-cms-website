import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'

import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { revalidatePath } from 'next/cache'

export const Structures: CollectionConfig = {
  slug: 'structures',
  labels: {
    singular: 'Structure',
    plural: 'Structures',
  },
  admin: {
    group: 'CRM',
    useAsTitle: 'name',
  },
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
    },
	{
      name: 'year_built',
      type: 'number',
      label: 'Year Built',
    },
    {
      name: 'effective_year_built',
      type: 'number',
      label: 'Effective Year Built',
    },
	{
      name: 'stories',
      type: 'number',
	  label: 'Stories',
    },
    {
      name: 'rooms_count',
      type: 'number',
      label: '# Rooms',
    },
    {
      name: 'baths',
      type: 'number',
      label: '# Bathrooms',
    },
    {
      name: 'partial_baths_count',
      type: 'number',
      label: '# Partial Baths',
    },
    {
      name: 'units_count',
      type: 'text',
      label: '# Units',
    },
    {
      name: 'parking_type',
      type: 'text',
      label: 'Parking Type',
    },
    {
      name: 'parking_spaces_count',
      type: 'number',
      label: '# Parking Spaces',
    },
    {
      name: 'pool_type',
      type: 'text',
      label: 'Pool Type',
    },
    {
      name: 'architecture_type',
      type: 'text',
      label: 'Architecture Type',
    },
    {
      name: 'construction_type',
      type: 'richText',
      label: 'Construction Type',
    },
    {
      name: 'exterior_wall_type',
      type: 'text',
      label: 'Exterior Wall Type',
    },
    {
      name: 'foundation_type',
      type: 'text',
      label: 'Foundation Type',
    },
    {
      name: 'roof_material_type',
      type: 'text',
      label: 'Roof Material',
    },
    {
      name: 'roof_style_type',
      type: 'text',
      label: 'Roof Style',
    },
    {
      name: 'heating_type',
      type: 'text',
      label: 'Heating Type',
    },
    {
      name: 'heating_fuel_type',
      type: 'text',
      label: 'Heating Fuel',
    },
    {
      name: 'air_conditioning_type',
      type: 'text',
      label: 'Air Conditioning Type',
    },
    {
      name: 'fireplaces',
      type: 'number',
      label: 'Fireplaces',
    },
    {
      name: 'basement_type',
      type: 'text',
      label: 'Basement Type',
    },
    {
      name: 'quality',
      type: 'text',
      label: 'Quality',
    },
    {
      name: 'flooring_types',
      type: 'text',
      label: 'Basement Type',
    },
    {
      name: 'plumbing_fixtures_count',
      type: 'number',
      label: 'Plumbing Fixture #',
    },
    {
      name: 'interior_wall_type',
      type: 'text',
      label: 'Interior Wall Type',
    },
    {
      name: 'water_type',
      type: 'text',
      label: 'Water Type',
    },
    {
      name: 'sewer_type',
      type: 'text',
      label: 'Sewer Type',
    },
    {
      name: 'total_area_sq_ft',
      type: 'number',
      label: 'Total Area (sq ft)',
    },
    {
      name: 'typical_floor_sf',
      type: 'text',
      label: 'Typical Floor (sq ft)',
    },
    {
      name: 'building_status',
      type: 'text',
      label: 'Building Status',
    },
    {
      name: 'tenancy',
      type: 'text',
      label: 'Tenancy',
    },
    {
      name: 'ceiling_height',
      type: 'text',
      label: 'Ceiling Height',
    },
    {
      name: 'docks_int',
      type: 'number',
      label: 'Loading Docks, Interior',
    },
    {
      name: 'docks_ext',
      type: 'number',
      label: 'Loading Docks, Exterior',
    },
    {
      name: 'elevators_passenger',
      type: 'number',
      label: 'Passenger Elevators',
    },
    {
      name: 'elevators_freight',
      type: 'number',
      label: 'Freight Elevators',
    },
    {
      name: 'elevators_escalator',
      type: 'number',
      label: 'Escalators',
    },
    {
        name: 'building_features',
        type: 'array',
        labels: {
            singular: 'Feature',
            plural: 'Features',
        },
        fields: [
            {
                name: 'feature_description',
                type: 'text',
            },
        ],
    },
  ],
}
