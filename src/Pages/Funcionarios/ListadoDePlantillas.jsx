/* AmongBugs */

import axios from "axios";
import { useEffect, useState } from "react";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";
const Data = [
  {
    _id: 1,
    departamento: "Veterinaria",
    descripcionPlantilla:
      "Plantilla utilizada en el envio de notificaciones para el departamente de Veterinaria",
  },
  {
    _id: 2,
    departamento: "Aseo y ornato",
    descripcionPlantilla:
      "Plantilla utilizada en el envio de notificaciones para el departamente de Aseo y ornato",
  },
];

function ListadoDePlantillas() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=50")
      .then((resp) => {
        /*  console.log(resp.data); */
        setData(resp.data.results);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      {Data.map((item) => (
        <div key={item._id}>
          <List>
            <ListItemTitle subtitle={item.descripcionPlantilla}>
              {item.departamento}
            </ListItemTitle>
          </List>
        </div>
      ))}
    </div>
  );
}

export default ListadoDePlantillas;
