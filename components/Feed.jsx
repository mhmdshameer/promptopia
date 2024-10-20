"use client";

import { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout text-left">
      {data?.map((post) => (
        <PromptCard key={post.id} post={post} handleTagClick={handleTagClick} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);

  //search station
  const [searchText, setSearchText] = useState("");
  const [searchedResult, setSearchedResult] = useState([]);

  const filterPrompts = (searchText) => {
    const regex = new RegExp(searchText, "i");

    return posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    );
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    const searchResult = filterPrompts(e.target.value);
    setSearchedResult(searchResult);
  };

  const handleTagClick = (tagname) => {
    setSearchText(tagname);
    const searchResult = filterPrompts(tagname);
    setSearchedResult(searchResult);
  }

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("api/prompt");
      const data = await response.json();

      setPosts(data);
    };
    fetchPosts();
  }, []);
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search tag or username for prompts"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {searchText ? (
        <PromptCardList data={searchedResult} handleTagClick={handleTagClick} />
      ) : (
        <PromptCardList data={posts} handleTagClick={handleTagClick} />
      )}
    </section>
  );
};

export default Feed;
