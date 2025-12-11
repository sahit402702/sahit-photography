import Image from "next/image";

export default function Hero() {
  return (
    <section className="full-hero" aria-hidden>
      <Image src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop" alt="Landscape background" fill style={{ objectFit: 'cover' }} priority />
      <div className="hero-overlay" />

      <div className="hero-content container">
        <h1 className="font-extrabold">Travel & Wildlife Photography</h1>
        <p className="mt-4">Capturing the soul of places and creatures — cinematic, bold, and intimate.</p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="#featured" className="btn btn-primary">View Gallery</a>
          <a href="#contact" className="btn btn-ghost">Contact</a>
        </div>
      </div>
    </section>
  );
}
