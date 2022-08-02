import FullName from './component/profile/FullName';
import Adress from './component/profile/Adress';
import Image from './component/profile/Profilephoto';
import './App.css';
function App() {
  return (
    <div className="App">
      <center>
      <h1>Welcome to my profile page</h1>
      <FullName/>
      <Adress/><br/>
      <Image/>
      </center>
    </div>
  );
}

export default App;
