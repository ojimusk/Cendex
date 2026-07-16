export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">

      <div className="mx-auto max-w-7xl px-6 py-14">

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Cendex
            </h2>

            <p className="mt-2 text-gray-500">
              Built on Hyperliquid
            </p>

          </div>

          <div className="flex gap-8 text-gray-400">

            <a href="#">Docs</a>

            <a href="#">Twitter</a>

            <a href="#">Discord</a>

            <a href="#">Github</a>

          </div>

        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-sm text-gray-600">
          © 2026 Cendex. All rights reserved.
        </div>

      </div>

    </footer>
  );
}
