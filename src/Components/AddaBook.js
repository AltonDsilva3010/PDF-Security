import React, { useState, useEffect } from "react";
import "./AddaBook.css";

const AddaBook = ({ state }) => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    isbn: -1,
    price: 0,
    pdfFile: null,
  });

  const onChange = (e) => {
    return setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBookInfo({ ...bookInfo, pdfFile: file });
  };

  const addBook = async () => {
    console.log("inseid function 2");
    const { contract } = state;
    if (contract) {
      const result = await contract.addBook(
        "Book Title",
        "David",
        123,
        1,
        "ipfshash"
      );
      console.log(result);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      addBook();
    } catch (error) {
      console.log(error);
    }
    // setBookInfo({
    //   title: "",
    //   author: "",
    //   pdfFile: null,
    // });
  };

  return (
    <div className="add-book-form">
      <h2>Add a Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={bookInfo.title}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={bookInfo.author}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="number"
            id="isbn"
            name="isbn"
            value={bookInfo.isbn}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={bookInfo.price}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="pdfFile">PDF File:</label>
          <input
            type="file"
            id="pdfFile"
            name="pdfFile"
            accept=".pdf"
            onChange={handleFileChange}
            required
          />
        </div>
        <div>
          <button type="submit">Add Book</button>
        </div>
      </form>
    </div>
  );
};

export default AddaBook;
