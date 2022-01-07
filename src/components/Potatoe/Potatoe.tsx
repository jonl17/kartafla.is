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
          gatsbyImageData
        }
      }
    }
  `)

  const image = result.file

  if (!image) return null

  console.log(image)

  return (
    <div>
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt='Potatoe'
      />
    </div>
  )
}

export default Potatoe
