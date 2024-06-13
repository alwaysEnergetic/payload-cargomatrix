import React, { Fragment } from 'react'

import { Page } from './../../../payload-types.js'

import { MediaBlock } from '../../_blocks/MediaBlock'
import { TeamLargeImagesDark } from '../../_blocks/TeamLargeImagesDark'

import { toKebabCase } from '../../_utilities/toKebabCase'


const blockComponents = {
  mediaBlock: MediaBlock,
  teamLargeImagesDark: TeamLargeImagesDark
}

export const Blocks: React.FC<{
  blocks: (Page['layout'][0] )[]
  disableTopPadding?: boolean
}> = props => {
  const { disableTopPadding, blocks } = props

  const hasBlocks = blocks && Array.isArray(blocks) && blocks.length > 0
  if (hasBlocks) {
    return (
      <Fragment>
        {blocks.map((block, index) => {
          const { blockName, blockType } = block

          if (blockType && blockType in blockComponents) {
            const Block = blockComponents[blockType]

            // the cta block is containerized, so we don't consider it to be inverted at the block-level
            const blockIsInverted =
              'invertBackground' in block && blockType !== 'cta' ? block.invertBackground : false
            const prevBlock = blocks[index - 1]

            const prevBlockInverted =
              prevBlock && 'invertBackground' in prevBlock && prevBlock?.invertBackground

            const isPrevSame = Boolean(blockIsInverted) === Boolean(prevBlockInverted)

            // let paddingTop: VerticalPaddingOptions = 'large'
            // let paddingBottom: VerticalPaddingOptions = 'large'

            let paddingTop: string = 'large'
            let paddingBottom: string = 'large'

            if (prevBlock && isPrevSame) {
              paddingTop = 'none'
            }

            if (index === blocks.length - 1) {
              paddingBottom = 'large'
            }

            if (disableTopPadding && index === 0) {
              paddingTop = 'none'
            }

            if (Block) {
              return (
                // <BackgroundColor key={index} invert={blockIsInverted}>
                //   <VerticalPadding top={paddingTop} bottom={paddingBottom}>
                    <Block
                        key={index}
                      // @ts-expect-error
                      id={toKebabCase(blockName)}
                      {...block}
                    />
                  //</VerticalPadding>
                //</BackgroundColor>
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
