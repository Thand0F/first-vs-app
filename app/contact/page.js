export default function Contact() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-blue-600">Contact</h1>

      <form className="space-y-4 max-w-md">
        <input
          type="text"
          placeholder="Your name"
          className="w-full p-3 border rounded-md"
        />

        <input
          type="email"
          placeholder="Your email"
          className="w-full p-3 border rounded-md"
        />

        <textarea
          placeholder="Your message"
          className="w-full p-3 border rounded-md"
          rows="5"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}