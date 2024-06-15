import React from 'react'
import Link from 'next/link'

import { Page } from '../../../payload-types'

export type CMSLinkType = {
  type?: 'custom' | 'reference'
  url: string
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
  console.log('!!!!!!!!!!!!!!!!!!!')
  const href =
    type === 'reference' && typeof reference?.value === 'object' && reference.value.slug
      ? `${reference?.relationTo !== 'pages' ? `/${reference?.relationTo}` : ''}/${
          reference.value.slug
        }`
      : url

  console.log(type)
  console.log(url)
  console.log(newTab)
  console.log(reference)
  console.log(label)


  if (!href) return null

  const newTabProps = newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}
  if (!appearance || appearance === 'default') {
    if (href || url) {
      return (
        <Link {...newTabProps} href={href || url} className="text-sm font-semibold leading-6">
          {label && label}
          {children && children}
        </Link>
      )
    }
  }

  return (
    <Link
      className="text-sm font-semibold leading-6"
      {...newTabProps}
      href={href}
    >
    {label && label}
    </Link>
  )
}
