"use client"; // Make this a client component
import { useState, useEffect } from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

export default function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const email = "rakibhossain455673@gmail.com";

  useEffect(() => {
    // Fetch vehicles on mount
    fetch(`http://localhost:5000/my-vehicals?email=${email}`)
      .then((res) => res.json())
      .then((data) => setVehicles(data))
      .catch((err) => console.error(err));
  }, [refresh]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete vehicle !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/my-vehicals/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then(() => {
            toast.success("vehicle deleted");
            setRefresh(true);
            Swal.fire({
              title: "Deleted!",
              text: "Your Vehicle has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto max-w-[1200px] my-5 rounded-xl mx-auto bg-white text-black">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th className="text-black">No</th>
            <th className="text-black">Name</th>
            <th className="text-black">Brand</th>
            <th className="text-black">Price</th>
            <th className="text-black">Actions</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, i) => (
            <tr key={vehicle._id}>
              <th>{i + 1}</th>
              <td>{vehicle.carName}</td>
              <td>{vehicle.brand}</td>
              <td>${vehicle.price}</td>
              <td className="flex gap-2">
                <Link href={`/dashboard/${vehicle._id}`} className="btn btn-sm">
                  View
                </Link>
                <button
                  className="btn btn-sm btn-error"
                  onClick={() => handleDelete(vehicle._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
