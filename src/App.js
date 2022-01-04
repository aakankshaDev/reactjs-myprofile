import logo from './logo.svg';
import './App.css';
// import Header from './Containers/Header/Header';
import Footer from './Containers/Footer/Footer';
import Courses from './Containers/components/Courses/Courses';
import Menu from './Containers/components/Menu/Menu';
import Content from './Containers/Content/Content';
function App() {
  return (
    <div className="App">
      {/* <h4><Menu/></h4> */}
      <Content />
      <Courses />
      <Footer/>
    </div>
  );
}

export default App;
