import { GiBriefcase, GiBank, GiCash } from 'react-icons/gi';
import './App.css';

export default function ({ cash, bank, job }) {
  const convertCurrency = (value) => {
    return Intl.NumberFormat('FI', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 1,
    }).format(value);
  };

  return (
    <div className="animate__animated animate__backInUp flex justify-end items-center h-screen">
      <aside className="flex flex-col items-end gap-3 m-4">
        <article className="bg-[#49be25] rounded-full shadow-xl w-fit">
          <div className="flex items-center gap-2">
            <div className="flex p-4 bg-gray-900 rounded-full">
              <GiCash
                className="text-3xl"
                color="#49be25"
              />
            </div>
            <p className="text-2xl text-slate-200 font-black pr-4">{convertCurrency(cash)}</p>
          </div>
        </article>

        <article className="bg-[#51a7cc] rounded-full shadow-xl w-fit">
          <div className="flex items-center gap-2">
            <div className="flex p-4 bg-gray-900 rounded-full">
              <GiBank
                className="text-3xl"
                color="#51a7cc"
              />
            </div>
            <p className="text-2xl text-slate-200 font-black pr-4">{convertCurrency(bank)}</p>
          </div>
        </article>

        <article className="bg-[#cc7451] rounded-full shadow-xl w-fit">
          <div className="flex items-center gap-2">
            <div className="flex p-4 bg-gray-900 rounded-full">
              <GiBriefcase
                className="text-3xl"
                color="#cc7451"
              />
            </div>
            <p className="text-2xl text-slate-200 font-black pr-4 capitalize">{job}</p>
          </div>
        </article>
      </aside>
    </div>
  );
}
