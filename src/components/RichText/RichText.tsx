import React from 'react'

export type RichTextProps = {
  html: string
}

const RichText = ({ html }: RichTextProps) => {
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default RichText
