import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import ContractManager from "../pages/ContractManager/ContractManager";
import About from "../pages/About/About";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/about", Component: About },
  { path: "/work/contract-manager", Component: ContractManager },
  { path: "*", Component: Home },
]);
