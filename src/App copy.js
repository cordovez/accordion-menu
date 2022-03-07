import data from "./data.json";
import { useState } from "react";
import "./App.css";
function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  let mainCategories = [];
  let subCategories = [];

  console.log(mainCategories);
  console.log(subCategories);

  return (
    <>
      {data.map((each, index) => {
        if (!each.parent_id && !each.is_special) {
          mainCategories.push(each);
        } else if (each.parent_id && !each.is_special) {
          subCategories.push(each);
        }
      })}

      {subCategories.map((each) => {
        for (let category of mainCategories) {
          if (category._id === each.parent_id) {
            if (!category.subCategories) {
              category.subCategories = [];
            }
            category.subCategories.push(each);
          }
        }
      })}
      <div className="wrapper">
        <div className="accordion">
          {mainCategories.map((category, i) => (
            <>
              <div
                className="item"
                key={category.name}
                onClick={() => toggle(i)}
              >
                <h2 className="category" key={category._id}>
                  {category.name}
                </h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div
                className={selected === i ? "subCategory show" : "subCategory"}
                key={category.subCategories._id}
              >
                {category.subCategories.map((sub, index) => (
                  <p key={category.subCategories.name}>{sub.name}</p>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
