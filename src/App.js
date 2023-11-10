import axios from "axios";
import { useState, useEffect } from "react";
import "./style.css";
import Navbar from "./Navbar";

function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setData(response.data);
      setFilteredData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSearch = (searchTerm) => {
    const filteredResults = data.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             item.body.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setFilteredData(filteredResults);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="container">
        {filteredData.map((item) => (
          <div className="box" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
