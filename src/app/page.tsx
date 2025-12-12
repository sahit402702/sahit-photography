import HeroParallax from "../components/HeroParallax";
import FeaturedCarousel from "../components/FeaturedCarousel";
import GalleryGrid from "../components/GalleryGrid";
import SectionHeading from "../components/SectionHeading";
import Container from "../components/Container";

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
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'stretch', flexDirection: 'row' }}>
            {/* Left: image card (50%) */}
            <div style={{ flex: '1 0 50%' }}>
              <div className="rounded-2xl overflow-hidden shadow-2xl transform transition-transform duration-300 hover:scale-105" style={{ height: '100%' }}>
                <div className="relative" style={{ height: '100%', minHeight: '384px' }}>
                  <img
                    src="/assets/sahit.jpg"
                    alt="Sahit Tirunagari"
                    className="w-full h-full object-cover block"
                  />
                  <div className="absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white">
                    <h4 className="text-lg font-semibold">Sahit Tirunagari</h4>
                    <p className="text-sm text-gray-200">
                      Travel & Wildlife Photographer
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: about text (50%) */}
            <div style={{ flex: '1 0 50%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 className="text-2xl font-semibold mb-3">About Me</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm Sahit, a traveler at heart and a wildlife photographer by
                passion. Nature has always been my escape — a place where time
                slows down, light feels different, and every moment carries a
                story waiting to be captured. From early morning bird calls to
                chance encounters on unfamiliar trails, my camera helps me collect
                the little miracles I find along the way. These images are not
                just photographs; they're pieces of my journey, memories of places
                that changed me, and reminders of why I keep exploring.
              </p>

              <div className="mt-6 flex gap-4">
                <a
                  href="#contact"
                  className="btn btn-primary inline-block"
                >
                  Book a Session
                </a>
                <a
                  href="#featured"
                  className="btn btn-ghost inline-block"
                >
                  View Gallery
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact Section */}
      <section className="section bg-black border-t border-gray-800" id="contact">
        <Container className="text-center">
          <h3 className="text-3xl font-semibold mb-4">Contact & Bookings</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            For commissions, licensing, prints, or workshop inquiries, reach out — I reply within 48
            hours.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-block px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all"
          >
            Email me
          </a>
        </Container>
      </section>
    </main>
  );
}
