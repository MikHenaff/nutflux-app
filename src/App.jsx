import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import Account from "./pages/Account";
import CineDesc from "./pages/CineDesc";
import Navbar from "./components/Navbar";
import PrivateRoute from "./utils/PrivateRoute";
import ChangeAccount from "./pages/ChangeAccount";
import ErrorPage404 from "./pages/ErrorPage404";

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
        <Navbar />
        <SignUp />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <Navbar />
        <SignIn />
      </>
    ),
  },
  {
    path: "/signout",
    element: (
      <>
        <Navbar />
        <SignOut />
      </>
    ),
  },
  {
    path: "/account",
    element: (
      <>
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
    element: <ErrorPage404 />,
  },
]);

function App() {
  return (
    <>
      <AuthContextProvider>
        <RouterProvider router={router} />
      </AuthContextProvider>
    </>
  );
}

export default App;
