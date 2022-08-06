import React from 'react'
import CustomerReview from '../CustomerReview/CustomerReview'
import Updates from '../Update/Updates'
import './rightside.css'

const Rightside = () => {
  return (
    <div className='Rightside'>
        <div>
            <h3>Updates</h3>
            <Updates/>  
        </div>
        <div>
            <h3>Customers Review</h3>
            <CustomerReview />
        </div>
    </div>
  )
}

export default Rightside