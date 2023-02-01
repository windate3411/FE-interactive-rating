import { useState } from "react";
import InteractiveRating from "./components/interactive-rating";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="h-full flex justify-center items-center px-6">
      <InteractiveRating />
    </div>
  );
}

export default App;
