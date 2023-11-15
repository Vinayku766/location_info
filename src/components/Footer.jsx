import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center text-center text-[#ccc] bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Copyright@{year}</div>
  )
}

export default Footer