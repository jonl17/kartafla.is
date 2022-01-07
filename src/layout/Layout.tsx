import React from 'react'
import SEO from '@src/components/SEO'

const Layout: React.FC = ({ children }) => {
  return (
    <main className='main'>
      <SEO />
      {children}
    </main>
  )
}

export default Layout
