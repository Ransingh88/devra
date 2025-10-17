import React from "react"

const Card = ({ title, imageUrl }) => {
  return (
    <div className="w-52 h-64 border border-gray-100 shadow-xl rounded-xl p-2">
      <div className="h-28 rounded-lg overflow-hidden bg-gray-400">
        <img src={imageUrl} alt="" />
      </div>
      <h3 className="p-2 font-semibold">{title}</h3>
    </div>
  )
}

export default Card
