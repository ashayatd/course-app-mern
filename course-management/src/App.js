import './App.css';
import Routes from './routes/RoutesPages';
import { AuthProvider } from '../../course-management/src/authentication/AuthContext';
import "@fortawesome/fontawesome-free/css/all.min.css";


function App() {
  return (
  <AuthProvider>
    <Routes/>
  </AuthProvider>);
}

export default App;
