import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Calendar, Clock, MapPin, MessageCircle, Share2 } from 'react-feather';
import EventCard from '../components/EventCard';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div className="bg-gray-200 h-screen">
      <Head>
        <title>Pin B</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      {/* This will be our card  */}

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 m-2">
        <EventCard
          title={'Event Title'}
          subtitle={'subtitle'}
          eventImageUrl={'http://placekitten.com/700/350'}
          profileImageUrl={'http://placekitten.com/50/50'}
          eventAddressLine1={'1948 Pioneer Road'}
          eventAddressLine2={'Medford OR. 97501'}
          eventTime={'5:30 PM'}
          eventDate={'Oct 18th 2022'}
        />

        <EventCard
          title={'Event Title'}
          subtitle={'subtitle'}
          eventImageUrl={'http://placekitten.com/g/700/350'}
          profileImageUrl={'http://placekitten.com/g/50/50'}
          eventAddressLine1={'1948 Pioneer Road'}
          eventAddressLine2={'Medford OR. 97501'}
          eventTime={'5:30 PM'}
          eventDate={'Oct 18th 2022'}
        />
      </div>
    </div>
  );
};

export default Home;
