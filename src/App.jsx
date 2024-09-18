import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./component/Layout";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import ForYou from "./pages/ForYou";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Today from "./pages/Today";
import Store from "./redux/Store";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "Contact",
          element: <Contact />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "foryou",
          element: <ForYou />,
        },
        {
          path: "Cart",
          element: <Cart />,
        },
      ],
    },
  ]);

  return (
    <Provider store={Store}>
      <RouterProvider router={router} />
    </Provider>
    
  );
}

export default App;
