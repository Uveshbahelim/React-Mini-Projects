import React, { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const [task, setTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);
    setTitle("");
    setDetails("");
  };

  const deleteNote = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);

    setTask(copyTask);
  };

  return (
    <div className="h-screen lg:flex bg-black text-white">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-center"
      >
        <h1 className="text-4xl mb-2 font-bold">Add Notes</h1>
        {/*  input heading */}
        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded text-black"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        {/* Textarea input */}
        <textarea
          type="text"
          className="px-5 w-full font-medium h-32 p-2 flex items-start flex-row border-2 outline-none rounded text-black"
          placeholder="Write Detaild here"
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <button className="bg-white active:scale-95 font-medium w-full outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>
      {/* notes */}
      <div className="lg:w-1/2 p-10 bg-black border-l-4 border-l-gray-600">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] border-l-4 border-l-yellow-300"
              >
                <div>
                  <h3 className="leading-tight text-lg font-bold">
                    {elem.title}
                  </h3>
                  <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">
                    {elem.details}
                  </p>
                </div>
                {/* dlt btn */}
                <button
                  onClick={() => {
                    deleteNote(idx);
                  }}
                  className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;