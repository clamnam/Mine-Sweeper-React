import './App.css';

import Logic from './Pages/Logic'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="">
          <div className='min-h-screen'>
          <Router>

        <Routes>
          {/* <Route path="/" element={<Home/>} /> */}
          <Route path="/logic/:id" element={<Logic/>} />

          {/* <Route path="/projects/:slug/demo" element={<Demo/>} />

          <Route path="/projects/:slug" element={<ProjectsShow/>} />

          <Route path='*' element={<PageNotFound/>} /> */}
      </Routes>
            </Router>
            <Logic/>

      </div>

    </div>
  );
}

export default App;
