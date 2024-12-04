import Link from "next/link";


export default function Completion() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tl from-green-100 via-white to-gray-100 p-8">
      <div className="bg-white p-10 rounded-2xl shadow-xl text-center transform  transition-transform duration-300">
        <h1 className="text-4xl font-extrabold text-green-500 mb-6">Test Complete!</h1>
        <p className="text-lg text-gray-700 mb-8">
          Congratulations! You’ve successfully completed the test. Your responses have been recorded.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
         
          <Link
            href="/"
            className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md transform transition-transform hover:scale-110 hover:shadow-lg"
          >
            Go to Home Page
          </Link>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          Need help? <Link href="/support" className="text-blue-500 hover:underline">Contact Support</Link>
        </p>
      </div>
    </div>
    
    );
  }
  