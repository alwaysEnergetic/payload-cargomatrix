import { Block } from 'payload/types';

export const TeamLargeImagesDark: Block = {
  slug: 'team-large-images-dark',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
      defaultValue: 'Meet our team',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      defaultValue: 'We’re a dynamic group of individuals who are passionate about what we do.',
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
        {
          name: 'xUrl',
          type: 'text',
          required: false,
          label: 'X URL',
        },
        {
          name: 'linkedinUrl',
          type: 'text',
          required: false,
          label: 'LinkedIn URL',
        },
      ],
    },
  ],
};
