import React from "react";
const categories = [
  "all",
  "burger",
  "hot dog",
  "sandwich",
  "fries",
  "topping",
  "drink",
  "extra",
];
function CategoryList(props) {
  
  const {getCategory,chosencategory}=props

  return (
    <div className="bowl_category">
      <fieldset>
        <legend>Category</legend>
        <div className="sellect_option">
          {categories.map((category) => {
            return (
              <div key={category}>
                <label htmlFor={category}>{category}</label>
                <input
                  type="radio"
                  name="category"
                  onClick={getCategory}
                  defaultChecked={category===chosencategory}
                  value={category}
                  id={category}
                />
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
export default CategoryList;
