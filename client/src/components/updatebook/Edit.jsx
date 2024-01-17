import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "../addbook/add.css";
import toast from "react-hot-toast";
import "./Edit.css";

const Edit = () => {
  const books = {
    name: "",
    code: 0,
    authName: "",
    pubName: "",
    price: 0,
    link: "",
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(books);

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
    console.log(book);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/getone/${id}`)
      .then((response) => {
        setBook(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .put(`https://backendstserver.onrender.com/api/update/${id}`, book)
      .then((response) => {
        toast.success("Book updated successfully", { position: "top-right" });
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex-col justify-center items-center ">
      <div class="area h-[800px]">
        <ul class="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div class="login-box">
        <Link to={"/"} className="text-black underline text-lg">
          Back
        </Link>
        <h2 className="underline mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-4xl uppercase">
          Update Book
        </h2>
        <form className="" onSubmit={submitForm}>
          <div class="user-box">
            <input
              type="text"
              value={book.name}
              onChange={inputChangeHandler}
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Name of the book"
            />
            <label htmlFor="name">Name</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.imgLink}
              onChange={inputChangeHandler}
              id="imgLink"
              name="imgLink"
              autoComplete="off"
              placeholder="Name of the book"
            />
            <label htmlFor="imgLink">Image Link</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.category}
              onChange={inputChangeHandler}
              id="category"
              name="category"
              autoComplete="off"
              placeholder="Name of the book"
            />
            <label htmlFor="category">Category</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.authName}
              onChange={inputChangeHandler}
              id="authName"
              name="authName"
              autoComplete="off"
              placeholder="Author Name"
            />
            <label htmlFor="authName">Author's Name</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.pubName}
              onChange={inputChangeHandler}
              id="pubName"
              name="pubName"
              autoComplete="off"
              placeholder="Publisher Name"
            />
            <label htmlFor="pubName">Publisher's Name</label>
          </div>
          <div class="user-box">
            <input
              type="Number"
              value={book.price}
              onChange={inputChangeHandler}
              id="price"
              name="price"
              autoComplete="off"
              placeholder="Book Price"
            />
            <label htmlFor="price">Price (In Rs.)</label>
          </div>
          <div class="user-box">
            <input
              type="text"
              value={book.buyLink}
              onChange={inputChangeHandler}
              id="buyLink"
              name="buyLink"
              autoComplete="off"
              placeholder="Link to Buy"
            />
            <label htmlFor="buyLink">Link to Buy</label>
          </div>
          <div className="inputGroup">
            <button type="submit" className="bg-black">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              UPDATE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Edit;
