import React from 'react'
import { HeroeList } from '../components/HeroeList'

export const DCPage = () => {
  return (
    <>
      <h1>DC Comics</h1>
      <hr />

      <HeroeList  publisher='DC Comics'/>
    </>
    
  )
}
