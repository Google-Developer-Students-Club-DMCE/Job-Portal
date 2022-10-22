import "./App.css";
import Admin from "./Pages/Admin";
import User from "./Pages/User";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [allJobs, setAllJobs] = useState([]);
  const [fetchData, setFetchData] = useState(false);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/getpost/")
      .then((res) => {
        setAllJobs(res.data);
      })
      .catch((e) => console.log(e));
  }, [fetchData]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Navigate to="/user" />} />
          <Route
            path="/admin"
            element={
              <Admin setAllJobs={setAllJobs} setFetchData={setFetchData} />
            }
          />
          <Route path="/user" element={<User allJobs={allJobs} />} />
          <Route path="*" element={<User />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
