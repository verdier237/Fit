import React, { useState, useEffect } from 'react';

const Iaview = (props) => {
  const { src, data } = props;
  const [isTyping, setIsTyping] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const typingTimer = setTimeout(() => {
      setIsTyping(false);
    }, 2000); // Delay

    return () => clearTimeout(typingTimer);
  }, [data]);

  return (
<div className="message flex mb-4">
  <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0">
    <img className="mx-auto mb-4 w-10 h-10 rounded-full" src={src} alt="Pamela" />
  </div>
  <div className="ml-4 bg-gray-300 p-3 rounded-lg max-w-xs w-auto">
  {isTyping ? (
          <div className="animate-pulse h-3 w-3 rounded-full bg-gray-700">...</div>
        ) : (
          <p className="text-sm text-black animate-typing overflow-hidden text-clip">
            {isExpanded || data.length <= maxLength ? data : `${data.slice(0, maxLength)}...`}
          </p>
        )}
        {data.length > maxLength && (
          <button
            onClick={toggleExpand}
            className="text-blue-500 text-sm mt-1 hover:underline focus:outline-none"
          >
            {isExpanded ? 'Read less' : 'Read more'}
          </button>
        )}
    <div className="mt-2 flex space-x-2">
      <button className="p-1 rounded-full bg-gray-300  text-white hover:bg-green-200" title="Positive">
      <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11c.889-.086 1.416-.543 2.156-1.057a22.323 22.323 0 0 0 3.958-5.084 1.6 1.6 0 0 1 .582-.628 1.549 1.549 0 0 1 1.466-.087c.205.095.388.233.537.406a1.64 1.64 0 0 1 .384 1.279l-1.388 4.114M7 11H4v6.5A1.5 1.5 0 0 0 5.5 19v0A1.5 1.5 0 0 0 7 17.5V11Zm6.5-1h4.915c.286 0 .372.014.626.15.254.135.472.332.637.572a1.874 1.874 0 0 1 .215 1.673l-2.098 6.4C17.538 19.52 17.368 20 16.12 20c-2.303 0-4.79-.943-6.67-1.475"/>
</svg>

      </button>
      <button className="p-1 rounded-full bg-gray-300  text-white hover:bg-red-200" title="Negative">
      <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 13c-.889.086-1.416.543-2.156 1.057a22.322 22.322 0 0 0-3.958 5.084 1.6 1.6 0 0 1-.582.628 1.549 1.549 0 0 1-1.466.087 1.587 1.587 0 0 1-.537-.406 1.666 1.666 0 0 1-.384-1.279l1.389-4.114M17 13h3V6.5A1.5 1.5 0 0 0 18.5 5v0A1.5 1.5 0 0 0 17 6.5V13Zm-6.5 1H5.585c-.286 0-.372-.014-.626-.15a1.797 1.797 0 0 1-.637-.572 1.873 1.873 0 0 1-.215-1.673l2.098-6.4C6.462 4.48 6.632 4 7.88 4c2.302 0 4.79.943 6.67 1.475"/>
</svg>

      </button>
      <button className="p-1 rounded-full bg-gray-300  text-white hover:bg-blue-200" title="Suggestion">
      <svg class="w-4 h-4 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 9a3 3 0 0 1 3-3m-2 15h4m0-3c0-4.1 4-4.9 4-9A6 6 0 1 0 6 9c0 4 4 5 4 9h4Z"/>
</svg>

      </button>
    </div>
  </div>
</div>

  );
};

export default Iaview;
