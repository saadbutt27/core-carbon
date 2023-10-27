import Carousel from "@/components/home_sections/hero-section/Carousel";
import Services from "@/components/home_sections/sector-section/SectorsSection";
import RecentProjects from "@/components/home_sections/recent-projects-section/RecentProjects";
import Programs from "@/components/home_sections/net-zero/Program";
import Testimonial from "@/components/home_sections/testimonial-section/Testimonials";
import Wrapper from "@/components/reusable/Wrapper";

export default function Home() {
  return (
    <Wrapper>
      <Carousel />
      <Services />
      <RecentProjects />
      <Programs />
      <Testimonial />
    </Wrapper>
  );
}
