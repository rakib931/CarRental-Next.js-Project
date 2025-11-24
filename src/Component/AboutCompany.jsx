import Image from "next/image";

export default function AboutCompany() {
  return (
    <div className="text-black my-15 max-w-[1100px] mx-auto md:flex gap-20">
      <div>
        <Image
          className="mx-auto"
          src="https://i.ibb.co/pBTHVCtB/Screenshot-2025-11-24-145007.png"
          alt="logo"
          width={900}
          height={400}
        />
      </div>
      <div>
        <h3 className="text-xl font-bold">About Company</h3>
        <h1 className="text-4xl font-extrabold py-5">
          You start the engine and <br /> you adventure begins
        </h1>
        <p className="text-gray-500 pt-2">
          Certain, but she, but shyness, why cottage? Guy, the put instrument,
          sir entreaties, affronting. Pretended exquisite, see cordially the
          you. Weeks quiet, do vexed or whose. Motionless, if no, to affronting
          imprudence, no precaution. My indulged, as disposal strongly attended.
        </p>
        <hr className="text-gray-400 my-2" />
        <div className="flex gap-10">
          <div className="text-center">
            <Image
              className="mx-auto"
              src="https://i.ibb.co/QhkxLMt/images.jpg"
              alt="logo"
              width={100}
              height={50}
            />
            <h1 className="text-5xl font-bold">20</h1>
            <p className="text-xl font-semibold text-gray-400">Car Types</p>
          </div>
          <div className="text-center">
            <Image
              className="mx-auto"
              src="https://i.ibb.co/XfnBWwJp/car-dealership-advance.png"
              alt="logo"
              width={100}
              height={50}
            />
            <h1 className="text-5xl font-bold">85</h1>
            <p className="text-xl font-semibold text-gray-400">
              Rental Outlets
            </p>
          </div>
          <div className="text-center">
            <Image
              className="mx-auto"
              src="https://i.ibb.co/gbk3J2GG/images.png"
              alt="logo"
              width={100}
              height={50}
            />
            <h1 className="text-5xl font-bold">75</h1>
            <p className="text-xl font-semibold text-gray-400">Repair Shop</p>
          </div>
        </div>
      </div>
    </div>
  );
}
