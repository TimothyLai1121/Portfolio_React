import React, { useState, useEffect } from 'react';
import '../styles/footer.css';

const Footer = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch('https://api.quotable.io/random');
        const data = await response.json();
        const randomQuote = data.content;
        setQuote(randomQuote);
      } catch (error) {
        console.log('Error fetching quote:', error);
      }
    };

    fetchQuote(); // Fetch initial quote

    const interval = setInterval(fetchQuote, 15000); // Fetch new quote every 15 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, []);

  return (
    <footer className="footer">
      <div className="quote">{quote}</div>
      <div className="footer-content">
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://stackoverflow.com/" target="_blank" rel="noopener noreferrer">Stack Overflow</a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
       
      </div>
    </footer>
  );
  
};

export default Footer;
