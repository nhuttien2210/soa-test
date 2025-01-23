import {
  Navigate,
  BrowserRouter as Router,
} from 'react-router-dom';
import AppRoutes from "./routes";
import DataProvider from './provider';
function App() {
  
  return (
    <DataProvider>
      <Router>
        <AppRoutes />
      </Router>
    </DataProvider>
  )
}

export default App
