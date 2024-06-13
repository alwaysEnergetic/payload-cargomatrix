import { Block } from 'payload/types';

export const BackgroundImageHeroBlock: Block = {
  slug: 'backgroundImageHero',
  labels: {
    singular: 'Background Image Hero',
    plural: 'Background Image Heroes',
  },
  fields: [
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Background Image',
    },
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
      name: 'ctaText',
      type: 'text',
      label: 'CTA Text',
    },
    {
      name: 'ctaLink',
      type: 'text',
      label: 'CTA Link',
    },
  ],
};
