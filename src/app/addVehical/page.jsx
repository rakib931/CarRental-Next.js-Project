"use client";
import Image from "next/image";
import toast from "react-hot-toast";

export default function AddVehical() {
  const handelAddCar = (e) => {
    e.preventDefault();
    const formData = {
      carName: e.target.car_name.value,
      fullDecription: e.target.full_decription.value,
      shortDecription: e.target.short_decription.value,
      carPhoto: e.target.photo.value,
      email: e.target.email.value,
      price: e.target.price.value,
      number: e.target.number.value,
      brand: e.target.brand.value,
    };

    console.log(formData);
    fetch("http://localhost:5000/vehicals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
        toast.success("Vehicle added");
        e.target.reset();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="max-w-[1000px] my-10 text-black mx-auto px-5 bg-white rounded-md py-10 shadow-2xl">
      <div className="">
        <h1 className="text-center text-3xl font-bold">
          Add Your Car For Rental
        </h1>
        <p className="text-center text-gray-500 py-5">
          Turn your car into a source of income! Add your vehicle for rental,
          get noticed by <br /> thousands of renters, and start earning with
          every trip.
        </p>
      </div>
      <form onSubmit={handelAddCar} className="my-4 grid md:grid-cols-3 gap-4 ">
        {/* Car Name  */}
        <fieldset>
          <legend className="text-xs font-semibold p-1">Car Name</legend>
          <input
            type="text"
            required
            name="car_name"
            placeholder="Car Name"
            className="input bg-pink-100 rounded-full w-full"
          />
        </fieldset>
        {/* Car Decription  */}
        <fieldset>
          <legend className="text-xs font-semibold p-1">
            Short Decription
          </legend>
          <input
            type="text"
            required
            name="short_decription"
            placeholder="Decription"
            className="input bg-pink-100 rounded-full w-full"
          />
        </fieldset>
        {/* Car Photo  */}
        <fieldset>
          <legend className="text-xs font-semibold p-1">
            Car Photo (img bb.com only)
          </legend>
          <input
            type="url"
            required
            name="photo"
            placeholder="Car Photo"
            className="input bg-pink-100 rounded-full w-full"
          />
        </fieldset>

        {/*Provider Email  */}
        <fieldset>
          <legend className="text-xs font-semibold p-1">Your Email</legend>
          <input
            type="email"
            required
            name="email"
            placeholder="Your Email"
            className="input bg-pink-100 rounded-full w-full"
          />
        </fieldset>

        {/* Car Price */}
        <fieldset>
          <legend className="text-xs font-semibold p-1">Price per day</legend>
          <input
            type="text"
            required
            name="price"
            placeholder="Price"
            className="input bg-pink-100 rounded-full "
          />
        </fieldset>
        {/* PhoneNumber  */}
        <fieldset>
          <legend className="text-xs font-semibold p-1">Phone Number</legend>
          <input
            type="text"
            required
            name="number"
            placeholder="Phone Number"
            className="input bg-pink-100 rounded-full w-full"
          />
        </fieldset>

        {/* seclect brand  */}
        <fieldset>
          <legend className="text-xs font-semibold p-1">Select A Brant</legend>
          <select
            name="brand"
            className="select bg-pink-100 rounded-full outline-non"
          >
            <option required disabled={true}>
              Brands
            </option>
            <option defaultValue={true}>Seclect Brand</option>
            <option>Toyota</option>
            <option>Honda</option>
            <option>Ford</option>
          </select>
        </fieldset>
        {/* Car Full Decription  */}
        <fieldset>
          <legend className="text-xs font-semibold p-1">Full Decription</legend>
          <input
            type="text"
            required
            name="full_decription"
            placeholder="Full Decription"
            className="input h-20 bg-pink-100 rounded-xl w-full"
          />
        </fieldset>
        {/* Add Now */}
        <button
          role="submit"
          className="btn bg-[#ff4c32] rounded-full btn-outline no-outline text-white my-6"
        >
          ADD NOW
        </button>
      </form>
      <div>
        <Image
          className="mx-auto"
          src="https://i.ibb.co.com/B5JjHvym/display-car-image.png"
          alt="logo"
          width={600}
          height={100}
        />
      </div>
    </div>
  );
}
