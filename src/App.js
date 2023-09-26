import { ThemeProvider } from "./context/ThemeContext.js";
import Root from "./pages/Root.jsx"
import ErrorPage from "./pages/ErrorPage.jsx";
import DetailCountryPage from "./pages/DetailCountryPage.jsx";
import Index from "./pages/Index.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      errorElement: <ErrorPage/>,

      children: [
        { index: true, element: <Index /> },
        {
          path: "countries/:countrieId",
          element: <DetailCountryPage />,
        },
      ],
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router}/>
    </ThemeProvider>
  );
}

export default App;
