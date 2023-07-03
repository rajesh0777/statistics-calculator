import React, { useState } from "react";
import Calcution from "./Calcution";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Nav";
import FileReading from "./FileReading";

const Input = () => {
  const [list, setList] = useState([]);
  // const [x,setX] = useState();
  // const [y,setY] = useState();

  const appendList = (x, y) => {
    
    var z = {
      ageList: x,
      personList: parseInt(y),
    };

    setList([...list, z]);
  };



  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Header appendList={appendList} />} />
          <Route path="/file" element={<FileReading setList={setList} />} />
        </Routes>
      </BrowserRouter>

      <br />
      <hr />
      <table className="table1">
  <thead>
    <tr>
      <th>Age</th>
      <th>Number of Persons</th>
    </tr>
  </thead>
  <tbody>
    {list.length > 0
      ? list.map((item, index) => (
          <tr key={index}>
            <td>{item.ageList}</td>
            <td>{item.personList}</td>
          </tr>
        ))
      : null}
  </tbody>
</table>

      {list.length > 0 ? <Calcution list={list} /> : <h2>No Data</h2>}
    </>
  );
};

export default Input;
