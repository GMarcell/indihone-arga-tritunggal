import React from 'react'
import Home from '../page'
import Service from '../service/page'
import Clients from '../clients/page'
import Contacts from '../contacts/page'

function SinglePageApp() {
  return (
    <>
      <Home/>
      <Service/>
      <Clients/>
      <Contacts/>
    </>
  )
}

export default SinglePageApp