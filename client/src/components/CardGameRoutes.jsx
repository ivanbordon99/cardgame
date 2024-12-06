import { Route, Routes } from "react-router-dom";
import Game from './Game'
import Login from './CRUD/Login'
const CardGameRoutes = () => {


    return (

        <Routes>


            <Route path="/login" element={<Login />} />
            <Route path="game" element={<Game/>}/>


        </Routes>


    );



}
export default CardGameRoutes;