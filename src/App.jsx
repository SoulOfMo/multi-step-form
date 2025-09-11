import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./pages/AppLayout/AppLayout";
import Info from "./components/Info/Info";
import Plans from "./components/Plans/Plans";
import Addons from "./components/Addons/Addons";
import Checkout from "./components/Checkout/Checkout";
import Summary from "./components/summary/Summary";
import { FormContextProvider } from "./contexts/FormContext";

function App() {
  return (
    <BrowserRouter>
      <FormContextProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Info />} />
            <Route path="plans" element={<Plans />} />
            <Route path="addons" element={<Addons />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="summary" element={<Summary />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </FormContextProvider>
    </BrowserRouter>
  );
}

export default App;
