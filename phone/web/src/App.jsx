import { useEffect, useState } from 'react';
import {
  GiBriefcase,
  GiCarKey,
  GiCityCar,
  GiHomeGarage,
  GiLightBackpack,
  GiNurseMale,
  GiPiggyBank,
  GiPoliceOfficerHead,
  GiRingingAlarm,
  GiVibratingSmartphone,
} from 'react-icons/gi';
import { TfiHelpAlt } from 'react-icons/tfi';
import './App.css';

export default function App({ data }) {
  const [isLocked, setIsLocked] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  const isPolice = ['cadet', 'officer', 'sergeant', 'lieutenant', 'captain', 'chief'].some((rank) => {
    return data.job.toLowerCase().includes(rank);
  });

  const isMedic = ['ems', 'doctor', 'nurse'].some((rank) => {
    return data.job.toLowerCase().includes(rank);
  });

  const isEmergencyWorker = isPolice || isMedic;
  const isNotEmergencyWorker = !isPolice && !isMedic;

  const action = async (trigger) => {
    switch (trigger) {
      case 'lock': {
        console.log('lock');
        break;
      }
      case 'unlock': {
        console.log('unlock');
        break;
      }
      case 'garage': {
        console.log('garage');
        break;
      }
      case 'carMenu': {
        console.log('carMenu');
        break;
      }
      case 'jobs': {
        console.log('jobs');
        break;
      }
      case 'inventory': {
        console.log('inventory');
        break;
      }
      case 'bank': {
        console.log('bank');
        break;
      }
      case 'help': {
        console.log('help');
        break;
      }
      case 'callPolice': {
        console.log('callPolice');
        break;
      }
      case 'callMedic': {
        console.log('callMedic');
        break;
      }
      case 'panic': {
        console.log('panic');
        break;
      }
      case 'policeMenu': {
        console.log('policeMenu');
        break;
      }
      case 'medicMenu': {
        console.log('medicMenu');
        break;
      }
      default: {
        console.log('default');
      }
    }
  };

  const toggleLock = () => {
    setIsLocked((prevState) => !prevState);
    if (isLocked) {
      action('unlock');
    } else {
      action('lock');
    }
  };

  useEffect(() => {
    const handleKeyDown = async (event) => {
      const ESC = 27;

      if (event.keyCode === ESC) {
        await fetch('https://phone/exit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        });
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="animate__animated animate__rotateInUpLeft flex justify-end items-end h-screen">
      <div className="flex justify-between bg-[#161823] shadow-[#2c2f4e] shadow-2xl w-[15rem] h-[28rem] mr-40 mb-8 rounded-lg">
        <div className="border-8 border-[#12151e] p-2 w-full rounded-lg">
          <div className="flex justify-between text-white p-2">
            <h1 className="font-bold text-xl">Phone</h1>
            <p className="font-bold text-xl">
              {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
          <div className="flex justify-center gap-2 p-4 bg-[#09090e] w-full h-auto">
            <div className="flex flex-col justify-start gap-2">
              <button
                className="btn btn-primary bg-red-800 rounded-none p-3"
                onClick={toggleLock}
              >
                <GiCarKey className="text-3xl" />
              </button>
              <button
                className="btn btn-primary bg-sky-800 rounded-none p-3"
                onClick={(e) => action('garage')}
              >
                <GiHomeGarage className="text-3xl" />
              </button>
              <button
                className="btn btn-primary bg-gray-600 rounded-none p-3"
                onClick={(e) => action('carMenu')}
              >
                <GiCityCar className="text-3xl" />
              </button>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <button
                className="btn btn-primary bg-yellow-800 rounded-none p-3"
                onClick={(e) => action('jobs')}
              >
                <GiBriefcase className="text-3xl" />
              </button>
              <button
                className="btn btn-primary rounded-none p-3"
                onClick={(e) => action('inventory')}
              >
                <GiLightBackpack className="text-3xl" />
              </button>
              <button
                className="btn btn-primary bg-green-800 rounded-none p-3"
                onClick={(e) => action('bank')}
              >
                <GiPiggyBank className="text-3xl" />
              </button>
            </div>
            <div className="flex flex-col justify-start gap-2">
              <button
                className="btn btn-primary bg-black rounded-none p-3"
                onClick={(e) => action('help')}
              >
                <TfiHelpAlt className="text-3xl" />
              </button>
              {isEmergencyWorker && (
                <button
                  className="btn btn-primary bg-gray-800 rounded-none p-3"
                  onClick={(e) => action('panic')}
                >
                  <GiRingingAlarm className="text-3xl" />
                </button>
              )}

              {isPolice && (
                <button
                  className="btn btn-primary bg-blue-800  rounded-none p-3"
                  onClick={(e) => action('policeMenu')}
                >
                  <GiPoliceOfficerHead className="text-3xl" />
                </button>
              )}
              {isMedic && (
                <button
                  className="btn btn-primary bg-red-800  rounded-none p-3"
                  onClick={(e) => action('medicMenu')}
                >
                  <GiNurseMale className="text-3xl" />
                </button>
              )}

              {isNotEmergencyWorker && (
                <>
                  <button
                    className="btn btn-primary bg-blue-800  rounded-none p-3"
                    onClick={(e) => action('callPolice')}
                  >
                    <GiVibratingSmartphone className="text-3xl" />
                  </button>
                  <button
                    className="btn btn-primary bg-red-800  rounded-none p-3"
                    onClick={(e) => action('callMedic')}
                  >
                    <GiVibratingSmartphone className="text-3xl" />
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
