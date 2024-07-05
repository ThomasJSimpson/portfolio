import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./pages/AppLayout.jsx";
import WelcomePage from "./pages/WelcomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop.jsx";
const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <WelcomePage />,
        },
        {
          path: "/project/:projectId",
          element: (
            <>
              <ScrollToTop /> <ProjectPage />
            </>
          ),
        },
      ],
    },
  ]
  // { basename: "/portfolio" }
);

function App() {
  return <RouterProvider router={router} />;
}
export default App;
