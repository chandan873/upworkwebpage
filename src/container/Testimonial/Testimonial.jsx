import React, { useState, useEffect } from 'react';

const App = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchRandomUser = async () => {
      try {
        const userResponse = await fetch('https://randomuser.me/api/?results=5&nat=us');
        const userData = await userResponse.json();
        const users = userData.results.map(result => ({
          clientName: `${result.name.first} ${result.name.last}`,
          avatar: result.picture.large
        }));

        const reviewResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
        const reviewData = await reviewResponse.json();
        const randomReviews = reviewData
          .filter(review => review.userId % 2 === 0) // Filter reviews by even user IDs to ensure English reviews
          .map(review => ({
            content: review.body,
            rating: Math.max(Math.floor(Math.random() * 2) + 4, 4) // Generate random rating between 4 and 5
          }));

        // Shuffle randomReviews array to mix random reviews
        randomReviews.sort(() => Math.random() - 0.5);

        // Merge user data with random reviews
        const mergedData = users.map((user, index) => ({
          ...user,
          ...randomReviews[index]
        }));

        setReviews(mergedData);
      } catch (error) {
        console.error('Error fetching random data:', error);
      }
    };

    fetchRandomUser();

    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds (adjust as needed)
    
    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, [reviews.length]);

  return (
    <div className='h-fit w-full m-auto py-16 px-4 relative group'>
       <h2 className="head-text mb-20">
        What our Client <span>Says</span>
      </h2>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img className="h-48 w-full object-cover md:w-48" src={reviews[currentIndex]?.avatar} alt="Client Avatar" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{reviews[currentIndex]?.clientName}</div>
              <p className="mt-2 text-gray-500">{reviews[currentIndex]?.content}</p>
              <div className="mt-4 flex items-center">
                {Array.from({ length: reviews[currentIndex]?.rating || 5 }, (_, index) => (
                  <svg key={index} className={`h-6 w-6 fill-current text-yellow-500 ${index >= reviews[currentIndex]?.rating ? 'text-gray-300' : ''}`} viewBox="0 0 20 20">
                    <path d="M10 1l2.87 5.76 6.42.93-4.65 4.53 1.1 6.41L10 15.4l-5.75 3.04 1.1-6.41-4.65-4.53 6.42-.93L10 1z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
