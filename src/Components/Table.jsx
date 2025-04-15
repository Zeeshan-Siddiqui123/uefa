import React from 'react'
// import { Outlet } from 'react-router-dom';

const Table = () => {
    const data = [
        {
          position: 1,
          club: "Liverpool",
          logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
          played: 8,
          won: 7,
          drawn: 0,
          lost: 1,
          for: 17,
          against: 5,
          gd: 12,
          points: 21,
          form: ["W", "W", "W", "W", "L"],
        },
        {
          position: 2,
          club: "Barcelona",
          logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
          played: 8,
          won: 6,
          drawn: 1,
          lost: 1,
          for: 28,
          against: 13,
          gd: 15,
          points: 19,
          form: ["W", "W", "W", "W", "D"],
        },
        {
          position: 3,
          club: "Arsenal",
          logo: "https://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg",
          played: 8,
          won: 6,
          drawn: 1,
          lost: 1,
          for: 16,
          against: 3,
          gd: 13,
          points: 19,
          form: ["L", "W", "W", "W", "W"],
        },
        {
            position: 4,
            club: "Inter",
            logo: "https://img.uefa.com/imgml/TP/teams/logos/32x32/50138.png",
            played: 8,
            won: 7,
            drawn: 0,
            lost: 1,
            for: 17,
            against: 5,
            gd: 12,
            points: 21,
            form: ["W", "W", "W", "W", "L"],
          },
          {
            position: 5,
            club: "Atleti",
            logo: "https://img.uefa.com/imgml/TP/teams/logos/32x32/50124.png",
            played: 8,
            won: 6,
            drawn: 1,
            lost: 1,
            for: 28,
            against: 13,
            gd: 15,
            points: 19,
            form: ["W", "W", "W", "W", "D"],
          },
          {
            position: 6,
            club: "Leverkusen",
            logo: "https://img.uefa.com/imgml/TP/teams/logos/32x32/50109.png",
            played: 8,
            won: 6,
            drawn: 1,
            lost: 1,
            for: 16,
            against: 3,
            gd: 13,
            points: 19,
            form: ["L", "W", "W", "W", "W"],
          },
          {
            position: 7,
            club: "Lille",
            logo: "https://img.uefa.com/imgml/TP/teams/logos/32x32/75797.png",
            played: 8,
            won: 7,
            drawn: 0,
            lost: 1,
            for: 17,
            against: 5,
            gd: 12,
            points: 21,
            form: ["W", "W", "W", "W", "L"]
          },
          {
            position: 8,
            club: "Aston Villa",
            logo: "https://img.uefa.com/imgml/TP/teams/logos/32x32/52683.png",
            played: 8,
            won: 6,
            drawn: 1,
            lost: 1,
            for: 16,
            against: 3,
            gd: 13,
            points: 19,
            form: ["L", "W", "W", "W", "W"],
          },
        
      ];
      const getFormColor = (result) => {
        switch (result) {
          case "W":
            return "bg-green-500" ;
          case "L":
            return "bg-red-500";
          case "D":
            return "bg-blue-500";
          default:
            return "bg-gray-300";
        }
      };      
    return (
        <div className='flex items-center justify-center'>
            <div className='w-[1390px] h-[600px] bg-white rounded-2xl'>
                <div className='mt-6'>
                <h2 className='text-2xl ml-6'>League Phase Table</h2>
                </div>
                <table className="min-w-full table-auto text-lg mt-10">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">#</th>
              <th className="p-3 text-left">Club</th>
              <th className="p-3">P</th>
              <th className="p-3">W</th>
              <th className="p-3">D</th>
              <th className="p-3">L</th>
              <th className="p-3">F</th>
              <th className="p-3">A</th>
              <th className="p-3">GD</th>
              <th className="p-3">Pts</th>
              <th className="p-3">Form</th>
            </tr>
          </thead>
          <tbody>
            {data.map((team) => (
              <tr key={team.club} className="border-b">
                <td className="p-3">{team.position}</td>
                <td className="p-3 flex items-center gap-2">
                  <img src={team.logo} alt={team.club} className="w-5 h-5" />
                  {team.club}
                </td>
                <td className="text-center">{team.played}</td>
                <td className="text-center">{team.won}</td>
                <td className="text-center">{team.drawn}</td>
                <td className="text-center">{team.lost}</td>
                <td className="text-center">{team.for}</td>
                <td className="text-center">{team.against}</td>
                <td className="text-center">{team.gd}</td>
                <td className="text-center font-bold">{team.points}</td>
                <td className="p-3 flex gap-1 ml-6">
                  {team.form.map((result, idx) => (
                    <span
                      key={idx}
                      className={`w-5 h-5  text-white rounded-full ${getFormColor(result)}`}
                    >{result.form}</span>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
            </div>
            {/* <Outlet/> */}
        </div>
        
    )
}

export default Table
