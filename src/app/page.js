import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <div className="bg-white p-10 rounded-xl shadow-2xl transform  transition-transform duration-500 text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-6">
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            AI Interview Platform
          </span>
        </h1>
        <p className="text-gray-600 mb-8">
          Prepare for your next big opportunity with our intelligent platform.
        </p>
        <Link
          href="/instructions"
          className="px-8 py-4 text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110 hover:shadow-2xl"
        >
          Start Interview
        </Link>
      </div>
    </div>
  );
}
