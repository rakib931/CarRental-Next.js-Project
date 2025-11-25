import Image from "next/image";

export default async function Navbar({ params }) {
  const { id } = await params;
  const data = await fetch(`http://localhost:5000/vehicals/${id}`);
  const vehicle = await data.json();
  // console.log(vehicle);
  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-50 p-6 text-black">
      <div className="max-w-xl w-full shadow-xl rounded-2xl p-4">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold text-center">{vehicle.carName}</h1>
          <p className="text-center text-gray-600 text-sm">
            Brand: {vehicle.brand}
          </p>

          <div className="w-full h-64 relative rounded-xl overflow-hidden shadow-md">
            <Image
              src={vehicle.carPhoto}
              alt={vehicle.carName}
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-2 text-lg mt-3">
            <p>
              <strong>Price:</strong> {vehicle.price} BDT / day
            </p>
            <p>{vehicle.shortDecription}</p>
            <p>{vehicle.fullDecription}</p>
            <p>
              <strong>Contact Number:</strong> {vehicle.number}
            </p>
            <p>
              <strong>Owner Email:</strong> {vehicle.email}
            </p>
          </div>
          <div>
            
          </div>
          <button  className="btn w-full text-lg py-6 mt-4 rounded-xl">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
