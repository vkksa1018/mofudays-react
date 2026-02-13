// router 2026/2/2 by 納森
// import React from "react";
// import { RouterProvider } from "react-router-dom";
// import { router } from "./router";

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   );
// }

// export default App;

import Petinfo from "./pages/PetInfo/PetInfo.jsx";
import Plan from "./pages/Plan/Plan.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Finish from "./pages/Finish/Finish.jsx";

function App() {
  return (
    <>
      <Petinfo />
    </>
  );
}

export default App;
