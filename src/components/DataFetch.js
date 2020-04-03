import React, { useEffect, useState } from "react";

export default function DataFetch() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data);
      setLoading(false);
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  if (loading) return <div>로딩 중 입니다...</div>;
  if (error) return <div>에러가 발생했습니다!</div>;
  if (posts)
    return posts.map(post => (
      <div className={`post-${post.id}`} key={post.id}>
        {post.userId}, {post.id}, {post.title}, {post.body}
      </div>
    ));
}
