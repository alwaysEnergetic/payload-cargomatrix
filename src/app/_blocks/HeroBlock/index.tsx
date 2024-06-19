import React from 'react'

import { Page } from './../../../payload-types.js'

import { SimpleCentered } from '../HeroBlock/SimpleCentered'
import { SplitWithScreenshot } from '../HeroBlock/SplitWithScreenshot'
import { SplitCodeExample } from '../HeroBlock/SplitCodeExample'
import { SplitImage } from '../HeroBlock/SplitImage'
import { AngledImg } from '../HeroBlock/AngledImg'
import { HeroOffsetImage } from '../HeroBlock/HeroOffsetImage'

import { toKebabCase } from '../../_utilities/toKebabCase'

const layoutComponents = {
    //Hero Block
    'simple-centered': SimpleCentered,
    'split-screenshot': SplitWithScreenshot,
    'split-code-example': SplitCodeExample,
    'simple-centered-bg': SimpleCentered,
    'app-screenshot': SimpleCentered,
    'phone-mockup': SplitWithScreenshot,
    'split-image': SplitImage,
    'angled-image-right': AngledImg,
    'image-tiles': SplitWithScreenshot,
    'offset-image': HeroOffsetImage,
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
