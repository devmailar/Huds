import './App.css';

export default function ({ team, avatar }) {
  const isCoppers = team.toUpperCase() === 'COPPERS';

  return (
    <div className="animate__animated animate__fadeInDown flex justify-end">
      <div className="animate__animated animate__fadeInDown animate__delay-0.6s m-8 w-28 h-28">
        {avatar && (
          <>
            <img
              className="absolute z-10 bottom-12 w-20 ml-4"
              src={isCoppers ? 'https://i.imgur.com/iAFLbco.png' : 'https://i.imgur.com/HCTEicP.png'}
            />
            <img
              className="animate__animated animate__fadeInDown animate__delay-0.6s rounded-full absolute top-0 left-0 w-full h-full object-cover"
              src={avatar}
              alt="avatar"
            />
          </>
        )}
      </div>
    </div>
  );
}
