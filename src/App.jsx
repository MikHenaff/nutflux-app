import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import CineDesc from "./pages/CineDesc";
import HomeNavbar from "./components/HomeNavbar";
import AccountNavbar from "./components/AccountNavbar";
import Main from "./components/Main";
import EditAccount from "./pages/EditAccount";

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
    path: "/edit-account",
    element: (
      <>
        <AccountNavbar />
        <EditAccount />
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
]);

function App() {
  return (
    <>
      {/*<Navbar />*/}
      <RouterProvider router={router} />
      {/*<Home />*/}
      {/*<SignIn />*/}
      {/*<SignUp />*/}
      {/*<Main />*/}
      {/*<CineDesc />*/}
    </>
  );
}

export default App;
