import type { Field } from 'payload/types'

import linkGroup from './linkGroup'
//blocks
import { MediaBlock } from './../blocks/MediaBlock'
import { HeroBlock } from './../blocks/HeroBlock'
import { FeaturesBlock } from './../blocks/FeaturesBlock'

import {
    HTMLConverterFeature,
    lexicalEditor,
    BlocksFeature,
    LinkFeature,
    UploadFeature,
  } from '@payloadcms/richtext-lexical'

export const hero: Field = {
  name: 'hero',
  label: false,
  type: 'group',
  fields: [
    {
      type: 'select',
      name: 'type',
      label: 'Type',
      required: true,
      defaultValue: 'lowImpact',
      options: [
        {
          label: 'None',
          value: 'none',
        },
        {
          label: 'High Impact',
          value: 'highImpact',
        },
        {
          label: 'Medium Impact',
          value: 'mediumImpact',
        },
        {
          label: 'Low Impact',
          value: 'lowImpact',
        },
      ],
    },
    {
        name: 'richtext',
        type: 'richText',
        editor: lexicalEditor({
            features: ({ defaultFeatures }) => [
            ...defaultFeatures,
            LinkFeature({
                // Example showing how to customize the built-in fields
                // of the Link feature
                fields: [
                  {
                    name: 'rel',
                    label: 'Rel Attribute',
                    type: 'select',
                    hasMany: true,
                    options: ['noopener', 'noreferrer', 'nofollow'],
                    admin: {
                      description:
                        'The rel attribute defines the relationship between a linked resource and the current document. This is a custom link field.',
                    },
                  },
                ],
              }),
              UploadFeature({
                collections: {
                  uploads: {
                    // Example showing how to customize the built-in fields
                    // of the Upload feature
                    fields: [
                      {
                        name: 'caption',
                        type: 'richText',
                        editor: lexicalEditor(),
                      },
                    ],
                  },
                },
              }),
              // This is incredibly powerful. You can re-use your Payload blocks
              // directly in the Lexical editor as follows:
              BlocksFeature({
                blocks: [
                    MediaBlock,
                ],
              }),
            // The HTMLConverter Feature is the feature which manages the HTML serializers.
            // If you do not pass any arguments to it, it will use the default serializers.
            HTMLConverterFeature({}),
            ],
        }),
    },
    linkGroup({
      overrides: {
        maxRows: 2,
      },
    }),
    {
      name: 'media',
      type: 'upload',
      relationTo: 'media',
      required: true,
      admin: {
        condition: (_, { type } = {}) => ['highImpact', 'mediumImpact'].includes(type),
      },
    },
    {
      type: 'blocks',
      name: 'blocks',
      localized: true,
      minRows: 1,
      blocks: [
        HeroBlock,
        FeaturesBlock
      ],
    },
  ],
}
