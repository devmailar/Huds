import './App.css';

export default function ({ data }) {
  const hasPlayers = data && data.length > 0;

  return (
    <div className="animate__animated animate__backInUp flex justify-start items-center h-screen">
      <article className="bg-slate-900 rounded-sm shadow-lg w-96 m-4">
        <div className="flex flex-col gap-0.5 p-3">
          <h2 className="text-3xl text-gray-200 font-bold">Scoreboard</h2>
          <div className="flex gap-4">
            <span className="text-primary font-black">({data?.length}/32)</span>
            <span className="text-primary font-black">up - {data.uptime || '4 hours, 32 minutes'}</span>
          </div>
        </div>
        {hasPlayers ? (
          <ul className="flex flex-col gap-1">
            {data.map(({ id, name, job }, index) => (
              <li
                key={index}
                className={`flex justify-between items-center ${
                  index % 2 === 0 ? 'bg-slate-700' : 'bg-slate-800'
                } gap-2 pl-4 pr-4 pt-2 pb-2 w-full shadow-lg`}
              >
                <div className="flex gap-4">
                  <p className="text-gray-300">{name}</p>
                  <em className="text-gray-400">{job}</em>
                </div>

                <span className="text-gray-400">[{id}]</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="p-3">
            <p className="text-primary font-black">Loading players...</p>
          </div>
        )}
      </article>
    </div>
  );
}
