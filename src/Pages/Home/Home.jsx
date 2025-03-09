import React from 'react'
import BannerSlider from './BannerSlider/BannerSlider'
import Categories from './Categories/Categories'
import Recipes from './Recipes/Recipes'

export default function Home() {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <Categories></Categories>
      <Recipes></Recipes>
    </div>
  )
}
