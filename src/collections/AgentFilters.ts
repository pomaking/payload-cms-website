import type { CollectionConfig } from 'payload'

import { isAdmin } from '../access/isAdmin'

const Filter: (slug: string, label: string) => CollectionConfig = (slug, label) => {
  return {
    slug,
    access: {
      create: isAdmin,
      delete: isAdmin,
      read: () => true,
      update: isAdmin,
    },
    admin: {
      group: 'Agent Program',
      useAsTitle: 'name',
    },
    fields: [
      {
        name: 'name',
        type: 'text',
        label: label + ' Label',
        required: true,
        unique: true,
      },
      {
        name: 'value',
        type: 'text',
        admin: {
          description: 'Must contain only lowercase letters, numbers, hyphens, and underscores',
        },
        label: 'Value',
        required: true,
        unique: true,
      },
    ],
  }
}

export const Licenses = Filter('licenses', 'License')
export const Languages = Filter('languages', 'Language')
export const Msas = Filter('msas', 'MSA')
export const Sectors = Filter('sectors', 'Sector')
