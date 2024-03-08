import React, {useState, useEffect} from "react";
import FileUpload from "../components/FileUpload";
import CustomSlider from "../components/CustomSlider";
// import {alert} from "react-alert"
import { useConfig } from "../contexts/ConfigContext";
import { useNavigate } from "react-router-dom";
import FadeLoader from "react-spinners/FadeLoader";

const apiurl = "http://10.218.105.130:8432"


function PureComputing() {
  const {
    systemType,
    setSystemType,
    nodes,
    setNodes,
    configFile,
    computeFile,
    setConfigFile,
    setComputeFile,
  } = useConfig();

  const [filled, setFilled] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const backClick = (e) => {
    navigate("/");
  };

  const uploadClick = async (e) => {
    if (filled) {
      var data = new FormData()
      data.append("config_file", configFile)
      data.append("compute_file", computeFile)

      console.log(data)

      setLoading(true)
      fetch(`${apiurl}/upload_scenario?nodes=${nodes}`, {
        method: 'POST',
        // headers:{
        //   'Content-Type':'multipart/form-data; boundary=--WebKitFormBoundaryfgtsKTYLsT7PNUVD',
        // },
        body: data
      })
      .then(response=>{
        if(response.status !== 200){
          throw new Error(`Request failed with status ${response.status}`);
        }
        return response.json()
      })
      .then(data =>{
        setLoading(false)
        console.log(data);
        alert("Upload Completed Successfully");

        setNodes(1);
        setSystemType(null);
        setComputeFile(null);
        setConfigFile(null);

        navigate("/");
      })
      .catch(error =>{
        setLoading(false)
        alert(error.message);
      })
    }
  };

  useEffect(()=>{
    if (systemType && nodes && configFile && computeFile) {
      setFilled(true);
    }
  },[systemType, nodes, configFile, computeFile])

  useEffect(()=>{
  },[loading])

  return (
    <div className="flex flex-col items-center justify-center w-full p-2">
      {loading && <div className="z-30 bg-app-dark w-full h-full absolute flex items-center justify-center opacity-60"><FadeLoader color="#F8C542" loading={loading} size={64} /></div>}
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
              file={computeFile}
              setFile={setComputeFile}
            />
            <FileUpload
              prompt="Configuration File (*.h)"
              file={configFile}
              setFile={setConfigFile}
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
            onClick={(e) => uploadClick(e)}
            className={`p-4 w-60 mt-8 self-end text-app-white rounded text-md ${filled && !loading?'bg-app-red hover:bg-app-yellow hover:text-app-red' : 'bg-app-lighter-dark'} mb-3 ease-in-out duration-300 font-semibold`}
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}

export default PureComputing;
