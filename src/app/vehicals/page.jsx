import VehicalCard from "@/Component/VehicalCard";
import Link from "next/link";

export default async function AllVehicals() {
  const data = await fetch("http://localhost:5000/vehicals");
  const vehicals = await data.json();
  // console.log(vehicals);
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10 px-5">
      {vehicals.map((vehicle) => (
        <VehicalCard vehicle={vehicle} key={vehicle._id} />
      ))}
    </div>
  );
}
