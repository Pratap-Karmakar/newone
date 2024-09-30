import React from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// Team data interface
interface TeamMember {
  quote: string;
  name: string;
  title: string;
  isFeaturted: boolean;
  image?: string; // Add an optional image field if needed later
}

// Team data
const teamData: TeamMember[] = [
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Srijani Ghosh",
    title: "BDM SEO and Marketing",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Niayo24, Nariii",
    name: "Sambik Karmakar",
    title: "IT Full Stack Graphic Designer",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Nariii",
    name: "Aaryan Sinha Roy",
    title: "API, Server-side programming and App Deployment",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24, Nariii",
    name: "Rohit Ghosh",
    title: "Full Stack, Backend Professional",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Luriana",
    name: "Pratap Karmakar",
    title: "Full Stack Web Developer Professional",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Nariii",
    name: "Rana Kobiraj",
    title: "Backend Developer",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24, Nariii",
    name: "Subhankar Das",
    title: "Frontend Developer",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24",
    name: "Kaustubh Upadhyay",
    title: "IT Backend Developer",
    isFeaturted: true,
  },
  {
    quote: "Intern",
    name: "Samadrita Banarjee",
    title: "IT Frontend Developer",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24, Luriana, Nariii",
    name: "Tamashree Halder",
    title: "BDM, SEO And Marketing",
    isFeaturted: true,
  },
  {
    quote: "Ongoing Projects - Naiyo24",
    name: "Souvik Nandy",
    title: "Full Stack Developer",
    isFeaturted: true,
  },
];

const TeamDataSlider: React.FC = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{ clickable: true }}
      modules={[Navigation, Pagination]}
      className='h-[400px]'
    >
      {teamData.map((person, index) => (
        <SwiperSlide key={index}>
          <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16'>
            {/* Avatar, Name, Position */}
            <div className='w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0'>
              <div className='flex flex-col justify-center text-center'>
                {/* Avatar (Image) */}
                {/* Uncomment this and replace with the correct path to use avatar images */}
                {/* <div className='mb-2 mx-auto '>
                  <Image src={person.image} width={100} height={100} alt={person.name} />
                </div> */}
                {/* Name */}
                <div className='text-lg'>{person.name}</div>
                {/* Position */}
                <div className='text-[12px] uppercase font-extralight tracking-widest'>
                  {person.title}
                </div>
              </div>
            </div>
            {/* Quote & Message */}
            <div className='flex flex-1 flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20'>
              {/* Quote Icon */}
              <div className='mb-4'>
                <FaQuoteLeft className='text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
              </div>
              {/* Message */}
              <div className='xl:text-2xl tracking-widest text-center md:text-left'>
                {person.quote}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TeamDataSlider;
