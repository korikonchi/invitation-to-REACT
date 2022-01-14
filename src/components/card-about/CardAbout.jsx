import React from 'react'

export const CardAbout = ({ title, imagUrl, message, icon }) => {
  return (
    <>
      <h2 className="">{title}</h2>
      {imagUrl && (
        <figure className="">
          <img src={imagUrl} alt={title} className="" />
        </figure>
      )}
      <p className="">{message}</p>

      {icon && <figure>{icon}</figure>}
    </>
  )
}
export default CardAbout
