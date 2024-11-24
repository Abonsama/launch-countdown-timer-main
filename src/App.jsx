import { useState, useRef, useEffect } from "react";
import facebook from './assets/icon-facebook.svg'
import instagram from './assets/icon-instagram.svg'
import pinterest from './assets/icon-pinterest.svg'

export default function App() {
  const [days, setDays] = useState(8);
  const [hours, setHours] = useState(21);
  const [minutes, setMinutes] = useState(55);
  const [seconds, setSeconds] = useState(41);

  const daysRef = useRef();
  const hoursRef = useRef();
  const minutesRef = useRef();
  const secondsRef = useRef();

  function handleDaysChange() {
    setDays(Number(daysRef.current.value) || 0);
  }

  function handleHoursChange() {
    setHours(Number(hoursRef.current.value) || 0);
  }

  function handleMinutesChange() {
    setMinutes(Number(minutesRef.current.value) || 0);
  }

  function handleSecondsChange() {
    setSeconds(Number(secondsRef.current.value) || 0);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          if (minutes > 0) {
            setMinutes((prevMinutes) => prevMinutes - 1);
            return 59;
          } else if (hours > 0) {
            setHours((prevHours) => prevHours - 1);
            setMinutes(59);
            return 59;
          } else if (days > 0) {
            setDays((prevDays) => prevDays - 1);
            setHours(23);
            setMinutes(59);
            return 59;
          } else {
            clearInterval(interval);
            return 0;
          }
        }
      });
    }, 1000);
    return () => clearInterval(interval); 
  }, [minutes, hours, days,seconds]);
  return(
    <main>
      <section>
    <h1>We&apos;re launching soon</h1>
    <div className="component">
      <div className="wrapper">
        <div>
          <input value={days<=9?`0${days}`:days} ref={daysRef} onChange={handleDaysChange}/>
        </div>
        Days
      </div>
      <div className="wrapper">
        <div>
          <input value={hours<=9?`0${hours}`:hours} ref={hoursRef} onChange={handleHoursChange}/>
        </div>
      Hours
      </div>
      <div className="wrapper">
        <div>
          <input value={minutes<=9?`0${minutes}`:minutes} ref={minutesRef}onChange={handleMinutesChange}/>
        </div>
      Minutes
      </div>
      <div className="wrapper">
        <div>
          <input value={seconds<=9?`0${seconds}`:seconds} ref={secondsRef} onChange={handleSecondsChange}/>
        </div>
      Seconds
      </div>
    </div>
      </section>
      <footer>
        <ul>
          <li><a href="https://facebook.com"><img src={facebook} alt="facebook link"/></a></li>
          <li><a href="https://instagram.com"><img src={instagram} alt="instagram link"/></a></li>
          <li><a href="https://pinterest.com"><img src={pinterest} alt="pinterest link"/></a></li>
        </ul>
      </footer>
    </main>
  )
}