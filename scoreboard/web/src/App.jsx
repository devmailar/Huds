import './App.css';

export default function (heist) {
  const teamCoppers = heist.teams.find((team) => team.name.toUpperCase() === 'COPPERS');
  const teamRobbers = heist.teams.find((team) => team.name.toUpperCase() === 'ROBBERS');

  return (
    <div className="animate__animated animate__backInUp flex items-center justify-between h-screen">
      <div className="flex flex-col gap-2 m-8">
        <img className="w-24 mx-auto" src="https://i.imgur.com/iAFLbco.png" alt="copper-hat" />

        <div className="flex flex-col gap-2 items-start bg-blue-300 bg-opacity-50">
          {teamCoppers.players.map((player) => (
            <article key={player.license} className="flex gap-2 items-center px-6 p-2 w-fit bg-blue-500 rounded-sm shadow-sm">
              <img className="w-10 h-10 rounded-full" src={player.avatar} alt="avatar" />
              <p className="text-lg text-white font-black">{player.name}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2 m-8">
        <img className="w-24 mx-auto" src="https://i.imgur.com/HCTEicP.png" alt="robber-hat" />

        <div className="flex flex-col gap-2 items-end bg-red-300 bg-opacity-50">
          {teamRobbers.players.map((player) => (
            <article key={player.license} className="flex flex-row-reverse gap-2 items-center px-6 p-2 w-fit bg-red-500 rounded-sm shadow-sm">
              <img className="img-hor-vert w-10 h-10 rounded-full" src={player.avatar} alt="avatar" />
              <p className="text-lg text-white font-black">{player.name}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
