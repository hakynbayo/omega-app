import React from "react";

export default function Sidebar() {
  return (
    <>
      <div className="flex items-center mb-4">
        <img src="/Frame 46.png" alt="logo" className="mr-2" />
      </div>

      <ul className="mb-4">
        <li className="mb-2">
          <a href="#">
            <img
              src="/Frame 14.png"
              alt="All"
              onClick={() => alert("All clicked")}
            />
          </a>
        </li>

        <li className="mb-2">
          <a href="#">
            <img
              src="/Frame 15.png"
              alt="Images"
              onClick={() => alert("Images clicked")}
            />
          </a>
        </li>

        <li className="mb-2">
          <a href="#">
            <img
              src="/Frame 16.png"
              alt="Videos"
              onClick={() => alert("Videos clicked")}
            />
          </a>
        </li>
      </ul>

      <div className="flex items-center mb-4">
        <span className="mr-2">Categories</span>
        <img src="/Add.png" alt="" onClick={() => alert("Add clicked")} />
      </div>

      <div className="grid grid-cols-1 gap-2 mb-4">
        <div className="mb-2 border rounded-md p-2 flex items-center justify-between transition duration-300 ease-in-out transform hover:bg-gray-100 hover:border-purple-300">
          <span>Generative Art</span>
          <button
            onClick={() => alert("Cancel clicked")}
            className="text-blue-500 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-2 overflow-hidden border rounded-md p-2 flex items-center justify-between transition duration-300 ease-in-out transform hover:bg-gray-100">
          <span>Chat</span>
          <button
            onClick={() => alert("Cancel clicked")}
            className="text-blue-500 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="mb-2 border rounded-md p-2 flex items-center justify-between transition duration-300 ease-in-out transform hover:bg-gray-100">
          <span>Image Improvement</span>
          <button
            onClick={() => alert("Cancel clicked")}
            className="text-blue-500 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-2 border rounded-md p-2 flex items-center justify-between transition duration-300 ease-in-out transform hover:bg-gray-100">
          <span>Social Media</span>
          <button
            onClick={() => alert("Cancel clicked")}
            className="text-blue-500 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-2 border rounded-md p-2 flex items-center justify-between transition duration-300 ease-in-out transform hover:bg-gray-100">
          <span>Avatar</span>
          <button
            onClick={() => alert("Cancel clicked")}
            className="text-blue-500 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-2 border rounded-md p-2 flex items-center justify-between transition duration-300 ease-in-out transform hover:bg-gray-100">
          <span>Text-to-speech</span>
          <button
            onClick={() => alert("Cancel clicked")}
            className="text-blue-500 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mb-2 border rounded-md p-2 flex items-center justify-between transition duration-300 ease-in-out transform hover:bg-gray-100">
          <span>Productivity</span>
          <button
            onClick={() => alert("Cancel clicked")}
            className="text-blue-500 ml-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
