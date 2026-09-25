import { useState } from "react";

export default function NotesApp() {
  const [value, setValue] = useStat("notes");

  const [newNote, setNewNote] = useState("");

  return (
    <div className="container my-10">
      <form className="flex flex-col items-end">
        <textarea
          className="border p-2 w-full rounded-md"
          onChange={(e) => setNewNote(e.target.value)}
          value={newNote}
          placeholder="Start typing..."
        />
        <button
          className="bg-green-700 px-3 py-1 rounded-md text-white font-bold uppercase  mt-2"
          onClick={setValue(newNote)}>
          Add note
        </button>
      </form>

      <div className="my-10 ">
        {notes.length > 0 ? (
          notes.map((el) => (
            <div
              key={el.id}
              className="flex items-center justify-between bg-gray-100 p-3 rounded-md my-3">
              <div>{el.note}</div>
              <button className="cursor-pointer">❌</button>
            </div>
          ))
        ) : (
          <p className="text-center text-2xl text-black/60">
            Add your first note to start
          </p>
        )}
      </div>
    </div>
  );
}
