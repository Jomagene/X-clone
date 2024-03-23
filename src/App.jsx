import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import {
  CNNp,
  NewYorkTimes,
  ProfilePhoto,
  TweeterPic,
} from "./data/icons_images";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/profile" element={<Profile src={ProfilePhoto} />} />
        <Route path="/CNN" element={<Profile src={CNNp} />} />
        <Route
          path="/The New York Times"
          element={<Profile src={NewYorkTimes} />}
        />
        <Route path="/Twitter" element={<Profile src={TweeterPic} />} />
      </Route>
    )
  );

  function Root() {
    return (
      <>
        <Sidebar />
        <Outlet />
      </>
    );
  }

  return <RouterProvider router={router} />;
}
