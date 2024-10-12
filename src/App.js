import React, { useState } from "react";
import { useEffect } from "react";
import Layout from "./components/layout/Layout";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SidebarLeft from "./components/sidebar/SidebarLeft";
import SidebarRight from "./components/sidebar/SidebarRight";
import Feed from "./components/feed/Feed";
import Form from "./components/form/Form";
import Post from "./components/post/Post";

const App = () => {
  const [posts, setPosts] = useState([1, 2, 3, 4]);

  const getRandomArray = () => {
    const length = Math.floor(Math.random() * 8 + 3);
    return Array.from({ length }, (_, i) => i + 1);
  };

  useEffect(() => {
    const randomArray = getRandomArray();
    setPosts(randomArray);
  }, []);

  return (
    <Layout>
      <Header />
      <Main>
        <SidebarLeft />
        <Feed>
          <Form />
          {posts.map((i) => (
            <Post key={i} />
          ))}
        </Feed>
        <SidebarRight />
      </Main>
    </Layout>
  );
};

export default App;
