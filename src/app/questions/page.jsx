import Link from "next/link";
// import demoaudio from "../../../public/audiosrc/demoaudio.mp3";
export default function Questions() {
  const question = "Describe a time you solved a difficult problem.";
  const audioSrc = "/sample-question-audio.mp3";

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <h1 className="text-2xl font-bold mb-4">Interview Question</h1>
      <p className="text-lg text-gray-800 mb-4">{question}</p>
      <audio controls>
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <Link
        href="/recording"
        className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600"
      >
        Start Answering
      </Link>
    </div>
  );
}
