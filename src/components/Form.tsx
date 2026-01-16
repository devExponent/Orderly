import Input from "./Inputs";
import { FoodContext } from "../store/foodContext";
import { useContext } from "react";
import { useActionState } from "react";

const handleOrder = (prevState, formData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const street = formData.get("street");
  const postalCode = formData.get("postal-code");
  const city = formData.get("city");

  const errors = [];

  if (!name.trim()) {
    errors.push("Name can not be empty");
  }
  if (!email.includes("@")) {
    errors.push("enter a valid email address");
  }
  if (!street.trim()) {
    errors.push("Street can not be empty");
  }

  if (!postalCode.trim() && postalCode.trim().length < 4) {
    errors.push("Enter a valid postal code");
  }
  if (!city.trim()) {
    errors.push("City is empty");
  }

  if (errors.length > 0) {
    return {
      errors,
      enteredValues: {
        name,
        email,
        street,
        postalCode,
        city,
      },
    };
  } else {
    return { errors: null };
  }
};

const Form = () => {
  const [orderSubmit, orderAction, pending] = useActionState(handleOrder, {
    errors: null,
  });
  const { totalPrice, CancelOrder } = useContext(FoodContext);
  return (
    <div>
      <form action={orderAction}>
        <p className="font-bold my-3">Checkout</p>
        <p className="font-bold">Total Amount: ${totalPrice.toFixed(2)}</p>
        <Input
          label="Name"
          id="Name"
          type="text"
          name="name"
          defaultValue={orderSubmit.enteredValues?.name}
        />
        <Input
          label="Email"
          id="Email"
          type="email"
          name="email"
          defaultValue={orderSubmit.enteredValues?.email}
        />
        <Input
          label="Street"
          id="Street"
          type="text"
          name="street"
          defaultValue={orderSubmit.enteredValues?.street}
        />
        <Input
          label="Postal Code"
          id="Postal-Code"
          type="number"
          name="postal-code"
          defaultValue={orderSubmit.enteredValues?.postalCode}
        />
        <Input
          label="City"
          id="City"
          type="text"
          name="city"
          defaultValue={orderSubmit.enteredValues?.city}
        />
        <>
          {orderSubmit.errors && (
            <ul className="bg-[#3e3434] p-3 rounded-xl">
              {orderSubmit.errors.map((errors) => (
                <li key={errors} className="text-red-500">
                  {errors}
                </li>
              ))}
            </ul>
          )}
        </>

        <div className="flex flex-row justify-end items-center gap-3 my-5">
          <button type="reset" onClick={CancelOrder}>
            Close
          </button>
          <button
            className="bg-amber-300 p-2 rounded-lg"
            type="submit"
            disabled={pending}
          >
            {pending ? "Submitting Order" : "Order Now"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
