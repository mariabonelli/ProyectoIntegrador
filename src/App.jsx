import Drawer from "./Components/Drawer/Drawer";
import Banner from "./Components/Banner/Banner";
import Calendar from "./Components/Calendar/Calendar";
function App() {
  const [input, setInput] = useState("valor inicial");
  const [textArea, setTextArea] = useState("valor secundario");
  const handleFormSubmit = (e) => {
    console.log(e);
  };
  return (
    <>
      <Drawer>
        <Calendar />
      </Drawer>
    </>
  );
}

export default App;
