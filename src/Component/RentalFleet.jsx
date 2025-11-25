import Image from "next/image";
export default function Home() {
  return (
    <div className="text-black mt-20">
      <h3 className="text-center text-3xl font-bold">Plan your Trip now</h3>
      <h1 className="text-center text-5xl font-bold">Our rental fleet</h1>
      <p className="text-center text-gray-500 py-5">
        Experience premium travel with our exceptional rental fleet. Each
        vehicle is carefully selected and <br /> maintained to provide unmatched
        comfort and style.
      </p>

      <Image
        className="mx-auto"
        src="https://i.ibb.co.com/RTGtJ9cF/Screenshot-2025-10-27-183146.png"
        alt="logo"
        width={900}
        height={400}
      />
    </div>
  );
}
