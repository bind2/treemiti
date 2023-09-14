import React from 'react'

const CartList = ({jobRole, certificateName, duration, skills}) => {
  return (
    <div className='cart'>
      <h5>
        <small>{jobRole}</small>
        {certificateName}
        <small>{duration}</small>
      </h5>
      <ul dangerouslySetInnerHTML={{ __html: skills }}></ul>
    </div>
  )
}

export default CartList