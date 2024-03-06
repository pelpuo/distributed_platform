import React from 'react'
import ClusterButton from '../components/ClusterButton'

function SystemType() {
  return (
    <div className='flex flex-col items-center justify-center w-full p-2'>
        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-app-white text-xl text-app-yellow text-center font-semibold mb-8'>System Type</h1>
            <div className='bg-app-dark p-8 self-center rounded-xl'>
                <div className='flex'>
                    <ClusterButton name="Pure Computing" type="pure" selected={false}/>
                    <ClusterButton name="Hybrid Computing" type="hybrid" selected={false}/>
                    <ClusterButton  name="Edge Computing" type="edge" selected={false}/>
                </div>
            </div>
            <button className='p-4 w-60 mt-8 self-end text-app-white rounded text-md bg-app-lighter-dark hover:bg-app-yellow hover:text-app-red mb-3 ease-in-out duration-300 font-semibold'>Next</button>
        </div>
    </div>
  )
}

export default SystemType
