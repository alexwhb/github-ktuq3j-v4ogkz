import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Account</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/cwt2pit.css" />
      </Head>

      <main className="flex flex-col items-center h-screen justify-center">
        <div className="mb-8">
          <Header compact />
        </div>

        <div className="max-w-md p-8 rounded bg-white">
          <h1 className="text-3xl text-center font-semibold font-['bree']">
            Sign Up
          </h1>

          <form>
            <input
              className="bg-pingray-100 shadow p-3 mt-8 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="First Name"
            />
            <input
              className="bg-pingray-100 shadow p-3 mt-3 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="Last Name"
            />
            <input
              className="bg-pingray-100 shadow p-3 mt-3 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="Email"
              type="email"
            />
            <input
              className="bg-pingray-100 shadow p-3 mt-3 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="Password"
              type="password"
            />
            <input
              className="bg-pingray-100 shadow p-3 mt-3 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="Re-Enter Paswword"
              type="password"
            />

            <button
              type="submit"
              className="bg-pinblue-500 shadow hover:shadow-md w-full text-gray-100 p-2 rounded mt-8 font-['bree'] focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
            >
              Create
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
