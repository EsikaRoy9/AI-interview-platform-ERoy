'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Permissions() {
  const [permissionStatus, setPermissionStatus] = useState("");

  const checkPermissions = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      await navigator.mediaDevices.getDisplayMedia();
      setPermissionStatus("Permissions granted!");
    } catch (error) {
      setPermissionStatus("Permissions denied. Please allow access.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 via-white to-gray-100 p-8">
    <div className="bg-white p-10 rounded-2xl shadow-lg transform  transition-transform duration-300 text-center">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6">Check Permissions</h1>
      <button
        onClick={checkPermissions}
        className="px-8 py-4 bg-blue-500 text-white text-lg font-semibold rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-lg mb-6"
      >
        Check Permissions
      </button>
      <p className="text-lg text-gray-600 mb-6">
        {permissionStatus || "Please check your permissions to proceed."}
      </p>
      {permissionStatus === "Permissions granted!" && (
        <Link
          href="/questions"
          className="px-8 py-4 bg-green-500 text-white text-lg font-semibold rounded-full shadow-md transition-transform transform hover:scale-110 hover:shadow-lg"
        >
          Proceed to Questions
        </Link>
      )}
    </div>
  </div>
  
  );
}
