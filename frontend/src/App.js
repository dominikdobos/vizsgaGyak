import { BrowserRouter, Route, Routes } from "react-router-dom";
import Admin from "./pages/Admin";
import Public from "./pages/Public";
import Layout from "./pages/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="public" element={<Public />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
