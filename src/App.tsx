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
        <Routes>
          <Route path="/" element={<Reception />} />
          <Route path="/floor/:index" element={
            <ProtectedRoute>
              <Floor /> 
            </ProtectedRoute>} />
          <Route path="/forbidden" element={<Forbidden />} />
        </Routes>
      </Layout>
      </div>
  );
}

export default App;
