import { Block } from 'payload/types';
 
export const FeaturesBlock: Block = {
  slug: 'featureSection',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'With Product Screenshot', value: 'product-screenshot' },
        { label: 'Centered 2x2 Grid', value: 'centered-2x2' },
        { label: 'With Large Screenshot on Dark', value: 'large-screenshot-dark' },
        { label: 'With Large Screenshot', value: 'large-screenshot' },
        { label: 'Simple Three Column with Small Icons on Dark', value: 'three-column-small-icons-dark' },
        { label: 'Simple Three Column with Small Icons', value: 'three-column-small-icons' },
        { label: 'With Product Screenshot on Left', value: 'product-screenshot-left' },
        { label: 'With Product Screenshot on Dark', value: 'product-screenshot-dark' },
        { label: 'Simple Three Column with Large Icons on Dark', value: 'three-column-large-icons-dark' },
        { label: 'Simple Three Column with Large Icons', value: 'three-column-large-icons' },
        { label: 'Contained in Panel', value: 'contained-panel' },
        { label: 'With Product Screenshot Panel', value: 'product-screenshot-panel' },
        { label: 'With Testimonial', value: 'testimonial' },
        { label: 'Offset 2x2 Grid', value: 'offset-2x2' },
        { label: 'With Code Example Panel', value: 'code-example-panel' },
        { label: 'Offset with Feature List', value: 'offset-feature-list' },
        { label: 'Simple', value: 'simple' },
        { label: 'Simple Two-Column with Small Icons on Dark', value: 'two-column-small-icons-dark' },
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
      name: 'productScreenshot',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Product Screenshot',
      admin: {
        condition: (data, siblingData) => [
          'product-screenshot',
          'product-screenshot-left',
          'product-screenshot-dark',
          'product-screenshot-panel',
        ].includes(siblingData?.layoutType),
      },
    },
    {
      name: 'largeScreenshot',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Large Screenshot',
      admin: {
        condition: (data, siblingData) => [
          'large-screenshot-dark',
          'large-screenshot',
        ].includes(siblingData?.layoutType),
      },
    },
    {
      name: 'codeExampleImage',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Code Example Image',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'code-example-panel',
      },
    },
    {
      name: 'icons',
      type: 'array',
      label: 'Icons',
      fields: [
        {
          name: 'icon',
          type: 'upload',
          relationTo: 'media',
          required: true,
          label: 'Icon',
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
      ],
      admin: {
        condition: (data, siblingData) => [
          'three-column-small-icons-dark',
          'three-column-small-icons',
          'three-column-large-icons-dark',
          'three-column-large-icons',
          'two-column-small-icons-dark',
          'offset-feature-list',
        ].includes(siblingData?.layoutType),
      },
    },
    {
      name: 'testimonial',
      type: 'textarea',
      required: false,
      label: 'Testimonial',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'testimonial',
      },
    },
    {
      name: 'featureList',
      type: 'array',
      label: 'Feature List',
      fields: [
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
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'offset-feature-list',
      },
    },
  ],
};