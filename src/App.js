import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';

const App = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(12);

  //Fetch data

  useEffect(() => {
    const getData = async () => {
      const result = await axios(
        'https://61a27a4b014e1900176de951.mockapi.io/category'
      );
      setData(result.data);
    };
    getData();
  }, []);

  //Paginate

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Header />
      <Home
        paginate={paginate}
        currentPage={currentPage}
        data={currentPosts}
        postsPerPage={postsPerPage}
        totalPosts={data.length}
      />
      <Footer />
    </div>
  );
};

export default App;
