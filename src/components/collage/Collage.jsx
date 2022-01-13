import React from 'react'

export function Collage({ imgUrl }) {
  return (
    <div>
      {imgUrl.map((item, i) => (
        <ItemCollage key={i} imgUrl={item} i={i + 1} />
      ))}
    </div>
  )
}

const ItemCollage = ({ imgUrl, i }) => {
  return (
    <figure className={`gallery-item gallery-item-${i}`}>
      {<img src={imgUrl} alt="gallery-item" />}
    </figure>
  )
}
export default Collage
