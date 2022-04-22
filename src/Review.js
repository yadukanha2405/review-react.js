import { useState } from "react";
import person from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = person[index];

  const checkNumber = (number) => {
    if (number > person.length - 1) {
      return 0;
    }
    if (number < 0) {
      return person.length - 1;
    }
    return number;
  };

  const prevPerson = () => {
    setIndex(checkNumber(index - 1));
  };
  const nextPerson = () => {
    setIndex(checkNumber(index + 1));
  };

  const ramdonSelect = () => {
    let select = Math.floor(Math.random() * person.length - 1);
    if (select === index) {
      select = index + 1;
    }
    setIndex(checkNumber(index + select));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author"> {name} </h4>
      <p className="job"> {job} </p>
      <p className="info"> {text} </p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={ramdonSelect}>
        Surprice Me
      </button>
    </article>
  );
}
