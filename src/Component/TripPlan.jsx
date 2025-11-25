import Image from "next/image";
export default function TripPlan() {
  return (
    <div className="my-12 max-w-[1100px] mx-auto text-black">
      <div className="text-center">
        <p className="text-xl font-semibold">Plan your trip now</p>
        <h1 className="text-4xl font-bold">Quick & easy car rental</h1>
      </div>
      <div className="grid md:grid-cols-5 gap-5 items-center">
        <div>
          <Image
          className="mx-auto"
            src="https://i.ibb.co.com/TqmjmZdZ/iconbox-image-01.png"
            alt="logo"
            width={100}
            height={50}
          />
          <h1 className="text-3xl font-bold text-center py-2">
            Select a Car</h1>
          <p className="text-center">
            Choose the perfect vehicle that matches your style and needs. Browse through a wide range of modern, comfortable, and reliable cars designed to give you the best driving experience.
          </p>
        </div>
        <div className="mx-auto">-----------</div>
        <div>
          <Image
          className="mx-auto rounded-full"
            src="https://i.ibb.co.com/j9VKZn9P/download.png"
            alt="logo"
            width={100}
            height={50}
          />
          <h1 className="text-3xl font-bold text-center py-2">Pay for This</h1>
          <p className="text-center">
            Complete your booking quickly and securely. Our smooth and safe payment system ensures a fast checkout with multiple payment options for your convenience.
          </p>
        </div>
        <div className="mx-auto">-----------</div>
        <div>
          <Image
          className="mx-auto rounded-full"
            src="https://i.ibb.co.com/RkrQQm0N/download.jpg"
            alt="logo"
            width={100}
            height={50}
          />
          <h1 className="text-3xl font-bold text-center py-2">Drive Carefully</h1>
          <p className="text-center">
           Hit the road with confidence. Enjoy a safe, comfortable ride—but remember to follow traffic rules and drive responsibly for your safety and others around you.
          </p>
        </div>
      </div>
    </div>
  );
}
