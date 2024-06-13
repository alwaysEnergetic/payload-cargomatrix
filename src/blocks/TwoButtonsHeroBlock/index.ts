import { Block } from 'payload/types';

export const TwoButtonsHeroBlock: Block = {
  slug: 'twoButtonsHero',
  labels: {
    singular: 'Two Buttons Hero',
    plural: 'Two Buttons Heroes',
  },
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
    },
    {
      name: 'subheading',
      type: 'textarea',
      label: 'Subheading',
    },
    {
      name: 'primaryCtaText',
      type: 'text',
      label: 'Primary CTA Text',
    },
    {
      name: 'primaryCtaLink',
      type: 'text',
      label: 'Primary CTA Link',
    },
    {
      name: 'secondaryCtaText',
      type: 'text',
      label: 'Secondary CTA Text',
    },
    {
      name: 'secondaryCtaLink',
      type: 'text',
      label: 'Secondary CTA Link',
    },
  ],
};
