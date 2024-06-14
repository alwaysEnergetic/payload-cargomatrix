import type { Field, ArrayField } from 'payload/types'

import deepMerge from '../utilities/deepMerge'
import type { LinkAppearances } from './link'
import link from './link'

type LinkGroupType = (options?: {
  overrides?: Partial<ArrayField>
  appearances?: LinkAppearances[] | false
  label?: string
}) => Field

const linkGroup: LinkGroupType = ({ overrides = {}, appearances, label = 'Label' } = {} ) => {
  const generatedLinkGroup: Field = {
    name: 'links',
    type: 'array',
    label: {label},
    fields: [
      link({
        appearances,
      }),
    ],
  }

  return deepMerge(generatedLinkGroup, overrides)
}

export default linkGroup
