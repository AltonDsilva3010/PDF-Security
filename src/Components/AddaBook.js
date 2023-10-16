import React, { useState, useEffect } from "react";
import "./AddaBook.css";

const AddaBook = () => {
  const [bookInfo, setBookInfo] = useState({
    title: "",
    author: "",
    pdfFile: null,
  });

  const onChange = (e) => {
    return setBookInfo({ ...bookInfo, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBookInfo({ ...bookInfo, pdfFile: file });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookInfo);
    setBookInfo({
      title: "",
      author: "",
      pdfFile: null,
    });
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
