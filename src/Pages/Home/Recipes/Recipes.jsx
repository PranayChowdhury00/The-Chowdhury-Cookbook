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
    <div id="recipes" className="mb-14 max-w-7xl mx-auto px-5">
      {/* Header */}
      <div className="mb-7 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3">
          Simple and Tasty Recipes
        </h1>
        <p className="text-gray-500 text-sm sm:text-base py-3">
          Keep it easy with these simple but delicious recipes. <br />
          From make-ahead lunches and midweek meals to fuss-free sides and
          moreish cakes.
        </p>
      </div>

      {/* Recipes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {recipes.map((recipe, index) => (
          <div key={index} className="card bg-sky-200 shadow-md rounded-lg overflow-hidden">
            <figure className="h-48 w-full">
              <img
                src={recipe?.image}
                alt={recipe?.name}
                className="h-full w-full object-cover"
              />
            </figure>
            <div className="card-body p-4">
              <h2 className="card-title text-lg sm:text-xl font-semibold">
                {recipe?.name}
              </h2>
              <p className="text-sm sm:text-base text-gray-600">
                {recipe?.description}
              </p>
              <div className="card-actions">
                <div className="w-full flex flex-wrap justify-between py-4 gap-4">
                  <p className="flex items-center text-gray-700 font-medium text-sm bg-gray-200 px-3 py-1 rounded-2xl">
                    <IoIosTime className="text-[18px] mr-1" /> {recipe?.time}
                  </p>
                  <p className="flex items-center text-gray-700 font-medium text-sm bg-gray-200 px-4 py-1 rounded-2xl">
                    <ImSpoonKnife className="mr-1" /> {recipe?.category || "General"}
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
