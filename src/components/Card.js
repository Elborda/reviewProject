import { React, useState, useEffect } from "react";
import data from "../data";

export default function Card() {
  const [review, setReview] = useState(0);
  const [users, setUsers] = useState({});

  console.log(users);

  const { id, name, job, description, imageUrl } = data[review];

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  }, []);

  function plusRight() {
    setReview((prevState) => {
      if (review == data.length - 1) {
        return prevState - review;
      } else if (review != 3) {
        return prevState + 1;
      }
    });
  }

  function minusLeft() {
    setReview((prevState) => {
      if (review == 0) {
        return prevState + data.length - 1;
      } else if (review != 0) {
        return prevState - 1;
      }
    });
  }

  function randomReview() {
    const random = Math.floor(Math.random() * data.length);
    setReview(random);
  }

  return (
    <div className="flex--container">
      <div className="card--container">
        <div className="img--container">
          <img src={imageUrl}></img>
        </div>
        <div className="info--card">
          <h4>{name}</h4>
          <span>{job}</span>
          <p>{description}</p>
          <div className="fa--container">
            <i className="fa-solid fa-angle-left" onClick={minusLeft}></i>
            <i className="fa-solid fa-angle-right" onClick={plusRight}></i>
          </div>
          <button className="surprise-btn" onClick={randomReview}>
            Surprise Me
          </button>
        </div>
      </div>
    </div>
  );
}
