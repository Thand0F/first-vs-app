export default function Home() {
  return (
    <section className="text-center mt-10">
      <h1 className="text-5xl font-bold text-blue-600 mb-6">
        Welcome to My Next.js App
      </h1>

      <p className="text-xl text-gray-700 mb-8">
        This is a fully styled homepage using Tailwind CSS 🚀
      </p>

      <a
        href="/about"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg text-lg shadow hover:bg-blue-700"
      >
        Learn More
      </a>
    </section>
  );
}