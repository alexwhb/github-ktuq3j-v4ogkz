import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/cwt2pit.css" />
      </Head>

      <main className="flex flex-col items-center h-screen justify-center">
        <div className="mb-8">
          <Header compact />
        </div>

        <div className="max-w-md p-8 rounded bg-white">
          <h1 className="text-3xl text-center font-semibold font-['bree']">
            Login
          </h1>

          <form>
            <input
              className="bg-pingray-100 p-3 mt-8 w-full rounded font-light shadow"
              placeholder="Username"
              type="email"
            />
            <input
              className="bg-pingray-100 p-3 mt-3 w-full rounded font-light shado"
              placeholder="Password"
              type="password"
            />

            <div>
              <button
                type="button"
                className="mt-3 text-pingray-500 bg-pingray-100
                shadow hover:shadow-md focus:ring-4 focus:outline-none focus:ring-bg-sky-700/50 font-medium rounded-lg text-sm px-3 py-2.5 text-center inline-flex items-center mr-2"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4 text-pinblue-500"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="facebook-f"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="currentColor"
                    d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"
                  ></path>
                </svg>
                Sign in with Facebook
              </button>

              <button
                type="button"
                className="text-pingray-500 bg-pingray-100 shadow hover:shadow-md focus:ring-4 focus:outline-none focus:ring-bg-sky-700/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center"
              >
                <svg
                  className="mr-2 -ml-1 w-4 h-4 text-pinblue-500"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="google"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                >
                  <path
                    fill="currentColor"
                    d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                  ></path>
                </svg>
                Sign in with Google
              </button>
            </div>
            <button
              type="submit"
              className="bg-pinblue-500 shadow hover:shadow-md w-full text-gray-100 p-2 rounded mt-8 font-['bree']"
            >
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
