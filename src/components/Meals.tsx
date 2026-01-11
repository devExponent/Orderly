// import { useContext } from "react"
import { use } from "react";
import { FoodContext } from "../store/foodContext";

const Meal = () => {
  const { foodStore } = use(FoodContext);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      {foodStore.map((meal) => (
        <div key={meal.id}>
          <img
            src={meal.image}
            alt={meal.name}
            className="w-full h-48 object-cover"
          />
          <p>{meal.name}</p>
          <p>{meal.description}</p>
          <p>{meal.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Meal;
