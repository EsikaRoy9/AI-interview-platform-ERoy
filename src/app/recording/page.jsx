'use client'
import { useRef, useState } from 'react';
import Link from 'next/link';

export default function Recording() {
  const videoRef = useRef(null);
  const [recording, setRecording] = useState(false);

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    videoRef.current.srcObject = stream;
    videoRef.current.play();
    setRecording(true);
  };

  const stopRecording = () => {
    const stream = videoRef.current.srcObject;
    const tracks = stream.getTracks();
    tracks.forEach((track) => track.stop());
    videoRef.current.srcObject = null;
    setRecording(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Record Your Answer</h1>
      <video ref={videoRef} className="border border-gray-400 mb-4" autoPlay muted></video>
      <div className="space-x-4">
        {!recording ? (
          <button
            onClick={startRecording}
            className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600"
          >
            Start Recording
          </button>
        ) : (
          <button
            onClick={stopRecording}
            className="px-6 py-3 bg-red-500 text-white rounded-lg shadow-lg hover:bg-red-600"
          >
            Stop Recording
          </button>
        )}
      </div>
      <Link href="/completion" className="mt-6 px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600">
    
          Finish Test
       
      </Link>
    </div>
  );
}
