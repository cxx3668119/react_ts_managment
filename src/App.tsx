import React from "react"
import { useState } from "react";
import { Button } from "antd";
import { ArrowUpOutlined } from "@ant-design/icons";
import { useRoutes, Link } from "react-router-dom";
import router from "./router";
function App() {
  const [count, setCount] = useState(0);
  const outlet = useRoutes(router);
  return <div className="App">{outlet}</div>;
}

export default App;
