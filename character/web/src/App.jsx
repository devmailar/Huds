import { GiUsbKey } from 'react-icons/gi';
import './App.css';

export default function ({ name, license, team, avatar }) {
  const formattedLicense = license.replace('license:', '').slice(0, 4) + '...' + license.slice(-4);

  return (
    <div className="animate__animated animate__fadeInDown flex justify-center">
      {team.toUpperCase() === 'COPPERS' ? (
        <section
          id="Coppers Profile"
          className="flex flex-col gap-2 items-center m-8 py-6 px-8 bg-blue-400 bg-opacity-50 rounded-lg backdrop-blur-md"
        >
          <div className="flex gap-4 items-center">
            <div className="animate__animated animate__fadeInDown animate__delay-0.6s w-16 h-16 relative">
              {avatar && (
                <>
                  <img className="absolute z-10 bottom-7 w-12 ml-2" src="https://i.imgur.com/iAFLbco.png" alt="police-hat" />
                  <img
                    className="animate__animated animate__fadeInDown animate__delay-0.6s rounded-full absolute top-0 left-0 w-full h-full object-cover"
                    src={avatar}
                    alt="avatar"
                  />
                </>
              )}
            </div>

            <div className="flex flex-col gap-y-1">
              <div>
                <h2 className="text-xl text-white font-bold">
                  {'@'}
                  {name}
                </h2>
              </div>

              <div className="animate__animated animate__fadeInDown animate__delay-0.2s flex gap-1 items-center bg-blue-300 p-0.5 rounded-md">
                <GiUsbKey className="text-[0.8em]" color="#ffffff" />
                <code className="text-[0.8em] text-white">{formattedLicense}</code>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInDown animate__delay-0.4s">
            <div className="flex justify-between">
              <span className="font-black text-[0.75em] text-white">LVL 1</span>
              <span className="font-black text-[0.75em] text-white">LVL 2</span>
            </div>
            <div className="bg-blue-200 rounded-full w-28">
              <div className="bg-blue-300 w-1/3 p-1 rounded-full" />
            </div>
          </div>
        </section>
      ) : (
        <section
          id="Robbers Profile"
          className="flex flex-col gap-2 items-center m-8 py-6 px-8 bg-red-400 bg-opacity-50 rounded-lg  backdrop-blur-md"
        >
          <div className="flex gap-4 items-center">
            <div className="animate__animated animate__fadeInDown animate__delay-0.6s w-16 h-16 relative">
              {avatar && (
                <>
                  <img className="absolute z-10 bottom-4 w-12 ml-2" src="https://i.imgur.com/HCTEicP.png" alt="police-hat" />
                  <img
                    className="animate__animated animate__fadeInDown animate__delay-0.6s rounded-full absolute top-0 left-0 w-full h-full object-cover"
                    src={avatar}
                    alt="avatar"
                  />
                </>
              )}
            </div>

            <div className="flex flex-col gap-y-1">
              <div>
                <h2 className="text-xl text-white font-bold">
                  {'@'}
                  {name}
                </h2>
              </div>

              <div className="animate__animated animate__fadeInDown animate__delay-0.2s flex gap-1 items-center bg-red-300 p-0.5 rounded-md">
                <GiUsbKey className="text-[0.8em]" color="#ffffff" />
                <code className="text-[0.8em] text-white">{formattedLicense}</code>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInDown animate__delay-0.4s">
            <div className="flex justify-between">
              <span className="font-black text-[0.75em] text-white">LVL 1</span>
              <span className="font-black text-[0.75em] text-white">LVL 2</span>
            </div>
            <div className="bg-red-200 rounded-full w-20">
              <div className="bg-red-300 w-1/3 p-1 rounded-full" />
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
