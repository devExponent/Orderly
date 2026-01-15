import Input from "./Inputs";
import { FoodContext } from "../store/foodContext";
import { use } from "react";

const handleOrder = () => {
  alert("done");
};

const Form = () => {
  const { totalPrice } = use(FoodContext);
  return (
    <div>
      <form action={handleOrder}>
        <p className="font-bold my-3">Checkout</p>
        <p className="font-bold">Total Amount: ${totalPrice.toFixed(2)}</p>
        <Input label="Name" id="Name" type="text" required />
        <Input label="Email" id="Email" type="email" required />
        <Input label="Street" id="Street" type="text" required />
        <Input label="Postal Code" id="Postal-Code" type="number" required />
        <Input label="City" id="City" type="text" required />

        <div className="flex flex-row justify-end items-center gap-3 my-5">
          <button type="reset">Close</button>
          <button className="bg-amber-300 p-2 rounded-lg" type="submit">
            Sumbit Order
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
