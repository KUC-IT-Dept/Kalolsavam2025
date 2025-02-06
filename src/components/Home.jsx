import logo from '../assets/logo.png';
import NavBar from './navBar';

const data = [
  { id: 1, name: "Team A", score: 10, position: 0 },
  { id: 2, name: "Team B", score: 20, position: 0 },
  { id: 3, name: "Team C", score: 30, position: 0 },
  { id: 4, name: "Team D", score: 30, position: 0 },
  { id: 5, name: "Team E", score: 30, position: 0 },
  { id: 6, name: "Team F", score: 90, position: 0 }
];

function Home() {
  const sortedData = data.sort((a, b) => b.score - a.score);
  sortedData.forEach((team, index) => {
    team.position = index + 1;
  });

  return (
    <div className="bg-[#F6E7D8] flex flex-col items-center flex-grow">
      <img src={logo} className='w-[10vh] mt-[-3vh]' alt="Logo" />
      <h1 className="text-4xl font-bold text-[#874356] mt-[-3vh] mb-3">സകവാഴ്‌വ്</h1>
      <div className="w-full max-w-md">
        {sortedData.map((team) => (
          <div key={team.id} className="bg-[#874356] ml-5 mr-5 text-white p-4 mb-4 rounded-lg">
            <h2 className="text-xl">{team.name}</h2>
            <p>Total Score: <span className="font-semibold">{team.score}</span></p>
            <p>Position: <span className="font-semibold">{team.position}</span></p>
          </div>
        ))}
      </div>
      <NavBar />
    </div>
  );
}

export default Home;
