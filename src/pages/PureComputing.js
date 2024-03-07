import React from 'react'
import FileUpload from '../components/FileUpload'
import CustomSlider from '../components/CustomSlider'
// import Slider, {range} from "rc-slider"

function PureComputing() {
  return (
    <div className='flex flex-col items-center justify-center w-full p-2'>
        <div className='flex flex-col justify-center'>
            <h1 className='text-app-white text-xl text-app-yellow text-center font-semibold mb-8'>Cluster Configuration</h1>
            <div className='bg-app-dark p-12 self-center rounded-xl'>
                <div className='flex flex-col'>
                    <CustomSlider range={40}/>
                    <FileUpload prompt="Compute File (*.c)"/>
                    <FileUpload prompt="Configuration File (*.h)"/>
                </div>
            </div>
            <div className='flex justify-between'>
              <button className='p-4 w-60 mt-8 self-end text-app-white rounded text-md border-2 border-app-red hover:border-app-yellow hover:text-app-yellow mb-3 ease-in-out duration-300 font-semibold'>Back</button>
              <button className='p-4 w-60 mt-8 self-end text-app-white rounded text-md bg-app-red hover:bg-app-yellow hover:text-app-red mb-3 ease-in-out duration-300 font-semibold'>Upload</button>
            </div>
        </div>
    </div>
  )
}

export default PureComputing
