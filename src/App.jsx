import {
  RouterProvider,
  createBrowserRouter,
  useLocation,
} from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Account from "./pages/Account";
import CineDesc from "./pages/CineDesc";
import HomeNavbar from "./components/HomeNavbar";
import AccountNavbar from "./components/AccountNavbar";
import PrivateRoute from "./utils/PrivateRoute";
//import Main from "./components/Main";

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
        <AccountNavbar />
        <SignUp />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <AccountNavbar />
        <SignIn />
      </>
    ),
  },
  {
    path: "/signout",
    element: (
      <>
        <AccountNavbar />
        <SignOut />
      </>
    ),
  },
  {
    path: "/account",
    element: (
      <>
        <AccountNavbar />
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

  return (
    <>
      {/*<Navbar />*/}
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
      {/*<Home />*/}
      {/*<SignIn />*/}
      {/*<SignUp />*/}
      {/*<Main />*/}
      {/*<CineDesc />*/}
    </>
  );
}

export default App;
