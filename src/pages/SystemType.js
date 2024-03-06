import React from 'react'
import ClusterButton from '../components/ClusterButton'

function SystemType() {
  return (
    <div className='flex flex-col justify-center w-full p-2'>
      <div className='flex items-center justify-center'>
        <div className='bg-app-dark p-8 self-center rounded-xl'>
            <h1 className='text-app-white text-lg text-app-yellow text-center font-semibold'>SystemType</h1>
            <div className='flex'>
                <ClusterButton name="Pure Computing" type="pure" selected={false}/>
                <ClusterButton name="Hybrid Computing" type="hybrid" selected={false}/>
                <ClusterButton  name="Edge Computing" type="edge" selected={false}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SystemType
