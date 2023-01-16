import { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';


/**
 * WOW this was created by Chat GPT for me. 
 */
const EventPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Event</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://use.typekit.net/cwt2pit.css" />
      </Head>

      <main className="flex flex-col items-center h-screen justify-center">
        <div className="mb-8">
          <Header compact />
        </div>

        <div className="max-w-md p-8 rounded bg-white">
          <h1 className="text-3xl text-center font-semibold font-['bree']">
            Create Event
          </h1>

          <form>
            <input
              className="bg-pingray-100 shadow p-3 mt-8 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="Event Name"
            />
            <textarea
              className="bg-pingray-100 shadow p-3 mt-3 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="Event Description"
            />
            <input
              className="bg-pingray-100 shadow p-3 mt-3 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              type="file"
              placeholder="Upload Picture"
            />
            <input
              className="bg-pingray-100 shadow p-3 mt-3 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="Event Location"
            />
            <input
              className="bg-pingray-100 shadow p-3 mt-3 w-full rounded font-light focus:ring-2 focus:outline-none focus:ring-bg-pinblue-500"
              placeholder="Event Time"
              type="time"
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

export default EventPage;
