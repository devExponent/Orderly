import { useContext } from "react";
import { FoodContext } from "../store/foodContext";

const Cart = () => {
  const { order } = useContext(FoodContext);
  return (
    <div>
      {order.map((orders) => (
        <div className="flex items-center justify-between py-2 border-b last:border-b-0">
          <div className="flex flex-col">
            <p className="font-medium">{orders.name}</p>
            <p className="text-gray-500">${orders.price}</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300">
              -
            </button>
            <span className="w-4 text-center">{0}</span>
            <button className="w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full hover:bg-gray-300">
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;
