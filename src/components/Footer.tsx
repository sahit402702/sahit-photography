export default function Footer() {
  return (
    <footer role="contentinfo" aria-label="Footer" className="w-full mt-12">
      <div className="container py-8 text-sm text-gray-400">
        <div className="flex items-center justify-between">
          <div className="font-semibold">Sahit Photography</div>
          <div className="space-x-4">
            <a href="https://www.instagram.com/" className="hover:underline">Instagram</a>
            <a href="https://www.twitter.com/" className="hover:underline">Twitter</a>
            <a href="https://www.facebook.com/" className="hover:underline">Facebook</a>
          </div>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500">&copy; {new Date().getFullYear()} Sahit Photography — Built with Next.js & Tailwind CSS</div>
      </div>
    </footer>
  );
}
