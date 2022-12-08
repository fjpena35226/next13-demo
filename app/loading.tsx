"use client"
import React from 'react'
import Spinner from 'src/components/@UI/Spinner/Spinner.client'

function Loading() {
  return (
    <div className='w-full flex justify-center items-center'>
      <Spinner />
    </div>
  )
}

export default React.memo(Loading)
