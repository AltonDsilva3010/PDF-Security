import React from "react";
import GetIPFSHash from "./GetIPFSHash";
import "./Books.css";

const Books = ({ book, index }) => {
  const { title, author, isbn, price, ipfs } = book;
  return (
    <div className="book">
      <h2>{title}</h2>
      <p>{author}</p>
      <h2>{price.toString() / 1000000000000000000} ETH</h2>
      <button>Request Access</button>
    </div>
  );
};

export default Books;
