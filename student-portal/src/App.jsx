import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentPortalContextProvider from "./store/studentStore.jsx"
import Home from './pages/Home/Home.jsx';
import Student from './pages/Student/Student.jsx';
import NewStudent from './pages/NewStudent/NewStudent.jsx'
import './App.css';
import Header from './components/header/Header.jsx';

function App() {
  return (
    
      <StudentPortalContextProvider>
        <Header></Header>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/student" element={<Student />} />
              <Route path="/newStudent" element={<NewStudent />} />
            </Routes>
          </BrowserRouter>
      </StudentPortalContextProvider>
  );
}

export default App;
