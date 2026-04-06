// jsx: javascript syntax extension

// Goal: make a new component called header:

import reactImg from './assets/react-core-concepts.png';

function Header() {
  const reactDescription = ['Important', 'Crucial', 'Core'];
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
  }
  
  const description = reactDescription[getRandomInt(3)]

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header/>
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
