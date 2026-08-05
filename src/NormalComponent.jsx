import { useCallback, useState } from "react";

const OptimizationComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("default");

const handleAddCount = useCallback(()=>{
    console.log('button clicked text : ' , text);
    setCount((prev)=> prev+1)
},[text]);

  console.log("Componenr re-rendered")

  return (
    <div className="flex-col  justify-items-center h-screen content-center p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4 my-4 border border-gray-200">
      <h2 className="text-2xl font-bold text-green-600">Without useCallback</h2>
      <p className="text-gray-700 font-medium">Result: <span className="text-green-500 font-bold">{count}</span></p>
      <div className="space-y-3 flex-coljustify-self-center">
        <button 
          onClick={handleAddCount}
          className="px-4 py-2 flex justify-self-center bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
        >
          Add Count
        </button>
        <input 
          value={text} 
          onChange={(e) => setText(e.target.value)} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
          placeholder="Type something..."
        />
      </div>
    </div>
  );
};

export default OptimizationComponent;