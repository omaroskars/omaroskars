import HomePage from "./pages/Home";
import CvPage from "./pages/CvPage";
import Gallery from "./pages/Gallery";

export const routes = [
  {
    path: "/",
    component: HomePage,
    exact: true
  },
  {
    path: "/web",
    component: CvPage
  },
  {
    path: "/gallery",
    component: Gallery
  }
];
