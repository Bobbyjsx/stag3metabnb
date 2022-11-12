// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/layout";
// import Home from "./pages/home/home";
// import Nft from "./pages/nft/nft";



// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="Nft" element={<Nft />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   );
// }
// // import App from "./App";

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
// export default App;
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// import Nft from "./pages/nft.jsx";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
