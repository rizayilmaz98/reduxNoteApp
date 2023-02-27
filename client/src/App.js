import './App.css';
import NotesCard from "./components/NotesCard";
import FormCard from './components/FormCard';
function App() {
  return (
    <div className='App'>
      <FormCard/>
      <hr/>
      <NotesCard/>
    </div>
  );
}

export default App;
