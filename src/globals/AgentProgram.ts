import type { GlobalConfig } from 'payload'

import { revalidatePath } from 'next/cache'

import { isAdmin } from '../access/isAdmin'
import { Callout } from '../blocks/Callout'
import { CallToAction } from '../blocks/CallToAction'
import { CardGrid } from '../blocks/CardGrid'
import { CaseStudiesHighlight } from '../blocks/CaseStudiesHighlight'
import { CaseStudyCards } from '../blocks/CaseStudyCards'
import { CaseStudyParallax } from '../blocks/CaseStudyParallax'
import { CodeFeature } from '../blocks/CodeFeature'
import { Content } from '../blocks/Content'
import { ContentGrid } from '../blocks/ContentGrid'
import { ExampleTabs } from '../blocks/ExampleTabs'
import { Form } from '../blocks/Form'
import { HoverCards } from '../blocks/HoverCards'
import { HoverHighlights } from '../blocks/HoverHighlights'
import { LinkGrid } from '../blocks/LinkGrid'
import { LogoGrid } from '../blocks/LogoGrid'
import { MediaBlock } from '../blocks/Media'
import { MediaContent } from '../blocks/MediaContent'
import { MediaContentAccordion } from '../blocks/MediaContentAccordion'
import { Pricing } from '../blocks/Pricing'
import { ReusableContent } from '../blocks/ReusableContent'
import { Slider } from '../blocks/Slider'
import { Statement } from '../blocks/Statement'
import { Steps } from '../blocks/Steps'
import { StickyHighlights } from '../blocks/StickyHighlights'
import linkGroup from '../fields/linkGroup'

export const AgentProgram: GlobalConfig = {
  slug: 'agent-program',
  access: {
    read: () => true,
    update: isAdmin,
  },
  admin: {
    group: 'Agent Program',
  },
  fields: [
    {
      name: 'contactForm',
      type: 'relationship',
      admin: {
        description: 'Select the form that should be used for the contact form.',
      },
      relationTo: 'forms',
      required: true,
    },
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'richText',
          type: 'richText',
          label: 'Hero Text',
        },
        linkGroup({
          appearances: false,
          overrides: {
            name: 'breadcrumbBarLinks',
          },
        }),
        linkGroup({
          appearances: false,
          overrides: {
            name: 'heroLinks',
          },
        }),
      ],
    },
    {
      name: 'contentBlocks',
      type: 'group',
      fields: [
        {
          name: 'beforeDirectory',
          type: 'blocks',
          blocks: [
            Callout,
            CallToAction,
            CardGrid,
            CaseStudyCards,
            CaseStudiesHighlight,
            CaseStudyParallax,
            CodeFeature,
            Content,
            ContentGrid,
            Form,
            HoverCards,
            HoverHighlights,
            LinkGrid,
            LogoGrid,
            MediaBlock,
            MediaContent,
            MediaContentAccordion,
            Pricing,
            ReusableContent,
            Slider,
            Statement,
            Steps,
            StickyHighlights,
            ExampleTabs,
          ],
          label: 'Before Directory Blocks',
          labels: {
            plural: 'Blocks',
            singular: 'Block',
          },
        },
        {
          name: 'afterDirectory',
          type: 'blocks',
          blocks: [
            Callout,
            CallToAction,
            CardGrid,
            CaseStudyCards,
            CaseStudiesHighlight,
            CaseStudyParallax,
            CodeFeature,
            Content,
            ContentGrid,
            Form,
            HoverCards,
            HoverHighlights,
            LinkGrid,
            LogoGrid,
            MediaBlock,
            MediaContent,
            MediaContentAccordion,
            Pricing,
            ReusableContent,
            Slider,
            Statement,
            Steps,
            StickyHighlights,
            ExampleTabs,
          ],
          label: 'After Directory Blocks',
          labels: {
            plural: 'Blocks',
            singular: 'Block',
          },
        },
      ],
      label: false,
    },
  ],
  hooks: {
    afterChange: [() => revalidatePath('/agents', 'layout')],
  },
  label: 'Agent Program Directory',
}
