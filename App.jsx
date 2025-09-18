import React, { useState, useEffect } from "react";
import "./styles.css";
const API_URL = "https://make-a-wish-book.onrender.com";

function App() {
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState("");

  useEffect(() => {
    fetch(`${API_URL}/wishes`)
      .then(res => res.json())
      .then(data => setWishes(data))
      .catch(err => console.error(err));
  }, []);

  const addWish = async () => {
    if (!newWish.trim()) return;
    const res = await fetch(`${API_URL}/wishes`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: newWish })
    });
    const data = await res.json();
    setWishes([...wishes, data]);
    setNewWish("");
  };

  return (
    <div className="book">
      <div className="cover">
        <h1>✨ Make-A-Wish Book ✨</h1>
        <p>Your wish will come true 🌟</p>
        <div className="princess-illustration">
          <img src="/princess.svg" alt="Princess" />
        </div>
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="glitter"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="pages">
        {wishes.map((wish, i) => (
          <div className="page" key={i}>
            <p>{wish.text}</p>
            <small>{wish.timestamp}</small>
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          type="text"
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
          placeholder="Type your magical wish..."
        />
        <button onClick={addWish}>Add Wish</button>
      </div>
    </div>
  );
}

export default App;
<div className="pages">
  {wishes.map((wish, i) => (
    <div
      className={`page ${i % 2 === 0 ? "left-page" : "right-page"}`}
      key={i}
    >
      <p>{wish.text}</p>
      <small>{wish.timestamp}</small>
    </div>
  ))}
</div>

       
         