import React from 'react'
import Icon from '../icon/Icon'
export function CardLocation({ title, icon, link, textLink, paragraph }) {
  return (
    <div>
      <h2 className="title">{title}</h2>
      {icon && (
        <figure>
          <Icon i={icon} />
        </figure>
      )}
      {paragraph.map((text, i) => (
        <TextItem key={i} text={text} />
      ))}
      <a className="" target="_blank" href={link}>
        {textLink}
      </a>
    </div>
  )
}
const TextItem = ({ text }) => {
  return <>{text && <p className="">{text}</p>}</>
}
export default CardLocation
