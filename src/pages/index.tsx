import { useUser } from "@/context/UserContext";
import NavBar from "@/components/common/NavBar";
import HeroSection from "@/components/HomePage/HeroSection";
import PartnershipInfo from "@/components/HomePage/PartnershipInfo";
import SolutionsCards from "@/components/HomePage/SolutionsCards";
import EnableGoodWorks from "@/components/HomePage/EnableGoodWorks";
import ImpactStatistics from "@/components/HomePage/ImpactStatistics";
import CTASection from "@/components/HomePage/CTASection";
import SubscriptionPlans from "@/components/HomePage/SubscriptionPlans";
import Testimonials from "@/components/HomePage/Testimonials";
import Footer from "@/components/common/Footer";

export default function Home() {
  const { user, setUser, logout } = useUser();

  return (
    <div className="min-h-screen">
      <NavBar bgColor="#f7dacf" />
      <HeroSection />
      <PartnershipInfo />
      <SolutionsCards />
      <EnableGoodWorks />
      <ImpactStatistics />
      <CTASection />
      <SubscriptionPlans />
      <Testimonials />
      <Footer />
    </div>
  );
}
