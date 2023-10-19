import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import { Cart } from "./pages/Cart";
import { Catalog } from "./pages/Catalog";
import { Home } from "./pages/Home";

export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="home" element={<Home />}></Route>
                <Route path="cart" element={<Cart />}></Route>
                <Route path="catalog" element={<Catalog />}></Route>
            </Routes>
        </Router>
    );
}