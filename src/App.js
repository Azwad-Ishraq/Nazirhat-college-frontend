import './App.css';
import {BrowserRouter, Routes, Route,} from "react-router-dom";
import StudentList from './Components/StudentList/StudentList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavComp from './Components/NavComp/NavComp';
import {SearchContext} from './Context/SearchContext';
import { useState } from 'react';
import AddStudent from './Components/AddStudent/AddStudent';
import Print from './Components/Print/Print';

function App() {

  const [searchText, setSearchText] = useState('');

  return (
    <div className="App">
      <BrowserRouter>

        <SearchContext.Provider value={{searchText,setSearchText}}>
          <NavComp></NavComp>
          <Routes>
            <Route path="/" element={<StudentList></StudentList>}></Route>
            {/* <Route path="addStudent" element={<AddStudent></AddStudent>}></Route> */}
            <Route path='print/:id' element={<Print></Print>}></Route>
          </Routes>

        </SearchContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
