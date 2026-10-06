import { useRef } from "react";
function App() {
  const inputRef = useRef();
         function handleFocus() {
                 inputRef.current.focus();
  }
 return (
    <div>
      <h2>useRef() Example</h2>
      <input 
           ref={inputRef} type="text" placeholder="Enter your name" />
      <button onClick={handleFocus}> Focus Input</button>
    </div>
  );
}
export default App;