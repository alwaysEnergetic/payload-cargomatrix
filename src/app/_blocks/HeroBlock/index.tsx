import React, { Fragment } from 'react'

import { Page } from './../../../payload-types.js'

import { SimpleCentered } from './SimpleCentered'
import { SplitWithScreenshot } from './SplitWithScreenshot'
import { SplitCodeExample } from './SplitCodeExample'
import { SplitImage } from './SplitImage'
import { AngledImg } from './AngledImg'

import { toKebabCase } from '../../_utilities/toKebabCase'

const layoutComponents = {
  'simple-centered': SimpleCentered,
  'split-screenshot': SplitWithScreenshot,
  'split-code-example': SplitCodeExample,
  'simple-centered-bg': SimpleCentered,
  'app-screenshot': SimpleCentered,
  'phone-mockup': SplitWithScreenshot,
  'split-image': SplitImage,
  'angled-image-right': AngledImg,
  'image-tiles': SplitWithScreenshot,

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
