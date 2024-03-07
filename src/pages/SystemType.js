import React, { useEffect } from "react";
import ClusterButton from "../components/ClusterButton";

import { useConfig } from "../contexts/ConfigContext";
import { useNavigate } from "react-router-dom";

function SystemType() {
  const { systemType } = useConfig();
  const navigate = useNavigate();

  const nextClick = (e) => {
    systemType && systemType === "pure" && navigate("/purecomputing");
  };

  useEffect(() => {}, [systemType]);

  return (
    <div className="flex flex-col items-center justify-center w-full p-2">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-xl text-app-yellow text-center font-semibold mb-8">
          System Type
        </h1>
        <div className="bg-app-dark p-8 self-center rounded-xl">
          <div className="flex">
            <ClusterButton name="Pure Computing" type="pure" />
            <ClusterButton name="Hybrid Computing" type="hybrid" />
            <ClusterButton name="Edge Computing" type="edge" />
          </div>
        </div>
        <button
          onClick={(e) => nextClick(e)}
          className={`p-4 w-60 mt-8 self-end text-app-white rounded text-md ${
            systemType
              ? "bg-app-red hover:bg-app-yellow hover:text-app-red"
              : "bg-app-lighter-dark"
          } mb-3 ease-in-out duration-300 font-semibold`}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SystemType;
