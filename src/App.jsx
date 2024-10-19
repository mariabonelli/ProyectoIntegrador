import Drawer from "./Components/Drawer/Drawer";
import InputField from "./Components/Form/Inputfield";
import FormControl from "./Components/Form/FormControl";
import TextArea from "./Components/Form/TextArea";

function App() {
  return (
    <>
      {/*      <Drawer /> */}
      <FormControl>
        <TextArea />
        {/*TextArea({ outlined: true })*/}
        {/* <etiqueta-de-apertura atributos="id"/> */}
        <TextArea outlined={true} />
        <InputField />
        <InputField outlined={true} />
      </FormControl>
    </>
  );
}

export default App;
