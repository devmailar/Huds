import { Gi3DHammer, GiBank, GiCash } from 'react-icons/gi';

export default function ({ cash, bank, job }) {
  const convertCurrency = (value) => {
    return Intl.NumberFormat('FI', {
      style: 'currency',
      currency: 'EUR',
      maximumFractionDigits: 1,
    }).format(value);
  };

  return (
    <div className="animate__animated animate__fadeInRight flex justify-end items-center h-screen">
      <aside className="flex flex-col justify-center items-end gap-3 m-4">
        <article className="bg-[#49be25] rounded-full shadow-xl w-fit">
          <div className="flex flex-row items-center justify-between gap-2 w-full">
            <div className="flex rounded-full p-4 bg-gray-900">
              <GiCash
                className="text-3xl"
                color="#49be25"
              />
            </div>
            <p className="text-2xl text-slate-200 font-black pr-3">
              {convertCurrency(cash)}
            </p>
          </div>
        </article>

        <article className="bg-[#51a7cc] rounded-full shadow-xl w-fit">
          <div className="flex flex-row items-center justify-between gap-2 w-full">
            <div className="flex rounded-full p-4 bg-gray-900">
              <GiBank
                className="text-3xl"
                color="#51a7cc"
              />
            </div>
            <p className="text-2xl text-slate-200 font-black pr-3">
              {convertCurrency(bank)}
            </p>
          </div>
        </article>

        <article className="bg-[#cc7451] rounded-full shadow-xl w-fit">
          <div className="flex flex-row items-center justify-between gap-2 w-full">
            <div className="flex rounded-full p-4 bg-gray-900">
              <Gi3DHammer
                className="text-3xl"
                color="#cc7451"
              />
            </div>
            <p className="text-2xl text-slate-200 font-black pr-3 capitalize">
              {job}
            </p>
          </div>
        </article>
      </aside>
    </div>
  );
}
