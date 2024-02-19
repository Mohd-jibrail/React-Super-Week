import Header from './components/Header/Header.jsx'
import Dashboar from './components/Dashboard/Dashboard.jsx';
import TaskListContextProvider from './store/task-store.jsx';
import './App.css';

function App() {
  return (
    <TaskListContextProvider>
      <Header/>
      <Dashboar/>
    </TaskListContextProvider>
  );
}

export default App;
