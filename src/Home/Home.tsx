import NavBar from "./NavBar/NavBar";
import background from "./../assets/Hero1.svg";
import Text from "./Text/Text";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}
      className="w-full h-screen"
    >
      <NavBar />
      <Text />
    </div>
  );
};

export default Home;
