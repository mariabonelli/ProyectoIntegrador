import AgendaLayout from "../Components/AgendaLayout/AgendaLayout";
import { useState } from "react";
function Agenda() {
  const [key, setKey] = useState(0);
  return <AgendaLayout key={key} setKey={setKey} />;
}

export default Agenda;
