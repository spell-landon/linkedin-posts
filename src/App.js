import './App.css';
import Button from './components/Button';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState(false);
  const openModal = () => {
    setModal(!modal);
  };
  return (
    <div className='App'>
      <h1>Hello</h1>
      <Button openModal={openModal} />
      {modal ? (
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor,
          dolorem?
        </p>
      ) : (
        ''
      )}
    </div>
  );
}

export default App;
