import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react'

const Standings = () => {
  const [standings, setStandings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStandings = async () => {
      try {
        const response = await axios.get(
          'https://livescore-api.com/api-client/competitions/standings.json',
          {
            params: {
              competition_id: 2,
              key: '4i8tTZxkQAxUxowe',
              secret: 'zxfFipF5MrfOaTVfc4I53gpUQWOnllCU'
            }
          }
        );
        setStandings(response.data.data.table); // adjust this based on actual API structure
        setLoading(false);
      } catch (error) {
        console.error('Error fetching standings:', error);
        setLoading(false);
      }
    };

    fetchStandings();
  }, []);

  if (loading) return <p className='text-white'>Loading...</p>;

  return (
    <div className='text-white'>
      <h2 className='text-lg font-bold mb-4'>UEFA Champions League Standings</h2>
      <ul>
        {standings.map((team, index) => (
          <li key={index} className='mb-2'>
            {index + 1}. {team.name} - {team.points} pts - {team.matches} matches {team.lost} lost {team.won} won {team.drawn} drawn
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Standings;
