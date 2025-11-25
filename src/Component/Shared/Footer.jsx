export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 py-12 border-t">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* CAR RENTAL */}
        <div>
          <h3 className="text-xl font-bold mb-4">CAR RENTAL</h3>
          <p className="mb-2">Use securing confined his shutters.</p>
          <p className="mb-4">Delightful as he it acceptance an solicitude discretion.</p>

          <p className="flex items-center mb-2">
            <span className="mr-2">📞</span> (001) 45-644-0390
          </p>
          <p className="flex items-center">
            <span className="mr-2">📧</span> carrental@gmail.com
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-xl font-bold mb-4">COMPANY</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-red-500">New York</a></li>
            <li><a href="#" className="hover:text-red-500">Careers</a></li>
            <li><a href="#" className="hover:text-red-500">Mobile</a></li>
            <li><a href="#" className="hover:text-red-500">Blog</a></li>
            <li><a href="#" className="hover:text-red-500">How we work</a></li>
          </ul>
        </div>

        {/* WORKING HOURS */}
        <div>
          <h3 className="text-xl font-bold mb-4">WORKING HOURS</h3>
          <ul className="space-y-2">
            <li>Mon - Fri: 09:00AM - 09:00PM</li>
            <li>Sat: 09:00AM - 07:00PM</li>
            <li>Sun: Closed</li>
          </ul>
        </div>

        {/* SUBSCRIBE */}
        <div>
          <h3 className="text-xl font-bold mb-4">COMPANY</h3>
          <p className="mb-4">Subscribe your Email address for latest news & updates.</p>

          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="w-full p-3 border rounded-lg focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="text-center mt-10 pt-6 border-t">
        <p>© 2025 <span className="font-bold">Car Rental</span>. All Rights Reserved. Design by Rakib hossian</p>
      </div>
    </footer>
  );
}
