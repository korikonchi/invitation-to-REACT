import React from 'react'

export function CardInvite({
  title,
  linkUrl,
  linkLabel,
  paragraphList,
  clipArt,
  className,
}) {
  return (
    <div className={`card-invite ${className}`}>
      <h2 className="title">{title}</h2>
      {clipArt && clipArt}

      {paragraphList.map((text, i) => (
        <TextItem key={i} index={i + 1} text={text} />
      ))}
      {linkUrl && linkLabel && (
        <a className="" target="_blank" href={linkUrl}>
          {linkLabel}
        </a>
      )}
    </div>
  )
}
const TextItem = ({ text, index }) => {
  return <p className={`class-${index}`}>{text}</p>
}
export default CardInvite
