import RoutesComponent from "./Routes";
import "./App.css";
import { AuthProvider } from "./contexts/auth";

function App() {
  return (
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;
