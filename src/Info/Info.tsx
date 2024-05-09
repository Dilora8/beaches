import img from "./../assets/unsplash_4UEA3GuXwMw 1.svg";
import img1 from "./../assets/camille-minouflet-ggkrG9EfxXM-unsplash 1.svg";

const Info = () => {
  return (
    <div className="w-[90%] h-[80vh] flex mx-auto">
      <div className="mt-36 w-[45%] ml-auto">
        <div className="flex justify-center items-center">
          <img src={img} alt="" className="pt-10 pr-6" />
          <img src={img1} alt="" className="pb-10" />
        </div>
      </div>
      <div className="w-[45%] gap-9 flex flex-col justify-center items-start pb-32 mr-auto">
        <h1 className="text-4xl w-[70%]">More information <br/> about the best beachs</h1>
        <p className="text-textColor text-lg w-[82%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          otestate. Quae omnia in nostra sententia, pursuit
        </p>
        <div>
          {" "}
          <button className="text-white bg-primary px-[18px] py-[10px] rounded-lg">
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Info;
