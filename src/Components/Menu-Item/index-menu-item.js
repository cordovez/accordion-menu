import "./menu-item.css";
import { useState } from "react";

const MenuItem = ({ data }) => {
  const [selected, setSelected] = useState(null);

  // toggles to null once selected
  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return data.map((obj, i) => {
    return (
      <>
        <div className="item" key={obj._id} onClick={() => toggle(i)}>
          <div className="category">
            <h2 key={obj.name}>{obj.name} </h2>
            <span>{selected === i ? "-" : "+"}</span>
          </div>
        </div>
        <div
          className={selected === i ? "subCategory show" : "subCategory"}
          key={i}
        >
          {obj.subCategories.map((sub, i) => {
            return <p>{sub.name}</p>;
          })}
        </div>
      </>
    );
  });
};

export default MenuItem;
