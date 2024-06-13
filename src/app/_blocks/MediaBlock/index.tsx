import React from 'react'
import { StaticImageData } from 'next/image'

import { Page } from '../../../payload-types'

type Props = Extract<Page['layout'][0], { blockType: 'mediaBlock' }> & {
  staticImage?: StaticImageData
  id?: string
}

export const MediaBlock: React.FC<Props> = props => {
  const { media, position = 'default', staticImage } = props

  let caption
  if (media && typeof media === 'object') caption = media.caption

  return (
    <div>
        <h1>Hello. This is Media Block</h1>
      {/* {position === 'fullscreen' && (
        <div className={classes.fullscreen}>
          <Media resource={media} src={staticImage} />
        </div>
      )}
      {position === 'default' && (
        <Gutter>
          <Media resource={media} src={staticImage} />
        </Gutter>
      )}
      {caption && (
        <Gutter className={classes.caption}>
          <RichText content={caption} />
        </Gutter>
      )} */}
    </div>
  )
}
