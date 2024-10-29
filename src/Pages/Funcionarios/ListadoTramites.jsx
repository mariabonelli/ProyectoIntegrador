/* PatiDevs */
import { useEffect, useState } from "react";
import axios from "axios";
import List from "../../Components/List/List";
import ListItemTitle from "../../Components/List/ListItemTitle";

function ListadoTramites() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8080/api/tramites/lista`).then((response) => {
      if (response) {
        setData(response.data);
      }
    });
  }, []);
  return (
    <div style={{ margin: "20px auto", maxWidth: "100%" }}>
      {data.map((item) => (
        <List key={item.id}>
          <ListItemTitle>{item.nombre}</ListItemTitle>
        </List>
      ))}
    </div>
  );
}

export default ListadoTramites;
