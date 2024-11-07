import { BrowserRouter, createBrowserRouter, RouterProvider, Routes,Route, Navigate} from "react-router-dom";
import Reception from "./pages/Reception/Reception";
import Floor from "./pages/Floor/Floor";
import ProtectedRoute from "./auth/PrivateRoute";
import Layout from "./components/Layout/Layout";
import Forbidden from "./pages/Forbidden/Forbidden";



function App() {
  return (
    <div>
      <Layout>
        <Floor/>
        <Reception/>
      </Layout>
      <Routes>
        <Route path="/" element={} />
        <Route path="/" element={<Reception/>} />
      </Routes>
    </div>
  );
}

export default App