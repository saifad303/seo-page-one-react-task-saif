import Incomplete from "./components/taskTypes/Incomplete";

const App = () => {
  return (
    <div className="flex items-start justify-center mt-10 h-screen">
      <div className="w-[1536px] bg-white p-5 h-[85%] rounded-lg">
        <div className="border-2 border-slate-400 h-full rounded-lg px-2">
          <div className="flex items-start gap-4  overflow-x-auto p-4 h-full scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-gray-300">
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
            <Incomplete></Incomplete>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
