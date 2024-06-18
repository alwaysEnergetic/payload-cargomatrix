import { Block } from 'payload/types';

export const BlogBlock: Block = {
  slug: 'blog',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple List', value: 'simple-list' },
        { label: 'With Sidebar', value: 'with-sidebar' },
        { label: 'Grid with Featured Post', value: 'grid-featured-post' },
        { label: 'Grid with Sidebar', value: 'grid-sidebar' },
        { label: 'List with Featured Post', value: 'list-featured-post' },
        { label: 'List with Image', value: 'list-image' },
        { label: 'Split with Image', value: 'split-image' },
        { label: 'Grid with Categories', value: 'grid-categories' },
        { label: 'List with Tags', value: 'list-tags' },
        { label: 'Grid with Load More', value: 'grid-load-more' },
        { label: 'Grid with Pagination', value: 'grid-pagination' },
        { label: 'Masonry Grid', value: 'masonry-grid' },
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
    // {
    //   name: 'featuredPost',
    //   type: 'relationship',
    //   relationTo: 'posts',
    //   required: false,
    //   label: 'Featured Post',
    //   admin: {
    //     condition: (data, siblingData) => [
    //       'grid-featured-post',
    //       'list-featured-post',
    //     ].includes(siblingData?.layoutType),
    //   },
    // },
    // {
    //   name: 'posts',
    //   type: 'relationship',
    //   relationTo: 'posts',
    //   hasMany: true,
    //   required: true,
    //   label: 'Posts',
    // },
    // {
    //   name: 'sidebar',
    //   type: 'group',
    //   label: 'Sidebar',
    //   fields: [
    //     {
    //       name: 'categories',
    //       type: 'relationship',
    //       relationTo: 'categories',
    //       hasMany: true,
    //       required: false,
    //       label: 'Categories',
    //     },
    //     {
    //       name: 'tags',
    //       type: 'relationship',
    //       relationTo: 'tags',
    //       hasMany: true,
    //       required: false,
    //       label: 'Tags',
    //     },
    //   ],
    //   admin: {
    //     condition: (data, siblingData) => [
    //       'with-sidebar',
    //       'grid-sidebar',
    //     ].includes(siblingData?.layoutType),
    //   },
    // },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Image',
      admin: {
        condition: (data, siblingData) => [
          'list-image',
          'split-image',
        ].includes(siblingData?.layoutType),
      },
    },
    // {
    //   name: 'categories',
    //   type: 'relationship',
    //   relationTo: 'categories',
    //   hasMany: true,
    //   required: false,
    //   label: 'Categories',
    //   admin: {
    //     condition: (data, siblingData) => siblingData?.layoutType === 'grid-categories',
    //   },
    // },
    // {
    //   name: 'tags',
    //   type: 'relationship',
    //   relationTo: 'tags',
    //   hasMany: true,
    //   required: false,
    //   label: 'Tags',
    //   admin: {
    //     condition: (data, siblingData) => siblingData?.layoutType === 'list-tags',
    //   },
    // },
    {
      name: 'loadMore',
      type: 'text',
      required: false,
      label: 'Load More Button Text',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'grid-load-more',
      },
    },
    {
      name: 'pagination',
      type: 'group',
      label: 'Pagination',
      fields: [
        {
          name: 'previousText',
          type: 'text',
          required: true,
          label: 'Previous Button Text',
        },
        {
          name: 'nextText',
          type: 'text',
          required: true,
          label: 'Next Button Text',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'grid-pagination',
      },
    },
  ],
};