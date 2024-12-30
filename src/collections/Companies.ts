import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'

import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { revalidatePath } from 'next/cache'

export const Companies: CollectionConfig = {
  slug: 'companies',
  labels: {
    singular: 'Company',
    plural: 'Companies',
  },
  versions: {
    drafts: false,
  },
  admin: {
    group: 'CRM',
    useAsTitle: 'name',
    livePreview: {
      url: ({ data }) => formatPreviewURL('companies', data),
    },
    preview: doc => formatPreviewURL('companies', doc),
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
      label: 'Company Name',
      required: true,
    },
	{
      name: 'website',
      type: 'text',
      label: 'Company URL',
      required: true,
    },
	{
      name: 'phone',
      type: 'text',
	  label: 'Phone',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Contact Email',
      required: true,
    },
	{
      name: 'social',
      type: 'array',
      label: 'Social Media Links',
      fields: [
        {
          type: 'row',
          fields: [
            {
               name: 'platform',                      
			   type: 'select',
               label: 'Platform',
               required: true,
               admin: {
                 width: '50%',
               },
               options: [
                 {
                   label: 'LinkedIn',
                   value: 'linkedin',
                 },
                 {
                   label: 'Twitter',
                   value: 'twitter',
                 },
                 {
                   label: 'Facebook',
                   value: 'facebook',
                 },
                 {
                   label: 'Instagram',
                   value: 'instagram',
                 },
                 {
                   label: 'YouTube',
                   value: 'youtube',
                 },
                 {
                   label: 'GitHub',
                   value: 'github',
                 },
               ],
            },
            {
              name: 'url',
              type: 'text',
              label: 'URL',
              required: true,
              admin: {
                width: '50%',
              },
            },
          ],
        },
      ],
    },
    {
      name: 'companyType',
      type: 'select',
      options: [
        {
          label: 'Development',
          value: 'development',
        },
        {
          label: 'Construction',
          value: 'construction',
        },
		{
          label: 'Investment',
          value: 'investment',
        },
		{
          label: 'Agency',
          value: 'agency',
        },
		{
          label: 'Inactive',
          value: 'inactive',
        },
      ],
      defaultValue: 'investment',
      admin: {
        position: 'sidebar',
        description: 'Set to inactive to hide this company from the directory.',
      },
    },
    {
      name: 'relatedContacts',
      type: 'join',
      admin: {
        position: 'sidebar',
      },
      hasMany: true,
      collection: 'contacts',
      on: 'companies',
  },
  ],
}
