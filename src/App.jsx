import InputField from "./Components/Form/Inputfield";
import FormControl from "./Components/Form/FormControl";
import TextArea from "./Components/Form/TextArea";
import Drawer from "./Components/Drawer/Drawer";
import Banner from "./Components/Banner/Banner";

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
