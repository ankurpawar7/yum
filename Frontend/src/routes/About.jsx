import React from 'react';

const About = () => {
  return (
    <div className='max-w-2xl mx-auto p-5 text-center'>
      <h1 className='text-3xl font-bold mb-4'>About Us</h1>
      <p className='mb-4'>
        Welcome to Yum! We're a passionate team dedicated to celebrating the joy
        of cooking. Our platform is designed for food lovers of all skill
        levels, offering a wide range of delicious recipes from around the
        world.
      </p>
      <h2 className='text-2xl font-semibold mb-2'>Our Mission</h2>
      <p className='mb-4'>
        At Yum, we believe that cooking should be fun and accessible. Whether
        you’re a beginner or an experienced chef, our goal is to inspire you to
        explore new flavors and dishes.
      </p>
      <h2 className='text-2xl font-semibold mb-2'>What We Offer</h2>
      <ul className='list-disc list-inside mb-4'>
        <li>
          <strong>Diverse Recipes:</strong> Discover a variety of recipes that
          cater to different tastes and dietary needs.
        </li>
        <li>
          <strong>Community Engagement:</strong> Join our food-loving community
          to share your culinary creations and tips with others.
        </li>
        <li>
          <strong>Cooking Inspiration:</strong> Find articles and resources to
          help you improve your cooking skills and try new techniques.
        </li>
      </ul>
      <h2 className='text-2xl font-semibold mb-2'>Join Us on This Journey</h2>
      <p className='mb-4'>
        We invite you to embark on this culinary adventure with us. Whether
        you’re looking for a new recipe to try, tips on improving your cooking
        skills, or simply a place to connect with fellow food enthusiasts, Yum
        is here for you. Together, let’s make every meal a celebration!
      </p>
      <p>
        Join our community of food lovers, share your culinary creations, and
        embark on a flavorful journey with us!
      </p>
    </div>
  );
};

export default About;
