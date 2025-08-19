import React from "react";
import './contact-me.css';



const ContactMe = () => {
  return (
    <section className="contact-me" id='contact'>
      <h2>CONTÁCTAME</h2>
      <div className="contact-icons">
        <a
          href="https://www.linkedin.com/in/santiago-rodríguez-tato-09ba56319/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0V8.98zM8.99 8.98H14v2.08h.08c.7-1.26 2.42-2.59 4.98-2.59 5.33 0 6.31 3.5 6.31 8.05V24h-5v-6.77c0-1.61-.03-3.69-2.25-3.69-2.26 0-2.6 1.77-2.6 3.57V24h-5V8.98z" />
          </svg>
        </a>

        <a href="mailto:santi.rodriguez.2004.sr@gmail.com">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 13.065L.015 6.42A2 2 0 0 1 2 4h20a2 2 0 0 1 1.985 2.42L12 13.065zm0 2.47l12-6.645V20a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-11.11l12 6.645z" />
          </svg>
        </a>

        <a
          href="https://github.com/santirod06"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.94c.58.11.79-.25.79-.56v-2.17c-3.2.69-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.69 1.25 3.34.95.1-.75.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.45.11-3.02 0 0 .97-.31 3.19 1.18a11.06 11.06 0 0 1 5.8 0c2.22-1.49 3.19-1.18 3.19-1.18.62 1.57.23 2.73.11 3.02.74.8 1.18 1.83 1.18 3.09 0 4.42-2.68 5.39-5.24 5.67.41.35.77 1.05.77 2.12v3.15c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default ContactMe;
