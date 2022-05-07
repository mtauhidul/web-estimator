import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import './app.css';

const App = () => {
  const [data, setData] = useState({
    participants: 0,
    hoursPerSession: 0,
    sessionsPerWeek: 0,
    totalSessions: 0,
  });
  const [cost, setCost] = useState(0);

  const costEstimate = (e) => {
    e.preventDefault();

    if (data.participants > 12) {
      setCost(data.hoursPerSession * 1.5 * 2 * 24.0 + 2500);
    } else {
      setCost(data.hoursPerSession * 1.5 * 1 * 24.0 + 2500);
    }
  };

  return (
    <div className='container'>
      <div className='wrapper'>
        <h1>Cost Estimator</h1>
        <div className='form'>
          <form action=''>
            <TextField
              id='outlined-basic'
              label='How many participants?'
              variant='outlined'
              onChange={(e) =>
                setData({ ...data, participants: e.target.value })
              }
            />
            <TextField
              id='outlined-basic'
              label='How many hours per session?'
              variant='outlined'
              onChange={(e) =>
                setData({ ...data, hoursPerSession: e.target.value })
              }
            />
            <TextField
              id='outlined-basic'
              label='How many sessions per week?'
              variant='outlined'
              onChange={(e) =>
                setData({ ...data, sessionsPerWeek: e.target.value })
              }
            />
            <TextField
              id='outlined-basic'
              label='How many total sessions?'
              variant='outlined'
              onChange={(e) =>
                setData({ ...data, totalSessions: e.target.value })
              }
            />
            <br />
            <Button onClick={(e) => costEstimate(e)} variant='contained'>
              Estimate
            </Button>
          </form>
        </div>
        <div className='output'>
          <h2>Total Cost: ${cost}</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
