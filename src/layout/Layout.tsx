import React from 'react'
import SEO from '@src/components/SEO'
import ControlPanel from '@src/components/ControlPanel'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main className='main'>
        <div>{children}</div>
      </main>
    </>
  )
}

export default Layout
