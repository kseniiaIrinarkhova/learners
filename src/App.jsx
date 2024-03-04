import './App.css'
import { useState } from 'react';
import learners from './data/learners.data.mjs';

function App() {
  const [learnersData, setLearnersData] = useState({learners: learners});

  return (
    <>
      <h1>{learnersData.learners[0].name}</h1>
    </>
  )
}

export default App
