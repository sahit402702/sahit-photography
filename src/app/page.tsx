import Hero from "../components/Hero";
import Gallery from "../components/Gallery";

export default function HomePage() {
  return (
    <main className="pt-[80px]">
      <Hero />

      <section className="container my-12">
        <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>
        <Gallery />
      </section>

      <section className="container my-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-semibold">About Me</h3>
            <p className="mt-4 text-gray-300">I&apos;m a travel and wildlife photographer who chases light and moments across the globe. I focus on storytelling through environmental portraits of animals and cultures, blending cinematic color with documentary honesty.</p>
            <ul className="mt-4 space-y-2 text-gray-400">
              <li>Available for assignments & workshops</li>
              <li>Prints available on request</li>
              <li>Based in [Your City] — worldwide travel</li>
            </ul>
          </div>
          <div className="rounded overflow-hidden shadow">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop" alt="Wildlife sample" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container my-12" id="contact">
        <h3 className="text-xl font-semibold">Contact & Bookings</h3>
        <p className="mt-3 text-gray-300">For commissions, licensing or prints, reach out — I reply within 48 hours.</p>
        <a href="mailto:hello@example.com" className="inline-block mt-4 btn btn-ghost">Email me</a>
      </section>
    </main>
  );
}
