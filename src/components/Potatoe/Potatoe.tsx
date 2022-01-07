import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Potatoe = () => {
  const result = useStaticQuery(graphql`
    {
      file(
        sourceInstanceName: { eq: "assets" }
        absolutePath: { regex: "/potato/" }
      ) {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  `)

  const image = result.file

  if (!image) return null

  return (
    <div className='h-56 w-56 animate-spin-slow'>
      <GatsbyImage
        className='h-full w-full'
        objectFit='contain'
        image={image.childImageSharp.gatsbyImageData}
        alt='Potatoe'
      />
    </div>
  )
}

export default Potatoe
