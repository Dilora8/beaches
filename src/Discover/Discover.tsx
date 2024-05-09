import img from "./../assets/unsplash_zR8ekoHsoPo.svg";
import img1 from "./../assets/unsplash_c-UJQKs8fFU.svg";
import img2 from "./../assets/unsplash_-o4PpHE9uG0.svg";

const Discover = () => {
  return (
    <div className="w-full h-[80vh]">
      <div className="flex justify-center items-center mb-8">
        <h1 className="text-4xl font-extrabold w-[30%] text-center">
          Discover The Most Attractive Places
        </h1>
      </div>
      <div className="flex justify-center items-center gap-10">
        <div
          style={{ backgroundImage: `url(${img})` }}
          className="w-[274px] h-[346px] relative"
        >
          <h3 className="text-white text-2xl font-medium absolute bottom-12 left-6">Pakis Beach</h3>
          <p className="text-white absolute bottom-6 left-6">Karawang, Indonesian</p>
        </div>
        <div
          style={{ backgroundImage: `url(${img1})` }}
          className="w-[316px] h-[400px] relative"
        >
          <h3 className="text-white text-2xl font-medium absolute bottom-12 left-6">Suluban Beach</h3>
          <p className="text-white absolute bottom-6 left-6">Bali, Indonesian</p>
        </div>
        <div
          style={{ backgroundImage: `url(${img2})` }}
          className="w-[274px] h-[346px] relative"
        >
          <h3 className="text-white text-2xl font-medium absolute bottom-12 left-6">Karimun Java</h3>
          <p className="text-white absolute bottom-6 left-6">Jawa Tengah, Indonesian</p>
        </div>
      </div>
    </div>
  );
};

export default Discover;
