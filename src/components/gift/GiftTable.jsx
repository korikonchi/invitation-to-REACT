import React from 'react'
import CardLocation from '../card/CardLocation'
import Icons from '../../assets/icons'
export function GiftTable({ ...other }) {
  console.log(other)

  return (
    <div>
      {
        <CardLocation
          title={other.title}
          paragraph={other.paragraph}
          link={other.link}
          textLink={other.textLink}
        />
      }
    </div>
  )
}
export default GiftTable
