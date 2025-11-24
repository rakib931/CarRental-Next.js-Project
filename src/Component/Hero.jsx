import Image from "next/image";
export default function Hero() {
  return (
    <div className="bg-pink-50">
      <div className="md:flex justify-between px-5  md:w-[1100px] mx-auto py-28 text-black ">
        <div>
          <p className="text-2xl font-bold">Plan your trip now </p>
          <h1 className="text-5xl font-bold">
            Save <span className="text-[#ff4c32] ">big</span> with our car
            rental
          </h1>
          <p className="text-gray-500 font-semibold py-6">
            To contribute to positive change and achive our sustainability{" "}
            <br /> goals with many extraordinary
          </p>
          <div className="flex gap-5">
            <button className="btn btn-outline no-outline bg-[#ff4c32] text-white">
              Book Ride{" "}
            </button>
            <button className="btn bg-black text-white">Learn More</button>
          </div>
        </div>
        <div>
          <Image
            width={500}
            height={350}
            className="my-5"
            src="https://i.ibb.co/LDd2PH1N/polo-png.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
