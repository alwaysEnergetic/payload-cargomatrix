import { Block } from 'payload/types';

export type Leadership = {
  name: string;
  role: string;
  imageUrl: string;
};

export const LeadershipBlock: Block = {
  slug: 'leadership',
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
};

