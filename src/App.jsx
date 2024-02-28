//import { RouterProvider, createBrowserRouter } from "react-router-dom";
//import Home from "./pages/Home";
//import HomeNavbar from "./component/Navbar";
//import SignIn from "./pages/SignIn";
//import SignUp from "./pages/SignUp";
//import SignNavbar from "./component/SignNavbar";
//import SignOut from "./pages/SignOut";
//import Main from "./component/Main";
import MovieDesc from "./pages/MovieDesc";

//const router = createBrowserRouter([
//  {
//    path: "/",
//    element: (
//      <>
//        <HomeNavbar />
//        <Home />
//      </>
//    ),
//  },
//  {
//    path: "/signin",
//    element: (
//      <>
//        <SignNavbar />
//        <SignIn />
//      </>
//    ),
//  },
//  {
//    path: "/signup",
//    element: (
//      <>
//        <SignNavbar />
//        <SignUp />
//      </>
//    ),
//  },
//  {
//    path: "/signout",
//    element: <SignOut />,
//  },
//]);

function App() {
  return (
    <>
      {/*<Navbar />*/}
      {/*<RouterProvider router={router} />*/}
      {/*<Home />*/}
      {/*<SignIn />*/}
      {/*<SignUp />*/}
      {/*<Main />*/}
      <MovieDesc />
    </>
  );
}

export default App;
