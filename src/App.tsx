import {FC} from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./pages/formPage/formPage";
import AnswerPage from "./pages/answerPage/answerPage";
import { RecoilRoot } from "recoil";
import FloatingBtton from "./components/floatingButton";
import AddFormPage from "./pages/addFormPage/addFormPage";
import AnswersFormsPage from "./pages/answersFormsPage/answersFormsPage";

interface AppProps {}
const App:FC <AppProps>= () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/answersForms" element={<AnswersFormsPage />} />
        </Routes>
        <Routes>
          <Route path="/addForm" element={<AddFormPage />} />
          <Route path="/answer" element={<AnswerPage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="*" element={<FloatingBtton />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
