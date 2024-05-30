import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-pagination/themes/classic.css";
import MainRoutes from "./routes";                  // This is MainRoutes
function App() {
  return (
    <div>
        <BrowserRouter>
          <MainRoutes />
        </BrowserRouter>
    </div>
  );
}

export default App;