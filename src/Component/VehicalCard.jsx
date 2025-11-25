import Image from "next/image";
import Link from "next/link";

export default async function VehicalCard({ vehicle }) {
  return (
    <div className="text-black max-w-sm bg-white rounded-xl shadow-lg border hover:shadow-xl transition mx-auto p-4 h-[480px]">
      <div className="rounded-lg overflow-hidden mb-4">
        <Image
          src={vehicle.carPhoto} // FIX domain
          width={600}
          height={400}
          alt={vehicle.carName}
          className="w-full h-48 object-cover"
        />
      </div>

      <h2 className="text-xl text-black font-semibold">{vehicle.carName}</h2>
      <p className="">{vehicle.shortDecription}</p>
      <p className="text-sm text-gray-600 mt-1">
        Brand: <span className="font-medium">{vehicle.brand}</span>
      </p>

      <p className="mt-2 text-lg font-semibold text-green-600">
        Price: {vehicle.price} BDT / day
      </p>

      <p className="text-sm text-gray-700 mt-1">Owner: {vehicle.email}</p>

      <p className="text-sm text-gray-700 mt-1">Phone: {vehicle.number}</p>

      <Link
        href={`vehicals/${vehicle._id}`}
        className="btn mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Details
      </Link>
    </div>
  );
}
