import { Block } from 'payload/types';
 
export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Split with Screenshot', value: 'split-screenshot' },
        { label: 'Split with Code Example', value: 'split-code-example' },
        { label: 'Simple Centered with Background Image', value: 'simple-centered-bg' },
        { label: 'With App Screenshot', value: 'app-screenshot' },
        { label: 'With App Screenshot on Dark', value: 'app-screenshot-dark' },
        { label: 'With Phone Mockup', value: 'phone-mockup' },
        { label: 'Split with Image', value: 'split-image' },
        { label: 'With Angled Image on Right', value: 'angled-image-right' },
        { label: 'With Image Tiles', value: 'image-tiles' },
        { label: 'With Offset Image', value: 'offset-image' },
        { label: 'Split with Screenshot on Dark', value: 'split-screenshot-dark' },
      ],
      label: 'Layout Type',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title',
    },
    {
      name: 'subtitle',
      type: 'text',
      required: false,
      label: 'Subtitle',
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
    },
    {
      name: 'backgroundImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Background Image',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'simple-centered-bg',
      },
    },
    {
      name: 'imageUrl',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Image URL',
      admin: {
        condition: (data, siblingData) =>
          siblingData?.layoutType === 'split-screenshot' ||
          siblingData?.layoutType === 'split-code-example' ||
          siblingData?.layoutType === 'app-screenshot' ||
          siblingData?.layoutType === 'app-screenshot-dark' ||
          siblingData?.layoutType === 'phone-mockup' ||
          siblingData?.layoutType === 'split-image' ||
          siblingData?.layoutType === 'angled-image-right' ||
          siblingData?.layoutType === 'image-tiles' ||
          siblingData?.layoutType === 'offset-image' ||
          siblingData?.layoutType === 'split-screenshot-dark',
      },
    },
    {
      name: 'ctaButtons',
      type: 'array',
      label: 'Call to Action Buttons',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
          label: 'Button Label',
        },
        {
          name: 'url',
          type: 'text',
          required: true,
          label: 'Button URL',
        },
      ],
    },
  ],
};
 