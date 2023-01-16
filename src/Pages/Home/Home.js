import React from 'react'
import { Nav } from '../Shared/Nav'
import { Hero } from './Hero'
import { Menu } from './Menu'

export const Home = () => {
  return (
    <div>
        <Nav></Nav>
        <Menu/>
        <Hero/>
    </div>
  )
}
