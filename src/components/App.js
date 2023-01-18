import React, { useState } from "react";
import AdminNavBar from "./AdminNavBar";
import QuizForm from "./QuizForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuizForm /> : <QuestionList />}
    </main>
  );
}

export default App;
