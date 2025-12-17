import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import {
  Todo,
  CurrencyConverter,
  ExpenseTracker,
  EcommercePage,
  Home,
} from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
      <Route path="todo-app" element={<Todo />} />
      <Route path="currency-converter" element={<CurrencyConverter />} />
      <Route path="expense-tracker" element={<ExpenseTracker />} />
      <Route path="ecommerce-page" element={<EcommercePage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
