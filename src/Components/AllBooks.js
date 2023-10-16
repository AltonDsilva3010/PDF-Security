import React from "react";

const AllBooks = ({ setCID }) => {
  return (
    <div className="all-books">
      <h3>Select Book</h3>
      <div>
        <button
          onClick={() =>
            setCID("QmT3uZE7ddfjrxR7UzjGmL4JzC1U6xYaRtJiXUXzUCdCfP")
          }
        >
          Book 1
        </button>
        <button
          onClick={() =>
            setCID("QmZmdtexNQFuBVNQyF4ZbmYB7yK77uYN97izoE1yyF1QvL")
          }
        >
          Book 2
        </button>
      </div>
    </div>
  );
};

export default AllBooks;
