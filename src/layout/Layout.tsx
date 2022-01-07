import React from 'react'
import SEO from '@src/components/SEO'
import ControlPanel from '@src/components/ControlPanel'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      <main className='main'>
        <div>
          <ControlPanel className='w-32 absolute right-10 top-10' />
          {children}
        </div>
      </main>
    </>
  )
}

export default Layout
