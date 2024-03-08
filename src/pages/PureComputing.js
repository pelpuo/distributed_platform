import React, {useState, useEffect} from "react";
import FileUpload from "../components/FileUpload";
import CustomSlider from "../components/CustomSlider";
// import {alert} from "react-alert"
import { useConfig } from "../contexts/ConfigContext";
import { useNavigate } from "react-router-dom";

const apiurl = "http://10.0.0.254:8432"


function PureComputing() {
  const {
    systemType,
    nodes,
    setNodes,
    configFile,
    computeFile,
    setConfigFile,
    setComputeFile,
  } = useConfig();

  const [filled, setFilled] = useState(false);
  const [btnActive, setBtnActive] = useState(true);

  const navigate = useNavigate();

  const backClick = (e) => {
    navigate("/");
  };

  const uploadClick = async (e) => {
    if (filled) {
      var data = new FormData()
      data.append("config_file", configFile)
      data.append("compute_file", computeFile)

      setBtnActive(false)
      fetch(`${apiurl}/upload_scenario?nodes=${nodes}`, {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body: data
      })
      .then(response=>response.json())
      .then(data =>{
        setBtnActive(true)
        console.log(data);
        alert("Upload Complete");
        navigate("/");
      })
    }
  };

  useEffect(()=>{
    if (systemType && nodes && configFile && computeFile) {
      setFilled(true);
    }
  },[systemType, nodes, configFile, computeFile])

  return (
    <div className="flex flex-col items-center justify-center w-full p-2">
      <div className="flex flex-col justify-center">
        <h1 className="text-xl text-app-yellow text-center font-semibold mb-8">
          Cluster Configuration
        </h1>
        <div className="bg-app-dark p-12 self-center rounded-xl">
          <div className="flex flex-col">
            <CustomSlider
              prompt="Number of CPUs"
              range={40}
              value={nodes}
              setValue={setNodes}
            />
            <FileUpload
              prompt="Compute File (*.c)"
              file={configFile}
              setFile={setConfigFile}
            />
            <FileUpload
              prompt="Configuration File (*.h)"
              file={computeFile}
              setFile={setComputeFile}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <button
            onClick={(e) => backClick(e)}
            className="p-4 w-60 mt-8 self-end text-app-white rounded text-md border-2 border-app-red hover:border-app-yellow hover:text-app-yellow mb-3 ease-in-out duration-300 font-semibold"
          >
            Back
          </button>
          <button
            active={btnActive}
            onClick={(e) => uploadClick(e)}
            className={`p-4 w-60 mt-8 self-end text-app-white rounded text-md ${filled && btnActive?'bg-app-red hover:bg-app-yellow hover:text-app-red' : 'bg-app-lighter-dark'} mb-3 ease-in-out duration-300 font-semibold`}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default PureComputing;
