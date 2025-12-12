import Hero from "../components/Hero";

export default function HomePage() {
  return (
    <main className="pt-[80px]">
      <Hero />

   <section className="max-w-6xl mx-auto my-12 px-4">
      {/* Use flex so it's explicit — stacks on small, row on md+ */}
      <div className="flex flex-col md:flex-row items-stretch gap-8">
        {/* LEFT: image (50% on md+) */}
        <div className="md:w-1/2 w-full">
          <div className="rounded-2xl overflow-hidden shadow-xl h-[380px] md:h-[520px]">
            <img
              src="/assets/sahit.jpg"
              alt="Sahit Tirunagari — Travel & Wildlife Photographer"
              className="w-full h-full object-cover block"
              loading="lazy"
            />
            {/* overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h4 className="text-lg font-semibold">Sahit Tirunagari</h4>
              <p className="text-sm text-gray-200">Travel & Wildlife Photographer</p>
            </div>
          </div>

          {/* optional thumbnail row */}
          <div className="mt-4 flex gap-3">
            <img src="/assets/thumb1.jpg" alt="" className="w-1/3 h-20 object-cover rounded-lg" />
            <img src="/assets/thumb2.jpg" alt="" className="w-1/3 h-20 object-cover rounded-lg" />
            <img src="/assets/thumb3.jpg" alt="" className="w-1/3 h-20 object-cover rounded-lg" />
          </div>
        </div>

        {/* RIGHT: content (50% on md+) */}
        <div className="md:w-1/2 w-full flex flex-col justify-center">
          <h3 className="text-3xl md:text-4xl font-serif mb-4">A Bit About Me…</h3>

          <p className="text-gray-300 leading-relaxed text-base md:text-lg">
            I'm Sahit — a traveller at heart and wildlife photographer by passion. I chase light and fleeting
            moments across wetlands, forests and coastlines to capture quiet stories of birds and place.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#contact" className="inline-block px-5 py-3 rounded-full bg-emerald-600 text-white font-semibold">Book a session</a>
            <a href="/gallery" className="inline-block px-5 py-3 rounded-full border border-gray-700 text-gray-200">View gallery</a>
          </div>
        </div>
      </div>
    </section>

    </main>
  );
}
