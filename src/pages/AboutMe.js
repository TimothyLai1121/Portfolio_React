import React, { useEffect, useState } from 'react';
import '../styles/aboutMe.css';
import avatar from '../assets/profile_pic.jpeg';

const AboutMe = () => {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const getCurrentTime = () => {
      const currentHour = new Date().getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setGreeting({
          english: 'Good Morning',
          spanish: 'Buenos días',
          vietnamese: 'Chào buổi sáng',
        });
      } else if (currentHour >= 12 && currentHour < 18) {
        setGreeting({
          english: 'Good Afternoon',
          spanish: 'Buenas tardes',
          vietnamese: 'Chào buổi chiều',
        });
      } else {
        setGreeting({
          english: 'Good Evening',
          spanish: 'Buenas noches',
          vietnamese: 'Chào buổi tối',
        });
      }
    };

    getCurrentTime();
  }, []);

  return (
    <section className="about-me-section">
      <h2 className="about-me-header">
        <span className="greeting">{greeting.english}</span> ,<span className="greeting">{greeting.spanish}</span> và <span className="greeting">{greeting.vietnamese}</span>
      </h2>
      <div className="about-me-content">
        <img src={avatar} alt="Developer" className="about-me-avatar" />
        <div className="about-me-text">
          <ul>
            <li>
              <span role="img" aria-label="Spanish">
                🇪🇸 Hola, hablo un poco de español. Me encanta aprender nuevos idiomas y el español es uno de ellos. Disfruto de la música y las películas en español, y estoy emocionado de seguir mejorando mis habilidades en este hermoso idioma.
              </span>
            </li>
            <li>
              <span role="img" aria-label="English">
                🇺🇸 Hi, I am very passionate about English. It has been my primary language since childhood, and I have always enjoyed reading and writing in English. It opened doors for me to connect with people from diverse backgrounds.
              </span>
            </li>
            <li>
              <span role="img" aria-label="Vietnamese">
                🇻🇳 Xin chào, tôi yêu Tiếng Việt Nam của tôi. Tiếng Việt là ngôn ngữ mẹ đẻ của tôi, và nó đã giúp tôi hiểu rõ văn hóa và giao tiếp với bạn bè và gia đình. Tôi thực sự hạnh phúc khi nói chuyện bằng tiếng Việt.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
