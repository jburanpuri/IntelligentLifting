import React from 'react'
import Image from 'next/image'

const title = 'My Transformation'
const photos = [
    '/transformation/2.png',
    '/transformation/3.png',
    '/transformation/4.png',
]



const Transformation = () => {
    return (
        <div className="flex flex-col items-center justify-center px-10">
        <h2 className="mt-10 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 px-4 sm:px-0 md:px-0 gap-10">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="w-full bg-gray-900 flex items-center justify-center"
            >
              <Image
                src={photo}
                alt={"Transformation Photos"}
                width={500}
                height={500}
                className="w-auto h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    )}


export default Transformation