import twit from "./../../assets/icon/twitter.svg";
import face from "./../../assets/icon/facebook.svg";
import insta from "./../../assets/icon/instagram.svg";

const Text = () => {
  return (
    <div className="flex flex-col justify-between items-center w-[60%] h-[15vh] mx-auto mt-16">
      <div className="flex justify-center items-center flex-col pt-24 pb-12 gap-4">
        <p className="text-2xl text-white">Discover your place</p>
        <h1 className="text-5xl text-white">Explore The Best Beautiful Beachs</h1>
      </div>
      <div className="flex gap-8 justify-center items-center flex-col">
        <button className="bg-primary text-white px-[18px] py-[10px] rounded-lg">Explore</button>
        <div className="flex gap-11 justify-center items-center">
          <img src={twit} alt="twitter" />
          <img src={face} alt="facebook" />
          <img src={insta} alt="instagram" />
        </div>
      </div>
    </div>
  );
};

export default Text;
