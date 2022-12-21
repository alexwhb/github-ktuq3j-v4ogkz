import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Login: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center h-screen justify-center">
        <div className="mb-8">
          <Header compact />
        </div>

        <div className="w-96 p-4 rounded bg-white">
          <h1 className="text-3xl text-center font-semibold">Login</h1>

          <form>
            <input
              className="bg-gray-100 p-3 mt-8 w-full rounded"
              placeholder="username"
            />
            <input
              className="bg-gray-100 p-3 mt-3 w-full rounded"
              placeholder="password"
            />
            <button
              type="submit"
              className="bg-sky-700 w-full text-gray-100 p-2 rounded mt-8"
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
