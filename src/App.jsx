import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Account from "./pages/Account";
import CineDesc from "./pages/CineDesc";
import HomeNavbar from "./components/HomeNavbar";
import UserFormNavbar from "./components/UserFormNavbar";
import PrivateRoute from "./utils/PrivateRoute";
//import { useEffect } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <HomeNavbar />
        <Home />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <UserFormNavbar />
        <SignUp />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <UserFormNavbar />
        <SignIn />
      </>
    ),
  },
  {
    path: "/signout",
    element: (
      <>
        <UserFormNavbar />
        <SignOut />
      </>
    ),
  },
  {
    path: "/account",
    element: (
      <>
        <UserFormNavbar />
        <PrivateRoute>
          <Account />
        </PrivateRoute>
      </>
    ),
  },
  {
    path: "/cine-desc",
    element: (
      <>
        <HomeNavbar />
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
