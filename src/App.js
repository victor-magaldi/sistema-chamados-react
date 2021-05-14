import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import AuthProvider from "./contexts/Auth";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

import { ToastContainer } from "react-toastify";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ToastContainer autoClose={3000}></ToastContainer>
        <Router></Router>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
