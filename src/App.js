import React from "react";
import "./styles.css";
import { useState } from "react";

const goodbook = {
  Polity: [
    { name: "Indian Polity by M Laxmikant", rating: "5/5", about: "This book itself need no introduction. It is one of the most fomous and comprehensive book on subject of indian polity. "},
    { name: "Indian Governance by M Laxmikant", rating: "4.5/5", about: "This book is extremely relevant for those interested in understanding the evolving dynamics of governance in the country" },
    { name: "Indian Constitution by D D Basu", rating: "4.5/5", about: "This book gives a systemic exposition of the constitutional document, arranged under logical chapters and headings" }
  ],
  International_Relation: [
    { name: "Globalization of World Politics by smith & Bylis", rating: "5/5", about: "This book is the best selling introduction to international relation, offering the most comprehensive coverage of the key theories and global issues in world politics. "},
    { name: "Global Politics by Andrew Hywood", rating: "5/5", about: "This book is a major new introduction to international relation and global politics." },
    { name: "Clash Of Civilization by Samuel P Huntington", rating: "4/5", about: "Samuel P. Hauntington, one of the world's most influential thinkers, argues in this seminal book that conflicts between different cultural civilization are the greatest threat to world peace. " }
  ],
  History: [
    {
      name: "India's Struggle for independance:1857-1947 by Bipin Chandra",
      rating: "4.5/5", about: "This book is your go to book for an in-depth and detailed overview on Indian independance movement."
    },
    { name: "Ancient India: From the Stone Age to the 12th Century by Upinder Singh ", rating: "4/5", about: "This book describes the original sources such  as ancient texts, artefacts, inscriptions and coins." },
    {name: "Medievel India by satish chandra", rating: "3.5/5", about: "In this book author explaines concept like mughol empire and about medieval india." }
  ]
};

export default function App() {
  const [selectGenre, setGenre] = useState("History");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>📒GoodBooks📖</h1>
      <p>
        Checkout my favorite books of below genre. Select a genre to know my
        favorite books of that genre.
      </p>
      <div>
        {Object.keys(goodbook).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#FEE2E2",
              borderRadius: "0.5rem",
              padding: "0.5rem 1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div id="div" style={{ textAlign: "centre" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {goodbook[selectGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "3px solid #FEE2E2",
                width: "50%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              {""}
              <div style={{ fontSize: "larger", textAlign: "center" }}>
                {book.name}
              </div>
              <div style={{ fontSize: "smaller" }}>{book.rating}</div>
              <div style={{ fontSize: "100%" }}>{book.about}</div>
              
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
