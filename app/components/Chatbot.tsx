'use client';
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    // Create a script element to load the Chatbase embed script
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';  // Chatbase embed script URL
    script.async = true;
    script.id = 'chatbase-script';
    script.setAttribute('data-domain', 'www.chatbase.co');  // Add domain or other data attributes if needed

    // Append the script to the body
    document.body.appendChild(script);

    // Log to confirm script is being loaded
    script.onload = () => {
      console.log('Chatbase script loaded successfully');
    };

    // Cleanup function to remove the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="chatbase-chatbot"
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: '1000',
      }}
    ></div>
  );
};

export default Chatbot;
