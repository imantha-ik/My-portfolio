import React from 'react';
import { useNavigate } from 'react-router-dom';

const FilmResourcesPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white dark:bg-background text-center px-4 py-20 text-foreground dark:text-white">
      {/* Title */}
      <h1 className="text-4xl font-extrabold mb-6">Thinking Futures.</h1>

      {/* Paragraph */}
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground dark:text-gray-300 mb-6">
        If the documentary resonates with you, please consider donating using the button below.
        <br />
        100% of donations go directly to the schools featured in the documentary so they can continue their invaluable work.
      </p>

      {/* Donate Button */}
      <button
        onClick={() => navigate('/donate')}
        className="bg-teal-500 hover:bg-teal-600 text-white font-semibold px-6 py-2 rounded-lg mb-10 transition"
      >
        Donate
      </button>

      {/* Embedded Video */}
      <div className="flex justify-center">
        <video
          controls
          className="w-full max-w-4xl rounded-lg shadow-lg"
        >
          <source src="/videos/thinking_futures.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default FilmResourcesPage;

