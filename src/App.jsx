import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";

import AuthLayout from "./layouts/AuthLayout";
import QuizLayout from "./layouts/QuizLayout";
import MainLayout from "./layouts/MainLayout";

import Landing from "./pages/Company/Landing";
import ExamPin from "./pages/Form/ExamPin";
import SignUp from "./pages/Form/SignUp";
import Login from "./pages/Form/Login";
import ChoosePlan from "./pages/Form/ChoosePlan";

import MultipleChoice from "./pages/Quiz/MultipleChoice";
import Image from "./pages/Quiz/Image";
import Open from "./pages/Quiz/Open";

import TeacherScreenView from "./pages/Quiz/TeacherScreenView";

import Support from "./pages/Company/Support";
import FAQs from "./pages/Company/FAQs";
import FAQItem from "./pages/Company/FAQItem";
import TimedOut from "./pages/Error/TimedOut";
import AccessDenied from "./pages/Error/AccessDenied";
import NotFound from "./pages/Error/NotFound";
import Pricing from "./pages/Company/Pricing";
import AccountLayout from "./layouts/AccountLayout";

import MyExams from "./pages/Account/MyExams";
import CreateQuizStep1 from "./pages/Account/CreateQuiz";
import Stats from "./pages/Account/Stats";
import ActivityLog from "./pages/Account/ActivityLog";
import TeacherStudentView from "./pages/Quiz/TeacherStudentView";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
        <Route path="/" element={<QuizLayout teachersView />}>
          <Route path="teacher-screen-view" element={<TeacherScreenView />} />
          <Route path="teacher-student-view" element={<TeacherStudentView />} />
        </Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Landing />} />
          <Route path="support" element={<Support />} />
          <Route path="faqs" element={<FAQs />} />
          <Route path="faq-item" element={<FAQItem />} />
          <Route path="pricing" element={<Pricing />} />

          <Route path="408" element={<TimedOut />} />
          <Route path="403" element={<AccessDenied />} />
          <Route path="404" element={<NotFound />} />
        </Route>
        <Route path="/" element={<AccountLayout />}>
          <Route path="my-exams" element={<MyExams />} />
          <Route path="create-quiz" element={<CreateQuizStep1 />} />
          <Route path="stats" element={<Stats />} />
          <Route path="activity-log" element={<ActivityLog />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" replace={true} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
