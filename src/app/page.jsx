import TripPlan from "@/Component/TripPlan";
import Hero from "@/Component/Hero";
import RentalFleet from "@/Component/RentalFleet";
import AboutCompany from "@/Component/AboutCompany";
import AirPortRide from "@/Component/AirPortRide";
export default function Home() {
  return (
    <div className="bg-white">
      <Hero />
      <TripPlan />
      <RentalFleet />
      <AboutCompany />
      <AirPortRide />
    </div>
  );
}
