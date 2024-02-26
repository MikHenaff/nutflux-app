import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./component/Home";
import HomeNavbar from "./component/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignNavbar from "./component/SignNavbar";

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
    path: "/signin",
    element: (
      <>
        <SignNavbar />
        <SignIn />
      </>
    ),
  },
  {
    path: "/signup",
    element: (
      <>
        <SignNavbar />
        <SignUp />
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
    </>
  );
}

export default App;
