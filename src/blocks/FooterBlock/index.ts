import { Block } from 'payload/types';

export const FooterBlock: Block = {
  slug: 'footer',
  fields: [
    {
      name: 'layoutType',
      type: 'select',
      required: true,
      options: [
        { label: 'Simple Centered', value: 'simple-centered' },
        { label: 'With Company Info', value: 'company-info' },
        { label: 'With Newsletter Form', value: 'newsletter-form' },
        { label: 'Split with Logo', value: 'split-logo' },
        { label: 'Centered with Links', value: 'centered-links' },
        { label: 'With Social Media Links', value: 'social-media-links' },
        { label: 'Split with Newsletter', value: 'split-newsletter' },
        { label: 'Simple with Links', value: 'simple-links' },
        { label: 'Stacked with CTA', value: 'stacked-cta' },
        { label: 'With Contact Info', value: 'contact-info' },
      ],
      label: 'Layout Type',
    },
    {
      name: 'title',
      type: 'text',
      required: false,
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
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'company-info',
      },
    },
    {
      name: 'bg_image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Background Image',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-logo',
      },
    },
    {
      name: 'news_form',
      type: 'group',
      label: 'Newsletter Form',
      fields: [
        {
          name: 'formTitle',
          type: 'text',
          required: true,
          label: 'Form Title',
        },
        {
          name: 'formFields',
          type: 'array',
          label: 'Form Fields',
          fields: [
            {
              name: 'fieldName',
              type: 'text',
              required: true,
              label: 'Field Name',
            },
            {
              name: 'fieldType',
              type: 'select',
              required: true,
              options: [
                { label: 'Text', value: 'text' },
                { label: 'Email', value: 'email' },
              ],
              label: 'Field Type',
            },
          ],
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'newsletter-form' || siblingData?.layoutType === 'split-newsletter',
      },
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: false,
      label: 'Logo',
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'split-logo',
      },
    },
    {
      name: 'links',
      type: 'array',
      label: 'Links',
      fields: [
        {
          name: 'linkLabel',
          type: 'text',
          required: true,
          label: 'Link Label',
        },
        {
          name: 'linkUrl',
          type: 'text',
          required: true,
          label: 'Link URL',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'centered-links' || siblingData?.layoutType === 'simple-links',
      },
    },
    {
      name: 'media_links',
      type: 'array',
      label: 'Social Media Links',
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
        condition: (data, siblingData) => siblingData?.layoutType === 'social-media-links',
      },
    },
    {
      name: 'cta',
      type: 'group',
      label: 'Call to Action',
      fields: [
        {
          name: 'ctaLabel',
          type: 'text',
          required: true,
          label: 'CTA Label',
        },
        {
          name: 'ctaUrl',
          type: 'text',
          required: true,
          label: 'CTA URL',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'stacked-cta',
      },
    },
    {
      name: 'contactInfo',
      type: 'group',
      label: 'Contact Info',
      fields: [
        {
          name: 'address',
          type: 'text',
          required: true,
          label: 'Address',
        },
        {
          name: 'phone',
          type: 'text',
          required: true,
          label: 'Phone',
        },
        {
          name: 'email',
          type: 'text',
          required: true,
          label: 'Email',
        },
      ],
      admin: {
        condition: (data, siblingData) => siblingData?.layoutType === 'contact-info',
      },
    },
  ],
};