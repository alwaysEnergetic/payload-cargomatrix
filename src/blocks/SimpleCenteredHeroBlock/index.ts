import { Block } from 'payload/types';

export const SimpleCenteredHeroBlock: Block = {
  slug: 'simpleCenteredHero',
  labels: {
    singular: 'Simple Centered Hero',
    plural: 'Simple Centered Heroes',
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
  ],
};

