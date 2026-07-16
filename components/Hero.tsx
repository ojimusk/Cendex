import Link from "next/link";

export default function Hero() {
  return (
    <section>
      {/* Judul dan deskripsi */}

      <div className="flex gap-4">
        <Link
          href="/trade"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-500"
        >
          Launch App
        </Link>

        <Link
          href="/docs"
          className="rounded-xl border border-gray-700 px-6 py-3 text-white hover:border-blue-500"
        >
          Documentation
        </Link>
      </div>
    </section>
  );
}
