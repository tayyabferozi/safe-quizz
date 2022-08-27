import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import QuizLayout from "./layouts/QuizLayout";

import ExamPin from "./pages/Form/ExamPin";
import SignUp from "./pages/Form/SignUp";
import Login from "./pages/Form/Login";
import ChoosePlan from "./pages/Form/ChoosePlan";

import MultipleChoice from "./pages/Quiz/MultipleChoice";
import Image from "./pages/Quiz/Image";
import Open from "./pages/Quiz/Open";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route path="pin" element={<ExamPin />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="choose-plan" element={<ChoosePlan />} />
        </Route>
        <Route path="/" element={<QuizLayout />}>
          <Route path="multiple-choice" element={<MultipleChoice />} />
          <Route path="image" element={<Image />} />
          <Route path="open" element={<Open />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
