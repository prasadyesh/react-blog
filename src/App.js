import Navbar from './Navbar';
import Home from './Home';
function App() {
 // const content= "Welcome to my blog";
  return (
    <div className="App">
      <Navbar/>
      <div className="content">
      <Home/>
      </div>
    </div>
  );
}

export default App;
