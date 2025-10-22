import React from "react"

const Hero = () => {
  return (
    <div className="mx-auto">
      <div className="min-h-screen ">
        <div className="h-screen bg-[url('./images/bg.jpg')] bg-cover bg-center bg-no-repeat flex flex-col items-center justify-start gap-8">
          <h3 className="font-semibold text-7xl text-center mt-48">
            Doing it all in <span className="text-blue-500 font-playball">fresh,</span> <br />{" "}
            <span className="text-blue-500 font-playball">exciting</span> ways!
          </h3>
          <p className="w-1/3 text-center text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid voluptate facere quaerat deserunt distinctio, deleniti recusandae
            impedit, temporibus praesentium nisi officiis quo suscipit obcaecati! Quos excepturi qui quis beatae.
          </p>
          <button className="bg-blue-500 text-gray-50 capitalize px-4 hover:bg-blue-600 py-2 rounded-lg cursor-pointer">Discover Resources</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
