import React, { Fragment } from 'react'

import { Page } from './../../../payload-types.js'

import { SimpleCentered } from './simpleCentered'

import { toKebabCase } from '../../_utilities/toKebabCase'


const layoutComponents = {
  'simple-centered': SimpleCentered
}

export const HeroBlock: React.FC<{
  block: (Page['layout'][0] )
}> = props => {
  const { block } = props

    if (block) {
        const { blockName, layoutType } = block
        if (layoutType && layoutType in layoutComponents) {
        // @ts-expect-error
        const Layout = layoutComponents[layoutType]
        if (Layout) {
            return (
              <Layout
                // @ts-expect-error
                id = {toKebabCase(blockName)}
                {...block}
                />
            )
        }
        }
        return null
    }

  return null
}
