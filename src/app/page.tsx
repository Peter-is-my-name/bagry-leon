import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { MachineFleet } from "@/components/sections/MachineFleet";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { Reviews } from "@/components/sections/Reviews";
import { ServiceArea } from "@/components/sections/ServiceArea";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Services />
      <About />
      <Process />
      <MachineFleet />
      <ProjectsGallery />
      <Reviews />
      <ServiceArea />
      <FAQ />
      <CTASection />
      <Contact />
    </>
  );
}
