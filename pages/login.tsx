import { NextPage } from 'next';

const Login: NextPage = () => {
  return (
    <main className="flex content-center justify-center h-screen items-center ">
      <div className="w-96 p-4 rounded bg-white ">
        <h1 className="text-3xl text-center font-semibold">Login</h1>

        <form>
          <input className="bg-gray-100 p-3 mt-8 w-full rounded"></input>
          <input className="bg-gray-100 p-3 mt-3 w-full rounded"></input>
          <button
            type="submit"
            className="bg-sky-700 w-full text-gray-100 p-2 rounded mt-8"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;
