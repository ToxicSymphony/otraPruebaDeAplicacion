import { Routes, Route, Link } from "react-router-dom";
import { Menu } from "../Components/Menu/Menu";
import { Noticias } from "../Views/Noticias/Noticias";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import { Indicadores } from "../Views/Indicadores/Indicadores";
import { Indicador } from "../Views/Indicador/Indicador";

export function Rutas() {
  return (
    <>
   
    <div className="d-flex flex-grow-1">
      <Sidebar/>
      <div className="">
      {/* <Menu /> */}
      <Routes>
        <Route path="/" exact element={<Noticias />} />
        <Route path="/indicadores" exact element={<Indicadores />}/>
        <Route path="/indicadores/indicador:id" exact element={<Indicador />}/>
      </Routes>
     </div>
    </div>
    </>
  );
}
