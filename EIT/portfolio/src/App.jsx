import { RouterProvider } from "react-router-dom";
import { router } from "./components/router";

function App() {

  return (
    <>
      <div className="">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
