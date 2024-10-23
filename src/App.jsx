import InputField from "./Components/Form/Inputfield";
import FormControl from "./Components/Form/FormControl";
import TextArea from "./Components/Form/TextArea";
import Drawer from "./Components/Drawer/Drawer";
import Banner from "./Components/Banner/Banner";
import { useState } from "react";

function App() {
  const [input, setInput] = useState("valor inicial");
  const [textArea, setTextArea] = useState("valor secundario");
  const handleFormSubmit = (e) => {
    console.log(e);
  };
  return (
    <FormControl handleFormSubmit={handleFormSubmit}>
      {/*TextArea({ outlined: true })*/}
      {/* <etiqueta-de-apertura atributos="id"/> */}
      {/* <TextArea outlined={true} />
        <InputField value={valor}/> */}
      <InputField
        outlined={true}
        handleChange={(e) => {
          setInput(e);
        }}
        name={"name"}
        id={"name"}
        placeholder={"Indique su nombre"}
        type={"email"}
        required={true}
      />
      {input}
      <TextArea
        outlined={true}
        handleChange={(e) => {
          setTextArea(e);
        }}
        name={"c"}
        id={"condiciones"}
        rows={4}
        placeholder={"Escriba las condiciones"}
        required={true}
      />
      {textArea}
    </FormControl>
  );
}

export default App;
