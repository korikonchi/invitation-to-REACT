import React from 'react'
import { Icons } from '../../assets/icons'

export function AboutUs({ cardProfile }) {
  return (
    <div>
      {cardProfile.map(({ ...others }) => (
        <CardItem key={others.id} {...others} />
      ))}
    </div>
  )
}

const CardItem = ({ title, imagUrl, message, icon }) => {
  return (
    <>
      <h2 className="">{title}</h2>
      {imagUrl && (
        <figure className="">
          <img src={imagUrl} alt={title} className="" />
        </figure>
      )}
      <p className="">{message}</p>

      {icon && <figure>{Icons.heart}</figure>}
    </>
  )
}
export default AboutUs
