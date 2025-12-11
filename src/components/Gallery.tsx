"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const PLACEHOLDER = "/placeholder.jpg";
const IMAGES = [
	"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1504198453319-5ce911bafcde?q=80&w=1600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1600&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1600&auto=format&fit=crop",
];

export default function Gallery() {
	const [open, setOpen] = useState<number | null>(null);
	const [fallbacks, setFallbacks] = useState<Record<number, string>>({});

	useEffect(() => {
		function onKey(e: KeyboardEvent) {
			if (e.key === "Escape") setOpen(null);
			if (e.key === "ArrowRight" && open !== null)
				setOpen((open + 1) % IMAGES.length);
			if (e.key === "ArrowLeft" && open !== null)
				setOpen((open - 1 + IMAGES.length) % IMAGES.length);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [open]);

	useEffect(() => {
		if (open !== null) {
			document.body.style.overflow = "hidden";
			// basic focus trap: move focus to dialog
			const dlg = document.querySelector('[role="dialog"]') as HTMLElement | null;
			dlg?.focus();
		} else {
			document.body.style.overflow = "";
		}
	}, [open]);

	return (
		<div>
			<div id="featured" className="gallery-grid">
				{IMAGES.map((src, i) => {
					const isSpan = i % 3 === 0;
					return (
						<button
							key={src + i}
							onClick={() => setOpen(i)}
							className={`gallery-item ${
								isSpan ? "gallery-item--span2" : ""
							}`}
						>
							<div className="relative w-full h-[220px] md:h-[260px]">
								<Image
									src={fallbacks[i] || src}
									alt={`Gallery image ${i + 1}`}
									className="object-cover"
									fill
									sizes="(max-width: 768px) 100vw, 33vw"
									priority={i === 0}
									unoptimized
									onError={() =>
										setFallbacks((s) => ({ ...s, [i]: PLACEHOLDER }))
									}
								/>
							</div>
						</button>
					);
				})}
			</div>

			{open !== null && (
				<div
					className="lightbox-backdrop"
					role="dialog"
					aria-modal="true"
					tabIndex={-1}
				>
					<div className="lightbox-content">
						<button
							className="absolute top-6 right-6 text-white text-2xl p-2"
							onClick={() => setOpen(null)}
							aria-label="Close"
						>
							×
						</button>
						<button
							className="absolute left-6 top-1/2 -translate-y-1/2 text-white p-2"
							aria-label="Previous"
							onClick={() =>
								setOpen((open - 1 + IMAGES.length) % IMAGES.length)
							}
						>
							&larr;
						</button>
						<button
							className="absolute right-6 top-1/2 -translate-y-1/2 text-white p-2"
							aria-label="Next"
							onClick={() => setOpen((open + 1) % IMAGES.length)}
						>
							&rarr;
						</button>
						<Image
							src={fallbacks[open] || IMAGES[open]}
							alt={`Expanded image ${open + 1}`}
							width={1400}
							height={900}
							className="rounded-md"
							unoptimized
							onError={(e) => setFallbacks((s) => ({ ...s, [open]: PLACEHOLDER }))}
						/>
					</div>
				</div>
			)}
		</div>
	);
}
