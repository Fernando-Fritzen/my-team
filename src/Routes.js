import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import useAuth from "./hooks/useAuth";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed ? <Item /> : <Login />;
};

function RoutesComponent() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Private Item={Home} />} />
      <Route path="*" element={<h1>Página não encontrada</h1>} />
    </Routes>
  );
}

export default RoutesComponent;
