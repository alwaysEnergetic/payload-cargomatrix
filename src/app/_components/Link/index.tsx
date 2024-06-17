import React from 'react'
import Link from 'next/link'

import { Page } from '../../../payload-types'
import {Button } from "@/components/ui/button"

export type CMSLinkType = {
  type?: 'custom' | 'reference'
  url: string
  newTab?: boolean
  reference?: {
    value: string | Page
    relationTo: 'pages'
  }
  label?: string
  appearance: string
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
  return (
    <Button
      asChild
      // @ts-expect-error
      variant={appearance}
      size="sm"
      className={className}
    >
      <Link href={href} {...newTabProps} target="_blank">{label && label}</Link>
    </Button>
  )
}
