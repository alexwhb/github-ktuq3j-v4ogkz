import React, { FC } from 'react';
import { Calendar, Clock, MapPin, MessageCircle, Share2 } from 'react-feather';

interface TitleProps {
  title: string;
  subtitle: string;
  eventImageUrl: string;
  profileImageUrl: string;
  eventAddressLine1: string;
  eventAddressLine2: string;
  eventTime: string;
  eventDate: string;
}

const EventCard: FC<TitleProps> = ({
  title,
  subtitle,
  eventImageUrl,
  profileImageUrl,
  eventAddressLine1,
  eventAddressLine2,
  eventTime,
  eventDate,
}) => {
  return (
    <div className="bg-white shadow rounded">
      <div className="flex justify-between">
        <div className="p-4">
          <h1 className="text-xl font-bold text-gray-800">{title}</h1>
          <h2 className="text-md text-gray-500">{subtitle}</h2>
        </div>
        <img className="rounded-full w-12 h-12 m-4" src={profileImageUrl} />
      </div>
      <img src={eventImageUrl} />

      <div className="flex justify-between p-2  font-normal">
        <div className="flex text-gray-600">
          <MapPin className="mt-3 mr-2 text-sky-700" />
          <div>
            {eventAddressLine1},
            <br />
            {eventAddressLine2}
          </div>
        </div>
        <div>
          <div className="flex text-gray-600 ">
            <Clock className="mr-2 text-sky-700" /> {eventTime}
          </div>
          <div className="flex mt-2 text-gray-600">
            <Calendar className="mr-2 text-sky-700" /> {eventDate}
          </div>
        </div>
        <div className="flex mt-4 mr-2">
          <Share2 className="mr-4 text-sky-700" />{' '}
          <MessageCircle className="text-sky-700" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
