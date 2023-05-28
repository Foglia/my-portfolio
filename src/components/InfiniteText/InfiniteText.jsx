import React from 'react'
import './InfiniteText.css';

function InfiniteText({ text }) {

  return (
    <>
    <div className='markBoth'>
    <div className='mark'>
        <span><i>{ text }</i></span>
    </div>
    </div>
    </>
  )
}

export default InfiniteText