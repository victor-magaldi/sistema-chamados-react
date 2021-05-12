import "./App.css";
import AuthProvider from "./contexts/Auth";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Router></Router>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
