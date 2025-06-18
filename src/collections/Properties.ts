import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { revalidatePath } from 'next/cache'
import { nestedDocsPlugin } from '@payloadcms/plugin-nested-docs'
export const Properties: CollectionConfig = {
  slug: 'properties',
  labels: {
    singular: 'Property',
    plural: 'Properties',
  },
  versions: {
    drafts: false,
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
  defaultPopulate: {
    property_parcels: true,
    structures: true,
    spaces: true,
  },
  fields: [
    {
        type: 'tabs',
        tabs: [
            {
                label: 'Property Description',
                description: 'Description of the Property tab',
                fields: [
                    {
                        name: 'name',
                        type: 'text',
                        label: 'Property Name',
                        required: true,
                    },
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'addressNumber',
                                type: 'text',
                                label: 'Address #',
                                required: true,
                            },
                            {
                                name: 'direction_left',
                                type: 'select',
                                label: 'Pre Dir',
                                admin: {
                                    isClearable: true,
                                },
                                options: [
                                    {
                                        label: 'N',
                                        value: 'north',
                                    },
                                    {
                                        label: 'NE',
                                        value: 'northeast',
                                    },
                                    {
                                        label: 'NW',
                                        value: 'northwest',
                                    },
                                    {
                                        label: 'S',
                                        value: 'south',
                                    },
                                    {
                                        label: 'SE',
                                        value: 'southeast',
                                    },
                                    {
                                        label: 'SW',
                                        value: 'southwest',
                                    },
                                    {
                                        label: 'CT',
                                        value: 'court',
                                    },
                                    {
                                        label: 'E',
                                        value: 'east',
                                    },
                                    {
                                        label: 'W',
                                        value: 'west',
                                    },
                                ],
                            },
                            {
                                name: 'streetName',
                                type: 'text',
                                label: 'Street Name',
                                required: true,
                            },
                            {
                                name: 'mode',
                                type: 'select',
                                label: 'Type',
                                admin: {
                                    isClearable: true,
                                },
                                options: [
                                    {
                                        label: 'ST',
                                        value: 'street',
                                    },
                                    {
                                        label: 'DR',
                                        value: 'drive',
                                    },
                                    {
                                        label: 'RD',
                                        value: 'road',
                                    },
                                    {
                                        label: 'AVE',
                                        value: 'avenue',
                                    },
                                    {
                                        label: 'WAY',
                                        value: 'way',
                                    },
                                    {
                                        label: 'CIR',
                                        value: 'circle',
                                    },
                                    {
                                        label: 'CT',
                                        value: 'court',
                                    },
                                    {
                                        label: 'HWY',
                                        value: 'highway',
                                    },
                                    {
                                        label: 'JCT',
                                        value: 'junction',
                                    },
                                    {
                                        label: 'LOOP',
                                        value: 'loop',
                                    },
                                    {
                                        label: 'PKWY',
                                        value: 'parkway',
                                    },
                                    {
                                        label: 'PIKE',
                                        value: 'pike',
                                    },
                                    {
                                        label: 'PL',
                                        value: 'place',
                                    },
                                    {
                                        label: 'PLZ',
                                        value: 'plaza',
                                    },
                                    {
                                        label: 'TRL',
                                        value: 'trail',
                                    },
                                    {
                                        label: 'RD',
                                        value: 'road',
                                    },
                                ],
                            },
                            {
                                name: 'direction_right',
                                type: 'select',
                                label: 'Post Dir',
                                admin: {
                                    isClearable: true,
                                },
                                options: [
                                    {
                                        label: 'N',
                                        value: 'north',
                                    },
                                    {
                                        label: 'NE',
                                        value: 'northeast',
                                    },
                                    {
                                        label: 'NW',
                                        value: 'northwest',
                                    },
                                    {
                                        label: 'S',
                                        value: 'south',
                                    },
                                    {
                                        label: 'SE',
                                        value: 'southeast',
                                    },
                                    {
                                        label: 'SW',
                                        value: 'southwest',
                                    },
                                    {
                                        label: 'CT',
                                        value: 'court',
                                    },
                                    {
                                        label: 'E',
                                        value: 'east',
                                    },
                                    {
                                        label: 'W',
                                        value: 'west',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'city',
                                type: 'text',
                                label: 'City',
                                required: true,
                            },
                            {
                                name: 'state',
                                type: 'text',
                                label: 'State',
                            },
                            {
                                name: 'postLCode',
                                type: 'text',
                                label: 'Postal Code',
                                required: true,
                            },
                            {
                                name: 'country',
                                type: 'text',
                                label: 'Country',
                            },
                        ],
                    },
                    {
                        type: 'row',
                        fields: [
                            {
                                name: 'latitude',
                                type: 'text',
                                label: 'Latitude',
                            },
                            {
                                name: 'longitude',
                                type: 'text',
                                label: 'Longitude',
                            },
                        ],
                    },
                ],
            },

            {
                label: 'Spaces',
                description: 'Structures included in this property',
                fields: [
                    {
                        name: 'spaces',
                        type: 'text',
                        label: 'Spaces',
                    },
                ]
            },
        ],
    },
  ],
}
