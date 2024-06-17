import { Block } from 'payload/types';
import linkGroup from '../../fields/linkGroup'
 
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
      name: 'description',
      type: 'textarea',
      required: false,
      label: 'Description',
    },
    {
      name: 'announcement',
      type: 'checkbox',
      label: 'Show Announcement',
    },
    {
      name: 'announcementText',
      type: 'text',
      required: false,
      label: 'Announcement Text',
      admin: {
        condition: (data, siblingData) => siblingData?.announcement,
      },
    },
    {
      name: 'announcementUrl',
      type: 'text',
      required: false,
      label: 'Announcement URL',
      admin: {
        condition: (data, siblingData) => siblingData?.announcement,
      },
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
    linkGroup({
      overrides: {
        maxRows: 2,
      },
      appearances: ['default', 'primary', 'secondary', 'destructive', 'outline', 'ghost', 'link'],
      label: 'Call to Action Buttons'
    }),
  ],
};
 