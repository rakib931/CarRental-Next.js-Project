import VehicalCard from "@/Component/VehicalCard";

export default function AllVehicals({ vehicals }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 my-10 px-5">
      {vehicals.map((vehicle) => (
        <VehicalCard vehicle={vehicle} key={vehicle._id} />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/vehicals");
  const vehicals = await res.json();
  return { props: { vehicals } };
}
