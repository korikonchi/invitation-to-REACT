import React from 'react'
import { Icons } from '../../assets/icons'
export function CardLocation({
  title,
  link,
  textLink,
  paragraph,
  icon,
  phname,
  phwishes,
  btnsubmit,
}) {
  return (
    <div>
      <h2 className="title">{title}</h2>
      {icon && Icons.engagementRing}

      {paragraph.map((text, i) => (
        <TextItem key={i} text={text} />
      ))}
      {link && (
        <a className="" target="_blank" href={link}>
          {textLink}
        </a>
      )}
      <form action="">
        {phname && <input type="text" placeholder={phname} />}
      </form>
      {phwishes && (
        <textarea
          placeholder={phwishes}
          name="wish"
          id="textarea"
          maxLength={1000}
        ></textarea>
      )}
      {btnsubmit && <input className="" type="submit" value={btnsubmit} />}
    </div>
  )
}
const TextItem = ({ text }) => {
  return <>{text && <p className="">{text}</p>}</>
}
export default CardLocation
