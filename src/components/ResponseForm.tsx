import React, { useState } from "react";
import { addResponse, Response } from "../services/api";

const ResponseForm: React.FC = () => {
  const [parentName, setParentName] = useState("");
  const [studentName, setStudentName] = useState("");
  const [attending, setAttending] = useState(false);
  const [comments, setComments] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: Response = {
      id: 0,
      parentName,
      studentName,
      attending,
      comments,
      updatedAt: new Date(),
    };
    await addResponse(response);
    setParentName("");
    setStudentName("");
    setAttending(false);
    setComments("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Parent Name</label>
        <input
          value={parentName}
          onChange={(e) => setParentName(e.target.value)}
        />
      </div>
      <div>
        <label>Student Name</label>
        <input
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </div>
      <div>
        <label>Attending</label>
        <input
          type="checkbox"
          checked={attending}
          onChange={(e) => setAttending(e.target.checked)}
        />
      </div>
      <div>
        <label>Comments</label>
        <textarea
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ResponseForm;
