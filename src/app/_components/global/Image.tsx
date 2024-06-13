import { Media } from '@/payload-types'
import Image from 'next/image'

type Props = {
  image: Media | string
  width: number
  height: number
  className?: string
}

export default function PayloadImage({ image, width, height, className = "" }: Props) {
  const src = typeof image === 'string' ? image : image?.url ?? ''
  const alt = typeof image === 'string' ? image : image?.alt

  return <Image className={className} src={src} alt={alt} width={width} height={height} />
}
