import { Block } from 'payload/types';

export const TeamSmallImages: Block = {
  slug: 'team-small-images',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
      defaultValue: 'Meet our leadership',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      defaultValue: 'Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.',
    },
    {
      name: 'people',
      type: 'array',
      label: 'People',
      required: true,
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
      ],
    },
  ],
};
