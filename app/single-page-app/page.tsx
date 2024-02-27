import React from 'react'
import Home from '../page'
import Service from '../service/page'
import Customers from '../customers/page'
import Contacts from '../contacts/page'

function SinglePageApp() {
  return (
    <>
      <Home/>
      <Service/>
      <Customers/>
      <Contacts/>
    </>
  )
}

export default SinglePageApp