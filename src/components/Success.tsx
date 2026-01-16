const Success = () => {
  return (
    <div>
      <div className="flex flex-col gap-3">
        <h1 className="font-bold text-2xl">Success!</h1>
        <p className="text-gray-700">Your order was submitted successfully.</p>
        <p className="text-gray-700">
          We will get back to you with more details via email within the next
          few minutes.
        </p>
      </div>
      <div className="text-right">
        <button className="bg-amber-300 px-5 py-2 rounded-lg my-3">Okay</button>
      </div>
    </div>
  );
};

export default Success;
