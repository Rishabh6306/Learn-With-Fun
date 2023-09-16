import React, { useEffect, useState } from "react";
import Card from "./Card";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

const cardData = [
  {
    title: 'Our Mission',
    description:
      'Our mission is to make learning an enjoyable and interactive experience for everyone, creating a platform that embodies the fun side of education. Join us in our quest for delightful education!',
  },
  {
    title: 'Who I am',
    description:
      'I am independent creator and passionate developer shaping websites. Our dedication empowers learners of all ages, nurturing a love for knowledge, growth, innovation, and excellence.',
  },
  {
    title: 'What We Do',
    description:
      'Learn with Fun is not just a website; it\'s a hub for knowledge seekers. We offer a wide range of features, from interactive Documentation Quiz, Notes, Games to a virtual Library.',
  },
  {
    title: 'Our Vision',
    description:
      'Our vision is to create an online community where knowledge is easily accessible and enjoyable to acquire. We aim to continuously improve and expand our platform to cater to diverse learning needs.',
  },
  {
    title: 'Contact Us',
    description:
      'We value your feedback and suggestions. If you have any questions, concerns, or ideas you\'d like to share with us, please don\'t hesitate to reach out to us. Let\'s make learning better.',
  },
  {
    title: 'Join Us',
    description: "Interested in contributing to our mission? We're always on the lookout for talented individuals who share our passion for education. For shaping the future of learning. "
  },
  {
    title: 'Our Goals',
    description:
      'Learn about the goals and objectives that drive us forward in our mission to provide enjoyable, interactive learning experiences, fostering a love for knowledge and growth.',
  },
];

function About() {
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateVisibleCards = () => {
      let numVisibleCards;
      if (screenWidth >= 1280) {
        numVisibleCards = 3;
      } else if (screenWidth >= 650) {
        numVisibleCards = 2;
      } else {
        numVisibleCards = 1;
      }

      const endIndex = Math.min(startIndex + numVisibleCards, cardData.length);
      const newVisibleCards = cardData.slice(startIndex, endIndex);
      setVisibleCards(newVisibleCards);
    };

    updateVisibleCards();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [startIndex, screenWidth]);

  const handleLeftClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleRightClick = () => {
    if (startIndex + 1 < cardData.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="flex flex-col bg-[url(./src/Components/Home/assests/AboutBgc.jpg)] bg-cover bg-center">
      <h1 className="text-center text-5xl leading-tight tracking-wider  my-5 text-amber-400">About Us</h1>
      <div className="flex items-center justify-between ">
        <div className="text-xl text-gray-400 md:text-5xl cursor-pointer" onClick={handleLeftClick}>
          <BsChevronLeft />
        </div>
        <div className=" flex items-center gap-5 md:gap-20 justify-center h-96">
          {visibleCards.map((card, index) => (
            <Card key={index} heading={card.title} paragraph={card.description} />
          ))}
        </div>
        <div className="text-xl text-gray-400 md:text-5xl cursor-pointer" onClick={handleRightClick}>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}

export default About;