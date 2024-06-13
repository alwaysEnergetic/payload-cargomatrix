import { Block } from 'payload/types';

export const DefaultHeroSectionBlock: Block = {
  slug: 'default-hero-section',
  fields: [
    {
      name: 'backgroundColor',
      label: 'Background Color',
      type: 'radio',
      options: [
        { label: 'White', value: 'bg-white' },
        { label: 'Dark', value: 'bg-gray-900' },
      ],
      defaultValue: 'bg-white',
    },
    {
      name: 'alert',
      label: 'Alert',
      type: 'group',
      fields: [
        {
          name: 'showAlert',
          label: 'Show Alert',
          type: 'checkbox',
        },
        {
          name: 'alertLink',
          label: 'Alert Link',
          type: 'text',
          required: true,
          admin: {
            condition: (data, siblingData: any) => siblingData.showAlert,
          },
        },
        {
          name: 'alertText',
          label: 'Alert Text',
          type: 'text',
          required: true,
          admin: {
            condition: (data, siblingData: any) => siblingData.showAlert,
          },
        },
        {
          name: 'alertSubText',
          label: 'Alert Sub Text',
          type: 'text',
          admin: {
            condition: (data, siblingData: any) => siblingData.showAlert,
          },
        },
      ],
    },
    {
      name: 'headline',
      label: 'Headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subHeadline',
      label: 'Sub Headline',
      type: 'textarea',
      required: true,
    },
    {
      name: 'primaryButton',
      label: 'Primary Button',
      type: 'group',
      fields: [
        {
          name: 'showPrimaryButton',
          label: 'Show Primary Button',
          type: 'checkbox',
        },
        {
          name: 'primaryButtonText',
          label: 'Button Text',
          type: 'text',
          required: true,
          admin: {
            condition: (data, siblingData: any) => siblingData.showPrimaryButton,
          },
        },
        {
          name: 'primaryButtonLink',
          label: 'Button Link',
          type: 'text',
          required: true,
          admin: {
            condition: (data, siblingData: any) => siblingData.showPrimaryButton,
          },
        },
      ],
    },
    {
      name: 'secondaryButton',
      label: 'Secondary Button',
      type: 'group',
      fields: [
        {
          name: 'showSecondaryButton',
          label: 'Show Secondary Button',
          type: 'checkbox',
        },
        {
          name: 'secondaryButtonText',
          label: 'Button Text',
          type: 'text',
          required: true,
          admin: {
            condition: (data, siblingData: any) => siblingData.showSecondaryButton,
          },
        },
        {
          name: 'secondaryButtonLink',
          label: 'Button Link',
          type: 'text',
          required: true,
          admin: {
            condition: (data, siblingData: any) => siblingData.showSecondaryButton,
          },
        },
      ],
    },
    {
      name: 'featuredIn',
      label: 'Featured In',
      type: 'array',
      fields: [
        {
          name: 'companyName',
          label: 'Company Name',
          type: 'text',
          required: true,
        },
        {
          name: 'companyLogo',
          label: 'Company Logo',
          type: 'upload',
          relationTo: 'media',
        },
      ],
    },
  ],
};
