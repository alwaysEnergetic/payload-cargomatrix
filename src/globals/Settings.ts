import { GlobalConfig } from 'payload/types'

import { ColorField } from '../fields/ColorField'

export const Settings: GlobalConfig = {
  slug: 'settings',
  fields: [
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      type: 'tabs',
      tabs: [
          {
              label: 'Theme Setting',
              fields: [
                {
                  name: 'mode', // required
                  type: 'radio', // required
                  label: 'Mode',
                  required: true,
                  options: [
                    // required
                    {
                      label: 'Light',
                      value: 'light',
                    },
                    {
                      label: 'Dark',
                      value: 'dark',
                    },
                  ],
                  admin: {
                    layout: 'horizontal',
                  },
                },
                {
                  name: 'radius', // required
                  type: 'radio', // required
                  label: 'Radius',
                  options: [
                    '0',
                    '0.3',
                    '0.5',
                    '0.75',
                    '1'
                  ],
                  admin: {
                    layout: 'horizontal',
                  },
                },
                ColorField,
              ],
          },
      ],
  },
  ],
}
