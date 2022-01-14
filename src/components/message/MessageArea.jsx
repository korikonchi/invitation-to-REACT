import React from 'react'
import CardInvite from '../card-invite/CardInvite'

export function MessageArea({
  title,
  paragraphList,
  labelarea,
  labelwish,
  btnsubmit,
}) {
  return (
    <div>
      <CardInvite
        title={title}
        paragraphList={paragraphList}
        labelarea={labelarea}
        labelwish={labelwish}
        btnsubmit={btnsubmit}
      />
    </div>
  )
}
export default MessageArea
