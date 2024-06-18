import { Block } from 'payload/types';

export const TeamBlock: Block = {
  slug: 'team',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple List with Avatars', value: 'simple-list-avatars' },
        { label: 'Grid with Background', value: 'grid-background' },
        { label: 'Large Avatars', value: 'large-avatars' },
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'Simple List with Social Icons', value: 'simple-list-social-icons' },
        { label: 'Grid with Simple Overlays', value: 'grid-simple-overlays' },
        { label: 'Grid with Rounded Corners', value: 'grid-rounded-corners' },
        { label: 'With Bio', value: 'with-bio' },
        { label: 'Offset Images', value: 'offset-images' },
        { label: 'Vertical List', value: 'vertical-list' },
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
      name: 'teamMembers',
      type: 'array',
      label: 'Team Members',
      fields: [
        {
          name: 'name',
          type: 'text',
          required: true,
          label: 'Name',
        },
        {
          name: 'role',
          type: 'text',
          required: true,
          label: 'Role',
        },
        {
          name: 'imageUrl',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Image URL',
        },
        {
          name: 'bio',
          type: 'textarea',
          required: false,
          label: 'Bio',
          admin: {
            condition: (data, siblingData) => siblingData?.layoutType === 'with-bio',
          },
        },
        {
          name: 'location',
          type: 'text',
          required: false,
          label: 'Location',
          admin: {
            condition: (data, siblingData) => siblingData?.layoutType === 'vertical-list',
          },
        },
        {
          name: 'socialMediaUrls',
          type: 'array',
          label: 'Social Media URLs',
          fields: [
            {
              name: 'platform',
              type: 'text',
              required: true,
              label: 'Platform',
            },
            {
              name: 'url',
              type: 'text',
              required: true,
              label: 'URL',
            },
          ],
          admin: {
            condition: (data, siblingData) => siblingData?.layoutType === 'simple-list-social-icons',
          },
        },
      ],
    },
  ],
};
