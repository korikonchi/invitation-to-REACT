import React from 'react'
import Icon from '../icon/Icon'

export function AboutUs({ cardProfile }) {
  console.log(cardProfile)

  return (
    <div>
      {cardProfile.map(({ id, ...others }) => (
        <CardItem key={id} {...others} />
      ))}
    </div>
  )
}

const CardItem = ({ title = '', imagUrl = '', icon = '', message = '' }) => {
  return (
    <>
      <h2 className="">{title}</h2>
      {imagUrl && (
        <figure className="">
          <img src={imagUrl} alt={title} className="" />
        </figure>
      )}
      <p className="">{message}</p>
      {icon && <Icon i={icon} />}
    </>
  )
}
export default AboutUs
