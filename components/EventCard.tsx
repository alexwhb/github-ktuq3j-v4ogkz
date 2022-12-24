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
    <div className="bg-white shadow rounded font-['Lato']">
      <div className="flex justify-between">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-pingray-900">{title}</h1>
          <h2 className="text-xl text-pingray-400">{subtitle}</h2>
        </div>
        <img className="rounded-full w-12 h-12 m-4" src={profileImageUrl} />
      </div>
      <img src={eventImageUrl} />

      <div className="flex justify-between p-2  font-normal text-pingray-600">
        <div className="flex">
          <MapPin className="mt-3 mr-2 text-pinblue-500" />
          <div>
            {eventAddressLine1},
            <br />
            {eventAddressLine2}
          </div>
        </div>
        <div>
          <div className="flex">
            <Clock className="mr-2 text-pinblue-500" /> {eventTime}
          </div>
          <div className="flex mt-2">
            <Calendar className="mr-2 text-pinblue-500" /> {eventDate}
          </div>
        </div>
        <div className="flex mt-4 mr-2">
          <Share2 className="mr-4 text-pinblue-500" />{' '}
          <MessageCircle className="text-pinblue-500" />
        </div>
      </div>
    </div>
  );
};

export default EventCard;
