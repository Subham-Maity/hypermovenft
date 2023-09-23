import React from "react";
import HeaderMid from "../Header/HeaderMid/HeaderMid";
import Cards from "../Cards/Cards";
import { useTokens } from "../../store/tokens/hook";
// import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const tokenData = useTokens()
  // const navigate=useNavigate()

  return (
    <div>
      <HeaderMid />
      <Cards data={tokenData}/>
    </div>
  );
};

export default Dashboard;
