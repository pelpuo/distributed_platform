import React, { useEffect } from "react";
import { HiChip } from "react-icons/hi";
import { RiRouterFill } from "react-icons/ri";
import { MdOutlineDeveloperBoard } from "react-icons/md";

import { useConfig } from "../contexts/ConfigContext";

function ClusterButton(props) {
  const { systemType, setSystemType } = useConfig();

  const handleChange = (e) => {
    setSystemType(props.type);
  };

  useEffect(() => {}, [systemType]);

  return (
    <div
      className="bg-app-lighter-dark m-4 p-4 rounded-xl drop-shadow-xl"
      onClick={(e) => handleChange(e)}
    >
      <div
        className={
          props.type === systemType
            ? "flex flex-col items-center rounded-xl px-6 py-8 border-2 border-app-yellow"
            : "flex flex-col items-center border-2 border-app-lighter-dark rounded-xl px-6 py-8 hover:border-app-yellow ease-in-out duration-300"
        }
      >
        {props.type === "pure" && (
          <HiChip
            size={72}
            color={props.type === systemType ? "#F8C542" : "#949393"}
          />
        )}
        {props.type === "hybrid" && (
          <MdOutlineDeveloperBoard
            size={72}
            color={props.type === systemType ? "#F8C542" : "#949393"}
          />
        )}
        {props.type === "edge" && (
          <RiRouterFill
            size={72}
            color={props.type === systemType ? "#F8C542" : "#949393"}
          />
        )}
        <h1
          className={
            props.type === systemType
              ? "text-app-yellow mt-2 text-center"
              : "text-app-gray mt-2 text-center"
          }
        >
          {props.name}
        </h1>
      </div>
    </div>
  );
}

export default ClusterButton;
