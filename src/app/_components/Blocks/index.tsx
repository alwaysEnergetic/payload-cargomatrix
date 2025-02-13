import React, { Fragment } from 'react'

import { Page } from './../../../payload-types.js'

import { HeroBlock } from '../../_blocks/HeroBlock'
import { TeamSection } from '../../_blocks/TeamSection'
import { FeatureSection } from '../../_blocks/FeatureSection'



import { toKebabCase } from '../../_utilities/toKebabCase'

const blockComponents = {
  hero: HeroBlock,
  team: TeamSection,
  featureSection: FeatureSection
}

export const Blocks: React.FC<{
  blocks: (Page['layout'][0] )[]
}> = props => {
  const { blocks } = props
  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block
          if (blockType && blockType in blockComponents) {
            // @ts-expect-error
            const Block = blockComponents[blockType]
            if (Block) {
              return (
                <Block
                    key = {index}
                  // @ts-expect-error
                  id = {toKebabCase(blockName)}
                  {...block}
                />
              )
            }
          }
          return null
        })}
      </Fragment>
    )
  }

  return null
}

