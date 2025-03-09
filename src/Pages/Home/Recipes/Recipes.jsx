import React, { useEffect, useState } from "react";
import { ImSpoonKnife } from "react-icons/im";
import { IoIosTime } from "react-icons/io";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="mb-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-7 text-center">
        <h1 className="text-5xl font-bold mb-3">Simple and Tasty Recipes</h1>
        <p className="text-gray-500 py-3">
          Keep it easy with these simple but delicious recipes. <br />
          From make-ahead lunches and midweek meals to fuss-free sides and
          moreish cakes.
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-3 gap-5">
        {recipes.map((recipe, index) => (
          <div key={index} className="card bg-sky-200 shadow-sm">
            <figure className="h-48 w-full">
              <img
                src={recipe?.image}
                alt={recipe?.name}
                className="h-full w-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe?.name}</h2>
              <p>{recipe?.description}</p>
              <div className="card-actions">
                <div className="w-full flex justify-between py-4 gap-4">
                  <p className="flex gap-2 items-center text-gray-700 font-medium text-[16px] bg-gray-200 px-3 py-1 rounded-2xl">
                    <IoIosTime className="text-[18px]" /> {recipe?.time}
                  </p>
                  <p className="flex gap-2 items-center text-gray-700 font-medium text-[16px] bg-gray-200 px-4 py-1 rounded-2xl">
                    <ImSpoonKnife /> {recipe?.category || "General"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
