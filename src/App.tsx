import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PreviewDocs from "./pages";

const router = createBrowserRouter([
  {
    path: "/preview/:id",
    element: <PreviewDocs />,
  },
]);


export default function App() {

  return (
    <RouterProvider router={router} />
  )
}