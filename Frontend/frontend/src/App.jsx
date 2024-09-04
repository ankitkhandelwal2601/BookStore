import Home from "./home/Home";
import Courses from "./courses/Courses";
import { Routes, Route, Navigate } from 'react-router-dom';
import Signup from "./components/Signup";
import { Toaster } from 'react-hot-toast'
import { useAuth } from "./context/AuthProvider";

export default function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      {/*<Home/>
      <Course/>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course" element={authUser?<Courses />:<Navigate to="/signup"/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Toaster />
    </>
  )
}