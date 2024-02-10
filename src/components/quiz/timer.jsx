import React, { useEffect, useState } from 'react';

const TimeApp = ({ onStopTimer, stopTimer }) => {
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let intervalId;

    if (!stopTimer) {
      const startTime = Date.now();

      intervalId = setInterval(() => {
        const currentTime = Date.now();
        const elapsedMilliseconds = currentTime - startTime;

        setElapsedTime(elapsedMilliseconds);
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [stopTimer]);

  useEffect(() => {
    if (onStopTimer) {
      onStopTimer({ elapsedTime, stopTimer });
    }
  }, [elapsedTime, onStopTimer, stopTimer]);

  const formatTimeComponent = (component) => {
    return component < 10 ? `0${component}` : component;
  };

  const getFormattedTime = () => {
    const seconds = Math.floor(elapsedTime / 1000);
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    return `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(remainingSeconds)}`;
  };

  return (
    <div>
      <p id="elapsedTime" style={{ textAlign: 'right' }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill=" #04AA6D"
          className="bi bi-clock"
          viewBox="0 0 16 16"
        >
          <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z" />
          <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0" />
        </svg>
        : {getFormattedTime()}
      </p>
    </div>
  );
};

export default TimeApp;
