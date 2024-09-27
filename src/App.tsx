import { useState } from "react";
import Products from "./components/Products";

function App() {
  return (
    <div className="bg-rose-50 h-full flex justify-center max-w-[1440px]  p-20">
      <div className="flex max-w-full flex-wrap max-md:w-[375px]">
        <main className="max-w-[60%]">
          <div className="mb-4" style={{ fontWeight: 500, fontSize: 19 }}>
            Deserts
          </div>
          <div className="flex flex-wrap gap-4 pb-12">
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
            <Products />
          </div>
        </main>
        <div className="relative bg-black w-[40%] sm:max-w-[100%]">
        <Products />
        <Products />
        </div>
        
      </div>
    </div>
  );
}

export default App;
