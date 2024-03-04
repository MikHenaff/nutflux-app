import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import SignOut from "./pages/SignOut";
import MovieDesc from "./pages/MovieDesc";
import HomeNavbar from "./components/HomeNavbar";
import ProfileNavbar from "./components/ProfileNavbar";
import Main from "./components/Main";
import EditProfile from "./pages/EditProfile";

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
        <ProfileNavbar />
        <SignUp />
      </>
    ),
  },
  {
    path: "/signin",
    element: (
      <>
        <ProfileNavbar />
        <SignIn />
      </>
    ),
  },
  {
    path: "/signout",
    element: (
      <>
        <ProfileNavbar />
        <SignOut />
      </>
    ),
  },
  {
    path: "/edit-profile",
    element: (
      <>
        <ProfileNavbar />
        <EditProfile />
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
      {/*<MovieDesc />*/}
    </>
  );
}

export default App;
