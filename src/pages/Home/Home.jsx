import React from "react"
import data from "../../data.json"
import Card from "../../components/Card"
import Hero from "./Hero"
import { Link } from "react-router"

const Home = () => {
  return (
    <div className=" mx-auto bg-gray-50">
      <Hero />
      <div className="container mx-auto my-8">
        <h3 className="text-xl font-semibold py-4">Featured Tools</h3>
        <div className="flex flex-wrap justify-start items-center gap-8">
          {data.map((item) => (
            <a target="_blank" href={item.url}>
              <Card {...item} />
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
