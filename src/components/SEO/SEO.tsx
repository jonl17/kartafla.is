import React from 'react'
import { Helmet } from 'react-helmet'

const DESCRIPTION =
  'Hönnunar og forritunar tvíeykið kartafla tekur að sér verkefni, stór og smá.'
const TITLE = 'kartafla'

const SEO = () => {
  return (
    <Helmet>
      <title>{TITLE}</title>
      <meta
        name='og:title'
        property='og:title'
        content={TITLE}
      />
      <meta
        name='description'
        property='description'
        content={DESCRIPTION}
      />
      <meta
        name='og:description'
        property='og:description'
        content={DESCRIPTION}
      />
      <meta name='twitter:description' content={DESCRIPTION} />
      <meta
        name='og:image'
        property='og:image'
        content='/images/potato.png'
      />
      <meta
        name='twitter:image'
        property='twitter:image'
        content='/images/potato.png'
      />
      <meta name='twitter:card' content='summary_large_image' />
      <link rel='favicon' href='/favicon.ico' />
    </Helmet>
  )
}

export default SEO
