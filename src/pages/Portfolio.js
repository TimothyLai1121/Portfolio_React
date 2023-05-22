import React, { useEffect, useRef } from 'react';
import GitHubCalendar from 'github-calendar';
import 'github-calendar/dist/github-calendar-responsive.css';

const Portfolio = () => {
  const githubCalendarRef = useRef(null);

  useEffect(() => {
    GitHubCalendar(githubCalendarRef.current, 'TimothyLai1121', { responsive: true });
  }, []);

  return (
    <section>
      <h2>Portfolio</h2>
      <div className="calendar" ref={githubCalendarRef}>
        Loading the data just for you.
      </div>
    </section>
  );
};

export default Portfolio;
