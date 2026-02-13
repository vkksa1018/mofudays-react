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

import Petinfo from "./pages/FrontEndLayout/PetInfo/PetInfo.jsx";
import Plan from "./pages/FrontEndLayout/Plan/Plan.jsx";
import Cart from "./pages/FrontEndLayout/Cart/Cart.jsx";
import Checkout from "./pages/FrontEndLayout/Checkout/Checkout.jsx";
import Finish from "./pages/FrontEndLayout/Finish/Finish.jsx";

function App() {
  return (
    <>
      <Petinfo />
    </>
  );
}

export default App;
