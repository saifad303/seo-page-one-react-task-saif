import Incomplete from "./components/taskTypes/Incomplete";

const App = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-[95%] bg-white p-2">
        <div className="border border-slate-400 overflow-x-auto p-4">
          <Incomplete></Incomplete>
        </div>
      </div>
    </div>
  );
};

export default App;
