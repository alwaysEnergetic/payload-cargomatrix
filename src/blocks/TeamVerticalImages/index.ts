import { Block } from 'payload/types';

export const TeamVerticalImages: Block = {
  slug: 'team-vertical-images',
  fields: [
    {
      name: 'heading',
      type: 'text',
      required: true,
      label: 'Heading',
      defaultValue: 'About the team',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      label: 'Description',
      defaultValue: 'We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.',
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
          name: 'bio',
          type: 'textarea',
          required: true,
          label: 'Bio',
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
