import {FC} from "react";
import "./App.css";
import Navbar from "./components/navbar";
import HomePage from "./pages/homePage/homePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "./pages/formPage/formPage";
import AnswerPage from "./pages/answerPage/answerPage";
interface AppProps {}
const App:FC <AppProps>= () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="/answer" element={<AnswerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
