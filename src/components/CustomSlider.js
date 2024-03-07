import React, {useState, useEffect, useRef} from 'react'
import "./CustomSlider.css"

function CustomSlider(props) {
  const [sliderValue, setSliderValue] = useState(1);
  // ref
  const sliderRef = useRef(1);

    // Handle change in the text input
  const handleTextChange = (event) => {
      const newValue = event.target.value;
      setSliderValue(newValue);
  };
  

  return (
    <div class="slidecontainer flex items-center">
      <input value={sliderValue} type="range" min="1" max="40" onChange={handleTextChange} class="slider w-full" id="myRange"/>
      <input value={sliderValue} onChange={handleTextChange} className='ml-2 w-10 p-2 text-center bg-app-lighter-dark text-app-gray border rounded border-app-gray' type='text'/>
    </div>
  )
}

export default CustomSlider
