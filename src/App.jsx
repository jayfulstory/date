import { useState } from 'react';
import './App.css';
import MainPage from './components/MainPage';
import Contents from './components/Contents';
import text from './data/data';

function App() {
  const [content, setContent] = useState(true);
  const [randomText, setRandomText] = useState();
  const handleContents = () => {
    if (content) {
      setRandomText(text[Math.floor(Math.random() * 11)]);
    }
    console.log(randomText);
    setContent(prev => !prev);
  };
  return (
    <>
      {content ? <MainPage /> : <Contents randomText={randomText} />}
      <button className='button' onClick={handleContents}>
        {content ? 'START' : 'もう一度探す'}
      </button>
    </>
  );
}

export default App;
