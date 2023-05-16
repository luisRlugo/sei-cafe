// imports
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
// pages
import NewOrderPage from "./Pages/NewOrderPage/NewOrderPage";
import AuthPage from "./Pages/AuthPage/AuthPage";
import OrderHistoryPage from "./Pages/OrderHistoryPage/OrderHistoryPage";
// components
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [user, setUser] = useState(getUser());

  // Below is just for testing
  // async function testCall() {
  //   const res = await fetch("/test");
  //   const data = await res.json();
  //   console.log(data);
  // }

  // useEffect(() => {
  //   testCall();
  // }, []);

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/orders/new" element={<NewOrderPage />} />
            <Route path="/orders" element={<OrderHistoryPage />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
