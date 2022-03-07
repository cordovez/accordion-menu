import data from "./data.json";
// import { useState } from "react";
import "./App.css";
function App() {
  // Find non-special category objects ...
  let categories = data.filter((obj) => {
    return !obj.parent_id && !obj.is_special;
  });
  // Find non-special subcategory objects
  let subCategories = data.filter((obj) => {
    return obj.parent_id && !obj.is_special;
  });

  // create an empty container for them
  let orderedCategories = [];

  // re-arrange them
  categories.forEach((category) => {
    orderedCategories.push(category);
    if (!category.subCategories) {
      category.subCategories = [];
      subCategories.forEach((subCategory) => {
        if (category._id === subCategory.parent_id) {
          category.subCategories.push(subCategory);
        }
      });
    }
  });
  console.log(categories);
  return null;
}

export default App;
