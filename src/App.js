import React from "react";
import {Route,Routes} from "react-router-dom";
import HomePages from "./Pages/HomePages";
const App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePages/>}/>
            </Routes>
        </>
    )
}
export default App