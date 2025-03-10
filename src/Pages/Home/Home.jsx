import React from 'react'
import BannerSlider from './BannerSlider/BannerSlider'
import Categories from './Categories/Categories'
import Recipes from './Recipes/Recipes'
import ChefHon from './ChefHon/ChefHon'
import FoodOnInstagram from './FoodOnInstagram/FoodOnInstagram'
import Subscribe from '../Subscribe/Subscribe'
import Blog from './Blog/Blog'
import AboutUs from './AboutUs/AboutUs'

export default function Home() {
  return (
    <div>
      <BannerSlider></BannerSlider>
      <Categories></Categories>
      <Recipes></Recipes>
      <ChefHon></ChefHon>
      <Blog></Blog>
      <FoodOnInstagram></FoodOnInstagram>
      <AboutUs></AboutUs>
      <Subscribe></Subscribe>
    </div>
  )
}
