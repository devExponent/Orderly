import Logo from "/logo.jpg";

const Header = () => {
  return (
    <section className="my-10">
      <div className="flex justify-around items-center">
        <div className="flex items-center gap-3">
          <img
            src={Logo}
            alt="logo"
            className="h-20 rounded-full p-2 border-2 border-amber-300 "
          />

          <p className="font-extrabold text-amber-200 text-3xl">Orderly</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-extrabold text-amber-200 text-3xl">Cart</p>

          <p className="font-extrabold text-amber-200 text-3xl">(0)</p>
        </div>
      </div>
    </section>
  );
};

export default Header;
