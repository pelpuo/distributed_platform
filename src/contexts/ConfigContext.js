import React, {
  createContext,
  useContext,
  useState,
} from "react";

const ConfigContext = createContext();

export function useConfig() {
  return useContext(ConfigContext);
}

export function ConfigProvider({ children }) {
  const [systemType, setSystemType] = useState();
  const [nodes, setNodes] = useState(1);
  const [configFile, setConfigFile] = useState();
  const [computeFile, setComputeFile] = useState();

  const value = {
    systemType,
    nodes,
    configFile,
    computeFile,
    setSystemType,
    setNodes,
    setConfigFile,
    setComputeFile,
  };

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
}

export default ConfigContext;
