import { RouterProvider } from "react-router";
import CustomCursor from "../components/CustomCursor";
import { router } from "./routes";

export default function App() {
  return (
    <>
      <CustomCursor />
      <RouterProvider router={router} />
    </>
  );
}
