import './App.css'
import MainDash from './components/MainDash/MainDash';
import Rightside from './components/RightSide/Rightside';
import Sidebar from './components/sidebar/sidebar'
function App() {
  return (
    <div className="App">
    <div className='AppGlass'>
      <Sidebar />
      <MainDash />
      <Rightside/>
    </div>
    </div>
  );
}

export default App;
