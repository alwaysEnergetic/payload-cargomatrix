import React from 'react'
import Link from 'next/link'

import { Page } from '../../../payload-types'

type CMSLinkType = {
  type?: 'custom' | 'reference'
  url?: string | undefined
  newTab?: boolean
  reference?: {
    value: string | Page
    relationTo: 'pages'
  }
  label?: string
  appearance?: 'default' | 'primary' | 'secondary' | 'none'
  children?: React.ReactNode
  className?: string
}

export const CMSLink: React.FC<CMSLinkType> = ({
  type,
  url,
  newTab,
  reference,
  label,
  appearance,
  children,
  className,
}) => {
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  if (!href) return null

  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
//   if (!appearance) {

//     if (href || url) {
//       return (
//         <Link {...newTabProps} href={href || url} className={className}>
//           {label && label}
//           {children && children}
//         </Link>
//       )
//     }
//   }

  return (
    <Link
      className={className}
      {...newTabProps}
      href={href}
    >
    {label && label}
    </Link>
  )
}
