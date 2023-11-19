import React from 'react';
import { GiBank, GiHeavyBullets, GiCash, GiUsbKey } from 'react-icons/gi';
import './App.css';

export default function ({ full_name, license, profile_pic, cash, bank, loadout }) {
  const formattedLicense = license.replace('license:', '').slice(0, 4) + '...' + license.slice(-4);

  /**
   * This function returns string, ex: if value is 1900 then we return $1,900,00
   * @param {number} value
   * @returns {string}
   */
  function handleFormatAmount(value) {
    return Intl.NumberFormat('en', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  }

  return (
    <div className="flex flex-col gap-40">
      <div className="animate__animated animate__fadeInDown flex justify-end items-center w-full">
        <section
          id="Profile"
          className="flex gap-4 items-center mt-10 mr-10"
        >
          <div className="animate__animated animate__fadeInDown animate__delay-0.6s w-20 h-20 relative">
            {profile_pic && (
              <img
                className="animate__animated animate__fadeInDown animate__delay-0.6s rounded-full absolute top-0 left-0 w-full h-full object-cover shadow-md shadow-black"
                src={profile_pic}
                alt="pfp"
              />
            )}
          </div>
          <div className="flex flex-col gap-y-1">
            <div>
              <h2 className="text-xl text-slate-50 font-bold lowercase">
                {'@'}
                {full_name}
              </h2>
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-0.2s flex gap-1 items-center bg-gray-500 opacity-60 px-2 py-0.5 rounded-md">
              <GiUsbKey
                className="text-[0.8em]"
                color="#ffffff"
              />
              <code className="text-[0.8em] text-white">{formattedLicense}</code>
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-0.4s flex gap-1 items-center bg-[#4191b3] border-[#397f9d] opacity-60 px-2 py-0.5 rounded-md ">
              <GiBank
                className="text-[0.8em] "
                color="#ffffff"
              />
              <code className="text-[0.8em] text-white">{handleFormatAmount(bank)}</code>
            </div>
            <div className="animate__animated animate__fadeInDown animate__delay-0.3s flex gap-1 items-center bg-[#3fa65b] border-[#358b4c] opacity-60 px-2 py-0.5 rounded-md ">
              <GiCash
                className="text-[0.8em]"
                color="#ffffff"
              />
              <code className="text-[0.8em] text-white">{handleFormatAmount(cash)}</code>
            </div>
          </div>
        </section>
      </div>

      <div className="animate__animated animate__fadeInDown flex justify-end items-center w-full">
        <section
          id="Loadout"
          className="flex flex-col gap-4 justify-center mr-10"
        >
          {loadout.map((loadoutItem) => (
            <div
              key={loadoutItem.id}
              className="flex flex-col gap-1 justify-center p-1"
            >
              <div>
                <h2 className="font-semibold text-[0.8em] text-white uppercase border-b-[1px] border-slate-200 ">{loadoutItem.label}</h2>
              </div>
              <div className="flex gap-1 items-center">
                <GiHeavyBullets className="text-white" />
                <code className="font-normal text-[0.8em] text-white">{loadoutItem.amount}</code>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}
