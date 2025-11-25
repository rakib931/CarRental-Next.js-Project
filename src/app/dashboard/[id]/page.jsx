
import Image from "next/image";

export default async function DasDetails({ params }) {
  const { id } = await params;
  const data = await fetch(`http://localhost:5000/my-vehicals/${id}`);
  const vehicle = await data.json();


  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl overflow-hidden flex flex-col md:flex-row my-6 text-black">
      {/* Car Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-auto">
        <Image
          src={vehicle.carPhoto}
          alt={vehicle.carName}
          layout="fill"
          objectFit="cover"
          className="rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none"
        />
      </div>

      {/* Car Details */}
      <div className="p-6 w-full md:w-1/2 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold mb-2">{vehicle.carName}</h2>
          <p className="text-gray-700 text-sm mb-2">{vehicle.shortDecription}</p>
          <p className="text-gray-600 text-sm mb-4">{vehicle.fullDecription}</p>
          <p className="text-gray-800 font-semibold mb-2">Brand: {vehicle.brand}</p>
          <p className="text-gray-800 font-semibold mb-2">Price: {vehicle.price} BDT/Day</p>
          <p className="text-gray-800 font-semibold mb-2">Contact: {vehicle.number}</p>
          <p className="text-gray-800 font-semibold mb-2">Email: {vehicle.email}</p>
        </div>
        <p className="text-gray-500 text-xs mt-4">ID: {vehicle._id}</p>
      </div>
    </div>
  );
}
