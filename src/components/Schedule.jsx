import logo from '../assets/logo.png';
import NavBar from './navBar';

const Day1 = [
  { id: 1, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 2, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 3, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 4, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 5, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 6, name: "Program A", Venue: "IT Dept", Time: "10 PM" }
];

const Day2 = [
  { id: 1, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 2, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 3, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 4, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 5, name: "Program A", Venue: "IT Dept", Time: "10 PM" },
  { id: 6, name: "Program A", Venue: "IT Dept", Time: "10 PM" }
];

function Schedule() {
  return (
    <div className="bg-[#F6E7D8] flex flex-col items-center flex-grow">
      <img src={logo} className='w-[10vh] mt-[-3vh]' alt="Logo" />
      <h1 className="text-4xl font-bold text-[#874356] mt-[-3vh] mb-3">Schedule</h1>

      <div className="bg-[#F68989] ml-5 mr-5 text-white p-3 mb-4 rounded-lg">10/06/2025</div>

      <div className="w-full max-w-md">
        {Day1.map((team) => (
          <div key={team.id} className="bg-[#874356] ml-5 mr-5 text-white p-3 mb-4 rounded-lg">
            <h2 className="text-xl">{team.name}</h2>
            <p>Venue: <span className="font-semibold">{team.Venue}</span></p>
            <p>Time: <span className="font-semibold">{team.Time}</span></p>
          </div>
        ))}
      </div>


      <div className="bg-[#F68989] ml-5 mr-5 text-white p-3 mb-4 rounded-lg">10/06/2025</div>

      <div className="w-full max-w-md">
        {Day1.map((team) => (
          <div key={team.id} className="bg-[#874356] ml-5 mr-5 text-white p-3 mb-4 rounded-lg">
            <h2 className="text-xl">{team.name}</h2>
            <p>Venue: <span className="font-semibold">{team.Venue}</span></p>
            <p>Time: <span className="font-semibold">{team.Time}</span></p>
          </div>
        ))}
      </div>

      <NavBar />
      <div className='h-[30vh]'></div>
    </div>
  );
}

export default Schedule;
