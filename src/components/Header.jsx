import { images } from "../assets";
const Header = () => {
  return (
    <>
      <nav className="bg-navbg rounded-full mt-4 px-8 py-3 flex justify-between items-center">
        <div className="flex items-center ">
          <div className="text-primary mr-2">
            <img src={images.logo} />
          </div>
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Dine</span>Out
          </h1>
        </div>
        <div className="flex items-center">
          <img className="w-32 h-8" src={images.userIcon} />
        </div>
      </nav>
    </>
  );
};

export default Header;
