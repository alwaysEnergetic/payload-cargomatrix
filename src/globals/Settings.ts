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
    ColorField,
  ],
}
