import {FC} from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./pages/formPage/formPage";
import AnswerPage from "./pages/answerPage/answerPage";
import { RecoilRoot } from "recoil";

interface AppProps {}
const App:FC <AppProps>= () => {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/answer" element={<AnswerPage />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
