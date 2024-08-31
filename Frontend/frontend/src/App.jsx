import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Routes, Route } from 'react-router-dom';
import Signup from "./components/Signup";


export default function App() {
  return (
    <>
      {/*<Home/>
      <Course/>*/}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={<Courses />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
    </>
  )
}