import React from 'react'
import CardLocation from '../card/CardLocation'

export function MessageArea({ title, paragraph, phname, phwishes, btnsubmit }) {
  return (
    <div>
      {
        <CardLocation
          title={title}
          paragraph={paragraph}
          phname={phname}
          phwishes={phwishes}
          btnsubmit={btnsubmit}
        />
      }
    </div>
  )
}
export default MessageArea
