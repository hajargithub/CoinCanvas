import "./App.css";
import { routers } from "./routing";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <>
      <RouterProvider router={routers}></RouterProvider>;
    </>
  );
}

export default App;
