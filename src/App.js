import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Home/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";
import Tools from "./Pages/Home/Tools/Tools";
import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyReview from "./Pages/Dashboard/MyReview";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ToolsPurchaseDetail from "./Pages/Home/Home/ToolsPurchaseDetails/ToolsPuchaseDetail";
function App() {
  return (
    <div className="">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>

        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="profile" element={<MyProfile></MyProfile>}></Route>
        </Route>
        <Route
          path="/tools"
          element={
            <RequireAuth>
              <Tools></Tools>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/tools/:toolsId"
          element={
            <RequireAuth>
              <ToolsPurchaseDetail></ToolsPurchaseDetail>
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
