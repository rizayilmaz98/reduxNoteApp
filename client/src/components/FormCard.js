import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNoteAsync } from "../redux/notes/notesSlice";
function FormCard() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    color: "",
  });
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    if (
      formData.title === "" ||
      formData.description === "" ||
      formData.color === ""
    ) {
      alert("Title Description Color required");
    } else {
      e.preventDefault();
      await dispatch(setNoteAsync(formData));
      setFormData({ title: "", description: "", color: "" });
      console.log(formData);
    }
  };

  return (
    <div className="formSection">
      <h1 className="appTitle">Redux Note Application</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <br />
        <textarea
          placeholder="Description"
          maxLength={300}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <div className="addMenuSection">
          <div className="addMenu">
            <div className="selectColor">
              <div
                className="colorCircle blue"
                onClick={() => setFormData({ ...formData, color: "blue" })}
              ></div>
              <div
                className="colorCircle pink"
                onClick={() => setFormData({ ...formData, color: "pink" })}
              ></div>
              <div
                className="colorCircle purple"
                onClick={() => setFormData({ ...formData, color: "purple" })}
              ></div>
              <div
                className="colorCircle green"
                onClick={() => setFormData({ ...formData, color: "green" })}
              ></div>
              <div
                className="colorCircle yellow"
                onClick={() => setFormData({ ...formData, color: "yellow" })}
              ></div>
            </div>

            <div>
              <button className="addButton" type="submit">
                Add Note
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormCard;
