import { BrowserRouter, Route, Routes } from "react-router";
import UserDashboard from "./layouts/UserDashboard";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AdminDashboard from "./layouts/AdminDashboard";
import Shop from "./pages/Shop";
import Login from "./pages/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserDashboard />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>

        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<Shop />} />
          <Route path="contact" element={<Contact />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
