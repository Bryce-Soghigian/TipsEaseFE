import React, { useEffect, useState, useContext } from "react";
import { TokenContext } from "../Context/Contexts";

import axios from "axios";

import styled from "styled-components";
import AxiosWithAuth from "./AxiosWithAuth";
import WorkersGrid from "./Workers/WorkersGrid";
import WorkersDropdown from "./Workers/WorkerDropdown";

//BTW Sap stands for starter app. Is a personal naming convention. Not industry Standard In ANY way.
const Sap = styled.div`
  font-family: sans-serif;
  text-align: center;
  margin: 0;
  background: linear-gradient(#7f8688, #f2f7f4);

  // background-image: url("https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80");
  // background-size: cover;
  // background-position: center center;
  // background-repeat: none;
`;

const CustomerPage = props => {
  const { token, setToken } = useContext(TokenContext);
  localStorage.getItem("token");
  const [data, setData] = useState({});
  const [filter,setFilter] = useState('all')

  localStorage.getItem("token");
  
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    console.log("test");
  }, [token, setToken]);
  const [secretData, setSecretData] = useState([]);
  function setRestricted(res) {
    setSecretData(res);
  }

  useEffect(() => {
    AxiosWithAuth()
      .get("http://localhost:4000/restricted/data")
      .then(res => {
        console.log(res);
        setRestricted(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  const fetchData = () => {
    axios
      .get(`http://localhost:4000/api/restricted/data`)
      .then(res => {
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  console.log("token", "does context get this");
  useEffect(fetchData, [localStorage.getItem("token")]);
  console.log(data, "data");
  //export const TokenContext = createContext();
  
  return (
    <Sap className="App">
      <main>
        <WorkersDropdown setFilter={setFilter} />
        <WorkersGrid workerList={props.workerList} filter={filter}/>
      </main>
      {/* <h1>Private Route</h1> */}
      {/* <WorkerType/> */}
    </Sap>
  );
};

export default CustomerPage;
