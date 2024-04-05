import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Account from "./pages/Account";
import CineDesc from "./pages/CineDesc";
import Navbar from "./components/Navbar";
//import UserFormNavbar from "./components/UserFormNavbar";
import PrivateRoute from "./utils/PrivateRoute";
import ChangeAccount from "./pages/ChangeAccount";
//import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        {/*<UserFormNavbar />*/}
        <Navbar />
        <SignUp />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        {/*<UserFormNavbar />*/}
        <Navbar />
        <SignIn />
      </>
    ),
  },
  {
    path: "/signout",
    element: (
      <>
        {/*<UserFormNavbar />*/}
        <Navbar />
        <SignOut />
      </>
    ),
  },
  {
    path: "/account",
    element: (
      <>
        {/*<UserFormNavbar />*/}
        <Navbar />
        <PrivateRoute>
          <Account />
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/change-account",
    element: (
      <>
        {/*<UserFormNavbar />*/}
        <Navbar />
        <PrivateRoute>
          <ChangeAccount />
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/cine-desc",
    element: (
      <>
        <Navbar />
        <CineDesc />
      </>
    ),
  },
  {
    path: "*",
    element: <p>Oups!</p>,
  },
]);

function App() {
  //const location = useLocation();
  //const { pathname } = location;
  //console.log(window.location.pathname);

  //console.log(window.history);

  if (window.history.scrollRestoration === "auto") {
    window.history.scrollRestoration = "manual";
  }

  //useEffect(() => {
  //  addEventListener("scroll", () => {
  //    if (window.scrollY)
  //      sessionStorage.setItem(window.location.pathname, window.scrollY);
  //  });
  //});

  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
