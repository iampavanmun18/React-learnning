import './App.css';
import FileUpload from './components/FileUpload';
import FetchData from './components/FetchData';
import CustomForm from './components/CustomForm';
import CustomuseMemo from './hooks/CustomuseMemo';

function App() {
  return (
    <div className="App">
      {/* <FileUpload /> */}
      {/* <FetchData/> */}
      {/* <CustomForm/> */}
      <CustomuseMemo/>
    </div>
  );
}

export default App;
