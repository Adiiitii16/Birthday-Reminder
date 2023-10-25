import React, { useEffect, useState } from "react";
import "./index.css";

export default function Data() {
  const [data, setData] = useState([
    {
      img:"data:image/jpeg;base64,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",
      name:"Virat Kohli",
      age: 34,
    },
    {
      img:"data:image/jpeg;base64,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",
      name:"M.S.Dhoni",
      age: 43,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Shah_Rukh_Khan_graces_the_launch_of_the_new_Santro.jpg",
      name: "Sharukh Khan",
      age: 57,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Akshay_Kumar.jpg/440px-Akshay_Kumar.jpg",
      name: "Akshay Kumar",
      age: 55,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg/440px-Alia_Bhatt_at_Berlinale_2022_Ausschnitt.jpg",
      name: "Alia Bhatt",
      age: 30,
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg/440px-Shraddha_Kapoor_promoting_Street_Dancer_3D.jpg",
      name: "Shraddha Kapoor",
      age: 28,
    },
  ]);

  const handleClick = () => {
    setData([]);
  };

  return (
    <div className="Profile">
      <section className="Card">
        <h3>Today Birthday {data.length} 😀</h3>
        {data.map((e, i) => {
          return (
            <div className="cont" key={i}>
              <img src={e.img}></img>
              <div className="sub-cont">
                <label>{e.name}</label>
                <p>{e.age}</p>
              </div>
            </div>
          );
        })}
        <button onClick={handleClick}>Clear</button>
      </section>
    </div>
  );
}
