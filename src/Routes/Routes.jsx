import { Routes, Route, Link } from "react-router-dom";
import { Menu } from "../Components/Menu/Menu";
import { Home } from "../Views/Home/Home";
import { Sidebar } from "../Components/Sidebar/Sidebar";
import { Indicadores } from "../Views/Indicadores/Indicadores";
import { Indicador } from "../Views/Indicador/Indicador";
import { Celulas } from "../Views/Celulas/Celulas";
import { Celula } from "../Views/Celula/Celula";


export function Rutas() {
  return (
    <>
   
    <div className="">
      <Menu />
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/indicadores" exact element={<Indicadores />}/>
        <Route path="/indicadores/indicador:id" exact element={<Indicador />}/>
        <Route path="/celulas" exact element={<Celulas />}/>
        <Route path="/celulas/celula:id" exact element={<Celula/>}/>
      </Routes>
     </div>
    </>
  );
}
