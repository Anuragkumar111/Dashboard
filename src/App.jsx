import Navbar from './components/Navbar';
import Body from './components/Body';
import Tabbar from './components/Tabbar';

function App() {
  return (
    <>
      <div className='flex flex-row min-h-screen'>
        <Tabbar />
        <div className='flex-grow'>
          <Navbar />
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
