import React, { Suspense } from 'react';
import './App.css';
import Preloader from "./components/Preloader/Preloader";

const ProductPage = React.lazy(() => import("./pages/ProductPage"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>t007</h1>
      </header>
        <Suspense fallback={<Preloader/>}>
            <ProductPage/>
        </Suspense>
    </div>
  );
}

export default App;
