import React, { useState } from "react";
import "./CustomSlider.css";

function CustomSlider(props) {
  const [sliderValue, setSliderValue] = useState(1);
  // ref

  // Handle change in the text input
  const handleTextChange = (event) => {
    const newValue = event.target.value;
    setSliderValue(newValue);
    props.setValue(sliderValue);

    const tempSliderValue = event.target.value;
    const progress = (tempSliderValue / props.range) * 100;
    event.target.style.background = `linear-gradient(to right, var(--app-yellow) ${progress}%, var(--app-gray) ${progress}%)`;
  };

  return (
    <div className="mb-8 mt-4">
      <h3 className="text-app-yellow font-medium text-lg mb-2">
        {props.prompt}
      </h3>
      <div className="slidecontainer flex items-center">
        <div className="flex items-center w-full">
          <h4 className="text-app-yellow font-medium text-lg mr-2">0</h4>
          <div className="range w-full flex items-center">
            <input
              onChange={(e) => handleTextChange(e)}
              value={sliderValue}
              type="range"
              min="1"
              max="40"
              className="range-input w-full"
              id="range2"
            />
          </div>
          <h4 className="text-app-yellow font-medium text-lg ml-2">
            {props.range}
          </h4>
        </div>
        <input
          value={sliderValue}
          onChange={handleTextChange}
          className="ml-6 w-12 py-2 text-center bg-app-lighter-dark text-app-gray border rounded border-app-gray"
          type="text"
        />
      </div>
    </div>
  );
}

export default CustomSlider;
