// import { useContext } from "react"
import { use } from "react";
import { FoodContext } from "../store/foodContext";

const Meal = () => {
  const { foodStore } = use(FoodContext);
  return (
    <section className="w-10/12 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {foodStore.map((meal) => (
          <div
            key={meal.id}
            className="rounded-3xl border border-gray-300 overflow-hidden"
          >
            <img
              src={meal.image}
              alt={meal.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-3">
              <p className="text-2xl font-bold rounded-3xl">{meal.name}</p>
              <p>{meal.description}</p>
              <p>${meal.price}</p>
              <button className="bg-amber-300 p-3 rounded-lg my-2">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Meal;
