import { GiUsbKey, GiBank, GiCash } from 'react-icons/gi';
import './App.css';

export default function ({ full_name, license, cash, bank }) {
  /**
   *
   * @param {number} value
   * @returns {string}
   */
  const convertCurrency = (value) => {
    return Intl.NumberFormat('EN', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="animate__animated animate__fadeInDown flex justify-end items-start w-full m-14">
      <div className="flex gap-4 items-center w-80 mr-10">
        <div className="animate__animated animate__fadeInDown animate__delay-0.6s w-20 h-20 relative">
          <img
            className="rounded-full absolute top-0 left-0 w-full h-full object-cover shadow-md shadow-black"
            src="https://sumo.app/works/cute-frog-pfp-2jpg/image"
            alt="pfp"
          />
        </div>
        <div className="flex flex-col gap-y-1">
          <div>
            <h2 className="text-xl text-slate-50 font-bold lowercase">#{full_name}</h2>
          </div>
          <div className="animate__animated animate__fadeInDown animate__delay-0.2s flex gap-1 items-center bg-gray-600 opacity-60 px-2 py-0.5 rounded-md">
            <GiUsbKey
              className="text-[0.8em]"
              color="#ffffff"
            />
            <code className="text-[0.8em] text-white">{license.replace('license:', '').slice(0, 4) + '...' + license.slice(-4)}</code>
          </div>
          <div className="animate__animated animate__fadeInDown animate__delay-0.4s flex gap-1 items-center bg-[#4191b3] border-[#397f9d] opacity-60 px-2 py-0.5 rounded-md ">
            <GiBank
              className="text-[0.8em] "
              color="#ffffff"
            />
            <code className="text-[0.8em] text-white">{convertCurrency(bank)}</code>
          </div>
          <div className="animate__animated animate__fadeInDown animate__delay-0.3s flex gap-1 items-center bg-[#3fa65b] border-[#358b4c] opacity-60 px-2 py-0.5 rounded-md ">
            <GiCash
              className="text-[0.8em]"
              color="#ffffff"
            />
            <code className="text-[0.8em] text-white">{convertCurrency(cash)}</code>
          </div>
        </div>
      </div>
    </div>
  );
}
