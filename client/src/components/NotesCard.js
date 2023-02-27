import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectNotes,getNotesAsync,deleteTodoAsync} from "../redux/notes/notesSlice";
function NotesCard() {
  const dispatch = useDispatch();
  let notes = useSelector(selectNotes);
  const [filterText, setFilterText] = useState("");
  const hebele = (e) => {
    setFilterText(e.target.value);
  };
  useEffect(() => {
    dispatch(getNotesAsync());
  }, [dispatch]);
  notes = notes.filter((index) => {
    if (filterText === "") {
      return index;
    }
    if (index.title.toLowerCase().includes(filterText.toLowerCase())) {
      return index;
    }
  });
  return (
    <>
      <h1>Notes</h1>
      <div className="filterNotes">
        <input
          value={filterText}
          onChange={hebele}
          className="filterInput"
          placeholder="Search Note"
        />
      </div>
      <div className="noteCardSection">
        {notes.map((item) => {
          return (
            <div key={item.id} className={`card ${item.color}`}>
              <div className="cardTitle">{item.title}</div>
              <hr />
              <div className="cardDescription">{item.description}</div>
              <div
                className="cardFooter"
                onClick={() => dispatch(deleteTodoAsync(item.id))}
              >
                Delete Note X
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default NotesCard;
