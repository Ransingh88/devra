import React from "react"

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="w-68 h-64 border bg-gray-50 border-gray-100 shadow-lg rounded-xl p-2 hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer">
      <div className="h-28 rounded-lg overflow-hidden bg-gray-400 shadow-md">
        <img src={imageUrl || "https://www.dummyimg.in/placeholder?text=Devra"} alt="" className="h-full w-full object-cover object-center" />
      </div>
      <div className="p-2">
        <h3 className=" font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  )
}

export default Card
