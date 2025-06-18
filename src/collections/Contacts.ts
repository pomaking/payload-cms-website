import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { CollectionConfig } from 'payload'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'
import { revalidatePath } from 'next/cache'
export const Contacts: CollectionConfig = {
  slug: 'contacts',
  labels: {
    singular: 'Contact',
    plural: 'Contacts',
  },
  versions: {
    drafts: false,
  },
  admin: {
    group: 'CRM',
    useAsTitle: 'email',
  },
  access: {
    create: isAdmin,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      label: 'First Name',
      required: true,
    },
	{
      name: 'lastName',
      type: 'text',
      label: 'Last Name',
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
      name: 'contactType',
      type: 'select',
      options: [
        {
          label: 'Prospect',
          value: 'prospect',
        },
        {
          label: 'Client',
          value: 'client',
        },
		{
          label: 'Partner',
          value: 'partner',
        },
		{
          label: 'Agent',
          value: 'agent',
        },
		{
          label: 'Inactive',
          value: 'inactive',
        },
      ],
      defaultValue: 'prospect',
      admin: {
        position: 'sidebar',
        description: 'Set to inactive to hide this partner from the directory.',
      },
    },
    {
        name: 'companies',
        type: 'relationship',
        admin: {
          position: 'sidebar',
        },
        hasMany: true,
        relationTo: 'companies',
    },
  ],
}
