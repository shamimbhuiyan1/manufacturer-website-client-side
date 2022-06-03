import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Home/Home/Contact/Contact";
import Home from "./Pages/Home/Home/Home";

import Login from "./Pages/Login/Login/Login";
import SignUp from "./Pages/Login/SignUp/SignUp";
import NotFound from "./Pages/NotFound/NotFound";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Shared/Footer/Footer";
import Navbar from "./Shared/Navbar/Navbar";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import MyOrders from "./Pages/Dashboard/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile";
import Dashboard from "./Pages/Dashboard/Dashboard";
import RequireAdmin from "./Pages/Login/RequireAdmin/RequireAdmin";
import AddProducts from "./Pages/AddProducts/AddProducts";
import { QueryClient, QueryClientProvider } from "react-query";
import Products from "./Pages/Products/Products";
import ResetPassword from "./Pages/Login/ResetPassword/ResetPassword";
import Purchase from "./Pages/Purchase/Purchase";
import Review from "./Pages/Review/Review";
import ManageAllOrders from "./Pages/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./Pages/ManageProducts/ManageProducts";
import MakeAdmin from "./Pages/Login/MakeAdmin/MakeAdmin";

const queryClient = new QueryClient();
function App() {
  return (
    <div className="">
      <QueryClientProvider client={queryClient}>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/portfolio" element={<Portfolio></Portfolio>}></Route>
          <Route path="/blogs" element={<Blogs></Blogs>}></Route>

          <Route path="/contact" element={<Contact></Contact>}></Route>
          <Route path="products" element={<Products></Products>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/signup" element={<SignUp></SignUp>}></Route>
          <Route
            path="reset-password"
            element={<ResetPassword></ResetPassword>}
          ></Route>
          <Route
            path="purchase/:_id"
            element={
              <RequireAuth>
                <Purchase></Purchase>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard />
              </RequireAuth>
            }
          >
            <Route
              path="my-orders"
              index
              element={<MyOrders></MyOrders>}
            ></Route>

            <Route path="my-profile" element={<MyProfile></MyProfile>}></Route>
            <Route path="add-review" element={<Review></Review>}></Route>
          </Route>
          <Route
            path="manage-all-orders"
            element={
              <RequireAdmin>
                <ManageAllOrders></ManageAllOrders>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage-all-products"
            element={
              <RequireAdmin>
                <ManageProducts></ManageProducts>
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add-product"
            element={
              <RequireAuth>
                <AddProducts></AddProducts>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="make-admin"
            element={
              <RequireAdmin>
                <MakeAdmin></MakeAdmin>
              </RequireAdmin>
            }
          ></Route>

          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
        <Footer></Footer>
      </QueryClientProvider>
    </div>
  );
}

export default App;
