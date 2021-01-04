import React from "react";

const Book = (props) => {
  const { img, title, author } = props.book;

  const clickHandler = () => {
    alert("button clicked");
  };
  return (
    <article className="book">
      <img onMouseOver={() => console.log({ title })} src={img} alt="" />
      <h1 onClick={() => alert(`title clicked --> ${title}`)}>{title}</h1>
      <h4>{author.toUpperCase()}</h4>
      <button type="button" onClick={clickHandler}>
        This is a book
      </button>
    </article>
  );
};

export default Book;
