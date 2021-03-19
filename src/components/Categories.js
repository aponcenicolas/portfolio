import React from "react";

const Categories = ({ filter, categories }) => {
  return (
    <div className="buttons">
      {categories.map((category, item) => {
        return (
          <button
            type="button"
            className="btn-port"
            onClick={() => filter(category)}
            key={item}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
