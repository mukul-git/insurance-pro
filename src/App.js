import "./App.css";
// import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "./firebaseConfig"; // Add this line prevent firebase not loading error

// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  //Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "signup",
    element: <Signup />,
  },
  {
    path: "login",
    element: <Login />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

// import React, { useState } from "react";
// import "./firebaseConfig"; // Add this line prevent firebase not loading error
// import { getFirestore, addDoc, collection } from "firebase/firestore";

// function App() {
//   const [inputValue1, setInputValue1] = useState("");
//   const [inputValue2, setInputValue2] = useState("");

//   const db = getFirestore();

//   const saveDataToFirestore = async () => {
//     const docRef = await addDoc(collection(db, "myCollection"), {
//       field1: inputValue1,
//       field2: inputValue2,
//     });
//     alert("Document written to Database");
//   };

//   return (
//     <div className="App">
//       <h1>Save Data to Firebase Firestore</h1>
//       <input
//         type="text"
//         value={inputValue1}
//         onChange={(e) => setInputValue1(e.target.value)}
//       />
//       <input
//         type="text"
//         value={inputValue2}
//         onChange={(e) => setInputValue2(e.target.value)}
//       />
//       <button onClick={saveDataToFirestore}>Save to Firestore</button>
//     </div>
//   );
// }

// export default App;
