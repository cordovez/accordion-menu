import data from "./data.json";
import "./App.css";
import MenuItem from "./Components/Menu-Item/index-menu-item";
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
  console.log(orderedCategories);
  // pass the data to the component and render structure
  return (
    <>
      <div className="wrapper">
        <div className="accordion">
          <MenuItem data={orderedCategories} />
        </div>
      </div>
    </>
  );
}

export default App;
