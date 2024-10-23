"use client";
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <div className="flex justify-center items-center h-[100dvh]">
        <h1 className="text-xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (session) {
    return (
      <>
        {/* Header with User Info */}
        <div className="w-full bg-red-200 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              className="rounded-full w-20 h-20 object-cover"
              src={session.user?.image}
              alt={`${session.user?.name}'s profile`}
            />
            <div>
              <h1 className="text-2xl font-bold text-blue-600 capitalize">
                {session.user?.name}
              </h1>
              <p className="text-gray-600">{session.user?.email}</p>
            </div>
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => signOut()}
          >
            Sign out
          </button>
        </div>

        {/* Main Content After Login */}
        <main className="p-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Hello, {session.user?.name}!</h2>
            <p className="text-lg text-gray-700">
              Welcome back! Manage your account settings below.
            </p>

            {/* New Features Section */}
            <div className="mt-6">
              <h3 className="text-2xl font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Update Profile Information</li>
                <li>Manage Linked Accounts</li>
                <li>View Purchase History</li>
                <li>Change Password</li>
              </ul>
            </div>

            <div className="mt-6">
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-md mr-4">
                Edit Profile
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md">
                Delete Account
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <div className="flex justify-center items-center h-[100dvh]">
      <div className="flex flex-col gap-4 bg-gray-100 p-10 rounded-lg shadow-lg items-center w-full max-w-md">
        <h1 className="text-3xl font-bold text-black mb-8">Login / Sign Up</h1>

        {/* Google Sign In Button */}
        <button
          className="flex w-full items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => signIn("google")}
        >
          <svg
            className="h-8 w-8 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#4285F4"
              d="M46.145 24.003c0-1.26-.113-2.462-.316-3.626H24v7.094h12.426a10.54 10.54 0 01-4.572 6.922v5.75h7.348c4.301-3.954 6.774-9.78 6.774-16.14z"
            />
            <path
              fill="#34A853"
              d="M24 48c6.48 0 11.903-2.143 15.872-5.814l-7.348-5.75C29.992 38.804 27.127 40 24 40c-5.275 0-9.738-3.522-11.338-8.374H5.014v5.952A23.986 23.986 0 0024 48z"
            />
            <path
              fill="#FBBC05"
              d="M12.662 31.626a14.402 14.402 0 01-1.029-4.626c0-1.608.37-3.138 1.029-4.626v-5.952H5.014A23.986 23.986 0 000 24c0 3.922.936 7.626 2.662 10.952l7.348-5.75z"
            />
            <path
              fill="#EA4335"
              d="M24 9.5c3.53 0 6.69 1.215 9.18 3.58l6.872-6.872C34.906 2.142 29.48 0 24 0 14.736 0 6.778 5.844 2.662 14.048l7.348 5.75C14.262 13.022 18.725 9.5 24 9.5z"
            />
          </svg>
          <span className="text-xl">Continue with Google</span>
        </button>

        {/* LinkedIn Sign In Button */}
        <button
          className="flex w-full items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => signIn("linkedin")}
        >
          <svg
            className="h-8 w-8 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 44 44"
          >
            <path
              fill="#007EBB"
              d="M707.179 274.428c-3.166 0-5.238-2.027-5.238-4.711 0-2.684 2.072-4.711 5.238-4.711 3.165 0 5.238 2.027 5.238 4.711 0 2.684-2.072 4.711-5.238 4.711zm-4.07 3.398h8.576v27.174h-8.576V277.827zm24.529 0v27.174h-8.576V290.94c0-3.68-1.52-6.192-4.865-6.192-2.558 0-3.981 1.696-4.644 3.33-.248.587-.286 1.404-.286 2.221v14.698h-8.576c.125-23.909 0-26.174 0-28.438h8.576v4.264c.57-1.865 3.648-4.526 8.561-4.526 6.095 0 10.884 3.908 10.884 12.325z"
            />
          </svg>
          <span className="text-xl">Continue with LinkedIn</span>
        </button>

        {/* Twitter Sign In Button */}
        <button
          className="flex w-full items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => signIn("twitter")}
        >
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
          >
            <path
              fill="#00AAEC"
              d="M48 8.865a19.723 19.723 0 01-5.656 1.552A9.87 9.87 0 0046.68 4.04a19.72 19.72 0 01-6.233 2.385 9.854 9.854 0 00-16.808 8.978A27.95 27.95 0 013.36 6.695a9.853 9.853 0 003.048 13.138 9.81 9.81 0 01-4.467-1.233v.126a9.857 9.857 0 007.902 9.655 9.88 9.88 0 01-4.453.168 9.86 9.86 0 009.207 6.843 19.747 19.747 0 01-12.204 4.208c-.792 0-1.573-.046-2.343-.137a27.858 27.858 0 0015.076 4.415c18.083 0 27.973-14.977 27.973-27.974 0-.426-.009-.851-.029-1.273A19.93 19.93 0 0048 8.865z"
            />
          </svg>
          <span className="text-xl">Continue with Twitter</span>
        </button>

        {/* GitHub Sign In Button */}
        <button
          className="flex w-full items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => signIn("github")}
        >
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 73 73"
          >
            <path
              fill="#000"
              d="M58.3067362,21.4281798 C55.895743,17.2972267 52.6253846,14.0267453 48.4948004,11.615998 C44.3636013,9.20512774 39.8535636,8 34.9614901,8 C30.0700314,8 25.5585181,9.20549662 21.4281798,11.615998 C17.2972267,14.0266224 14.0269912,17.2972267 11.615998,21.4281798 C9.20537366,25.5590099 8,30.0699084 8,34.9607523 C8,40.8357654 9.71405782,46.1187277 13.1430342,50.8109917 C16.5719253,55.5032557 21.158511,58.2788614 26.8152443,59.1384931 C27.6502277,59.1924596 27.9659015,58.7803707 27.9659015,58.4265672 C27.9659015,58.1133848 27.9659015,57.2693351 27.9659015,56.0736582 C24.073401,56.847138 22.6943427,54.8027515 22.196054,53.7348714 C22.0139391,53.3537824 21.3205961,51.9857489 20.3908927,51.6024466 C19.543078,51.2575373 18.376615,50.3153821 20.3740254,50.3153821 C22.2539961,50.3153821 23.3811616,52.1060859 23.7536925,52.7366076 C25.7763246,56.2631574 29.2461709,55.2183283 30.4820469,54.7483551 C30.788439,53.3749611 31.392533,52.430104 32.0537889,51.9243802 C28.296459,51.4186564 24.3626495,50.3153821 24.3626495,43.8990644 C24.3626495,41.847299 25.0387657,40.129747 26.2869673,38.7781327 C25.9991036,38.2717079 25.3914796,36.5448924 26.5739845,33.547639 C28.573635,33.0217673 30.6224312,34.9981123 30.935247,35.3141582 C32.1847991,34.9993294 33.4722035,34.8411798 34.9614901,34.8411798 C36.4504931,34.8411798 37.7376315,34.9993294 38.9871837,35.3141582 C39.2999994,34.9981123 41.3487956,33.0217673 43.348099,33.547639 C44.5313704,36.5448924 43.9237464,38.2717079 43.6355176,38.7781327 C44.8837192,40.129747 45.5598354,41.847299 45.5598354,43.8990644 C45.5598354,50.3423296 41.6259356,51.4186564 37.8686057,51.9243802 C38.6670917,52.5394604 39.3225685,53.7483551 39.3225685,55.6786925 C39.3225685,58.2210382 39.3225685,60.3160528 39.3225685,60.9944287 C39.3225685,61.3482322 39.6382423,61.7603212 40.4732257,61.7059851 C46.1337593,60.864876 50.721099,58.0865404 54.1483584,53.3939061 C57.5753497,48.7016421 59.2892408,43.4186835 59.2892408,37.5432977 C59.2892408,32.6524789 58.1116226,28.1811309 55.7102135,24.0509357 C55.7101001,24.0509357 55.7101001,24.0509357 55.7101001,24.0509357 Z"
            />
          </svg>
          <span className="text-xl">Continue with GitHub</span>
        </button>

        {/* Facebook Sign In Button */}
        <button
          className="flex w-full items-center bg-white border border-gray-300 rounded-lg shadow-md px-6 py-2 text-sm font-medium text-gray-800 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
          onClick={() => signIn("facebook")}
        >
          <svg
            className="h-6 w-6 mr-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
          >
            <path
              fill="#1877F2"
              d="M32 16C32 7.163 24.837 0 16 0S0 7.163 0 16c0 7.732 5.636 14.13 13 15.854v-11.2H9.145v-4.653H13V12.77c0-3.853 2.306-5.973 5.838-5.973 1.692 0 3.461.303 3.461.303v3.805h-1.948c-1.918 0-2.516 1.19-2.516 2.412v2.837h4.282l-.685 4.653h-3.597V32c7.364-1.724 13-8.122 13-15.854"
            />
            <path
              fill="#FFF"
              d="M22.416 20.587l.685-4.653h-4.282v-2.837c0-1.222.598-2.412 2.516-2.412h1.948V6.88s-1.769-.303-3.461-.303C16.869 6.577 14.563 8.697 14.563 12.77v2.231H9.145v4.653H14.563v11.2a15.967 15.967 0 003.937 0v-11.2z"
            />
          </svg>
          <span className="text-xl">Continue with Facebook</span>
        </button>
      </div>
    </div>
  );
};

export default Login;