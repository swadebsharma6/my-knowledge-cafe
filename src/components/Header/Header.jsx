import profile from "../../assets/profile.png";

const Header = () => {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center p-4 border-b-2">
        <h2 className=" text-3xl font-bold text-blue-600">Knowledge Cafe</h2>
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default Header;
