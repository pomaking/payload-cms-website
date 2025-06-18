import type { CollectionConfig } from 'payload'

import { revalidatePath } from 'next/cache'

import { isAdmin, isAdminFieldLevel } from '../access/isAdmin'
import { isAdminOrSelf } from '../access/isAdminOrSelf'
import { slugField } from '../fields/slug'
import { formatPreviewURL } from '../utilities/formatPreviewURL'

export const Agents: CollectionConfig = {
  slug: 'agents',
  access: {
    create: isAdmin,
    delete: isAdmin,
    read: () => true,
    update: isAdmin,
  },
  admin: {
    group: 'Agent Program',
    livePreview: {
      url: ({ data }) => formatPreviewURL('agents', data),
    },
    preview: (doc) => formatPreviewURL('agents', doc),
    useAsTitle: 'name',
  },
  defaultPopulate: {
    name: true,
    slug: true,
    sectors: true,
    content: {
      bannerImage: true,
    },
    languages: true,
    msas: true,
    licenses: true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Agent Name',
      required: true,
    },
    {
      name: 'website',
      type: 'text',
      label: 'Website URL',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Agent Email',
      required: true,
    },
    slugField('name', {
      admin: {
        position: 'sidebar',
      },
      required: true,
    }),
    {
      name: 'agent_status',
      type: 'select',
      admin: {
        description: 'Set to inactive to hide this agent from the directory.',
        position: 'sidebar',
      },
      defaultValue: 'active',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
      ],
    },
    {
      name: 'logo',
      type: 'upload',
      admin: {
        position: 'sidebar',
      },
      relationTo: 'media',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      admin: {
        description:
          'This field is managed by the Featured Agents field in the Agent Program collection',
        position: 'sidebar',
        readOnly: true,
      },
      label: 'Featured',
    },
    {
      name: 'topAgent',
      type: 'checkbox',
      admin: {
        position: 'sidebar',
      },
      label: 'Top Agent?',
    },
    {
      type: 'tabs',
      tabs: [
        {
          name: 'content',
          fields: [
            {
              name: 'bannerImage',
              type: 'upload',
              admin: {
                description: '1600 x 800px recommended',
              },
              relationTo: 'media',
              required: true,
            },
            {
              name: 'overview',
              type: 'richText',
              label: 'Overview',
              required: true,
            },
            {
              name: 'services',
              type: 'richText',
              label: 'Services',
              required: true,
            },
            {
              name: 'idealProject',
              type: 'richText',
              label: 'Ideal Project',
              required: true,
            },
            {
              name: 'caseStudy',
              type: 'relationship',
              relationTo: 'case-studies',
            },
            {
              name: 'contributions',
              type: 'array',
              admin: {
                description:
                  "Contributions to Payload. Must be a valid GitHub issue, pull request, or discussion URL from a repo in the 'payloadcms' organization.",
              },
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'type',
                      type: 'select',
                      admin: {
                        width: '50%',
                      },
                      options: [
                        {
                          label: 'Discussion',
                          value: 'discussion',
                        },
                        {
                          label: 'Pull Request',
                          value: 'pr',
                        },
                        {
                          label: 'Issue',
                          value: 'issue',
                        },
                      ],
                      required: true,
                    },
                    {
                      name: 'repo',
                      type: 'text',
                      admin: {
                        width: '25%',
                        // description: ({ path, value }) => `github.com/payloadcms/${value || ''}`,
                      },
                      defaultValue: 'payload',
                      required: true,
                    },
                    {
                      name: 'number',
                      type: 'number',
                      admin: {
                        width: '25%',
                      },
                      required: true,
                    },
                  ],
                },
              ],
              label: 'Contributions',
            },
            {
              name: 'projects',
              type: 'array',
              fields: [
                {
                  name: 'year',
                  type: 'number',
                  required: true,
                },
                {
                  name: 'name',
                  type: 'text',
                  required: true,
                },
                {
                  name: 'link',
                  type: 'text',
                  required: true,
                },
              ],
              label: 'Projects built with Payload',
              maxRows: 4,
            },
          ],
          label: 'Content',
        },
        {
          fields: [
            {
              name: 'city',
              type: 'text',
              required: true,
            },
            {
              name: 'licenses',
              type: 'relationship',
              hasMany: true,
              relationTo: 'licenses',
              required: true,
            },
            {
              name: 'sectors',
              type: 'relationship',
              hasMany: true,
              relationTo: 'sectors',
              required: true,
            },
            {
              name: 'languages',
              type: 'relationship',
              hasMany: true,
              relationTo: 'languages',
              required: true,
            },
            {
              name: 'social',
              type: 'array',
              fields: [
                {
                  type: 'row',
                  fields: [
                    {
                      name: 'platform',
                      type: 'select',
                      admin: {
                        width: '50%',
                      },
                      label: 'Platform',
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
                      required: true,
                    },
                    {
                      name: 'url',
                      type: 'text',
                      admin: {
                        width: '50%',
                      },
                      label: 'URL',
                      required: true,
                    },
                  ],
                },
              ],
              label: 'Social Media Links',
            },
          ],
          label: 'Details',
        },
      ],
    },
  ],
  hooks: {
    afterChange: [
      ({ doc }) => {
        revalidatePath(`/agents/${doc.slug}`)
        revalidatePath(`/agents`, 'page')
        console.log(`Revalidated: /agents/${doc.slug}`)
      },
    ],
  },
  labels: {
    plural: 'Agents',
    singular: 'Agent',
  },
  versions: {
    drafts: true,
  },
}
