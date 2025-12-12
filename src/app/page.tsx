import HeroParallax from "../components/HeroParallax";
import FeaturedCarousel from "../components/FeaturedCarousel";
import GalleryGrid from "../components/GalleryGrid";
import SectionHeading from "../components/SectionHeading";
import Container from "../components/Container";
import Button from "../components/Button";

export default function HomePage() {
  return (
    <main>
      {/* Hero Parallax Section */}
      <HeroParallax />

      {/* Featured Carousel Section */}
      <FeaturedCarousel />

      {/* Portfolio Gallery Section */}
      <section id="featured" className="section bg-black">
        <Container>
          <SectionHeading
            title="Portfolio Gallery"
            subtitle="Curated moments from my travels and wildlife explorations"
          />
          <GalleryGrid />
        </Container>
      </section>

      {/* About Me Section */}
      <section className="section bg-black">
        <Container>
          <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-center md:items-start">
            {/* Left: image card */}
            <div className="w-full md:w-1/2 flex-shrink-0">
              <div className="rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105" style={{ height: '100%' }}>
                <div className="relative" style={{ height: '100%', minHeight: '320px' }}>
                  <img
                    src="/assets/sahit.jpg"
                    alt="Sahit Tirunagari - Professional photographer specializing in wildlife and travel photography"
                    className="w-full h-full object-cover block"
                  />
                </div>
              </div>
            </div>

            {/* Right: about text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 font-handwritten">About Me</h2>
              <p className="text-gray-400 leading-relaxed mb-4 text-sm">
                I'm Sahit, a traveler at heart and a wildlife photographer by passion. Nature has always been my escape—a place where time slows down, light feels different, and every moment carries a story waiting to be captured.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                From early morning bird calls to chance encounters on unfamiliar trails, my camera helps me collect the little miracles I find along the way. These images are not just photographs; they're pieces of my journey and reminders of why I keep exploring.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="#contact" variant="primary">
                  Book a Session
                </Button>
                <Button href="#featured" variant="secondary">
                  View Gallery
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section bg-black border-t border-gray-900" id="contact">
        <Container className="text-center">
          <h2 className="text-2xl font-semibold mb-3 font-handwritten">Get In Touch</h2>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto text-sm">
            For commissions, licensing, prints, or workshop inquiries, I'd love to hear from you.
          </p>
          <Button href="mailto:hello@example.com" variant="primary">
            Send Email
          </Button>
        </Container>
      </section>
    </main>
  );
}
