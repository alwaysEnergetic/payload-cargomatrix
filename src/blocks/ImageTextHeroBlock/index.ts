import { Block } from 'payload/types';

export const ImageTextHeroBlock: Block = {
  slug: 'imageTextHero',
  labels: {
    singular: 'Image and Text Hero',
    plural: 'Image and Text Heroes',
  },
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: 'Image',
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
    {
      name: 'alignment',
      type: 'select',
      options: [
        { label: 'Image on the Left', value: 'left' },
        { label: 'Image on the Right', value: 'right' },
      ],
      label: 'Image Alignment',
      required: true,
    },
  ],
};
