// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import News from './pages/News/News';

import mockData from './MOCK_DATA.json';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  //Fetch data

  useEffect(() => {
    // const getData = async () => {
    //   const result = await axios(
    //     'https://61a27a4b014e1900176de951.mockapi.io/category'
    //   );
    //   setData(result.data);
    // };
    // getData();
    setData(mockData);
  }, []);

  //Paginate

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              paginate={paginate}
              currentPage={currentPage}
              data={currentPosts}
              postsPerPage={postsPerPage}
              totalPosts={data.length}
            />
          }
        />
        <Route path="news" element={<News />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
