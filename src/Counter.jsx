export default function Counter({count,setCount}){
    console.log("Counter render")
return(
    <div className="flex-col flex justify-center border-2 border-gray-300 rounded-lg w-full p-5 bg-gray-100 shadow">
        <h1 className="text-3xl text-center font-bold text-gray-800 mb-4">Counter</h1>
        <p className="text-lg text-center font-bold mb-4 text-gray-800 ">{count}</p>
        <button className=" py-1 w-1/6 mx-auto bg-green-400 rounded-lg mb-6 hover:bg-green-600 text-white" onClick={()=>setCount(count+1)}>افزودن</button>
    </div>
)
}