import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminHomePage } from '/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/pages/AdminHomePage.js';
import { ApplicationFormPage } from '/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/pages/ApplicationFormPage.js';
import { CreateTripPage } from '/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/pages/CreateTripPage.js';
import { ListTripsPage } from '/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/pages/ListTripsPage.js';
import { LoginPage } from '/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/pages/LoginPage.js';
import { TripDetailsPage } from '/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/pages/TripDetailsPage.js';
import { HomePage } from '/home/carolinabratos/Área de Trabalho/franklin-Carolina-Almeida/modulo1/labex/src/pages/HomePage.js';


export const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>} />
                <Route path="/admin/trips/list" element={<AdminHomePage/>} />
                <Route path="/trips/application" element={<ApplicationFormPage/>} />
                <Route path="/admin/trips/create" element={<CreateTripPage/>} />
                <Route path="/trips/list" element={<ListTripsPage/>} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/admin/trips/:id" element={<TripDetailsPage/>} />
            </Routes>
        </BrowserRouter>
    )


}