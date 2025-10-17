import React from "react"
import data from "../../data.json"
import Card from "../../components/Card"

const Home = () => {
  return (
    <div className="p-4">
      <div className="flex justify-start items-center gap-8">
        {data.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  )
}

export default Home
