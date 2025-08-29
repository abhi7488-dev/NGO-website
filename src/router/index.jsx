import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Parent from "../Pages/Parent";
import ParentForm from "../components/Parent/ParentForm";
import Member from "../Pages/Member";
import Volunteer from "../Pages/Volunteer";


const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/parent" element={<Parent />} />
      <Route path="/firebird-information" element={<ParentForm />} />
      <Route path="/membership" element={<Member />} />
      <Route path="/membership/volunteer" element={<Volunteer />} />
    </Routes>
  );
};

export default Router;