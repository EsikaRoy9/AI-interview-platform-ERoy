import Link from 'next/link';

export default function Instructions() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-white to-gray-100 p-8">
  <div className="bg-white p-10 rounded-2xl shadow-lg transform transition-transform duration-300">
    <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">
      Interview Instructions
    </h1>
    <ul className="list-disc text-lg text-gray-600 space-y-4 mb-8 pl-6">
      <li>
        <span className="font-semibold">Ensure your camera and microphone are operational.</span>
      </li>
      <li>
        <span className="font-semibold">Read each question carefully before answering.</span>
      </li>
      <li>
        <span className="font-semibold">Responses are recorded with video and audio.</span>
      </li>
    </ul>
    <Link
      href="/permissions"
      className="block w-full text-center px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
    >
      Proceed to Permissions
    </Link>
  </div>
</div>

  );
}
