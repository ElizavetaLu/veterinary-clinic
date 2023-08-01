import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/no-match/NoMatch";
import Home from "./pages/home/Home";
import RootLayout from "./layouts/root/RootLayout";
import Specialists from "./pages/specialists/Specialists";
import Specialist from "./pages/all-specialist/Specialist";
import Contacts from "./pages/contacts/Contacts";
import Service from "./pages/service/Service";
import Services from "./pages/all-services/Services";
import BookAnAppointment from "./pages/book-an-appointment/BookAnAppointment"; 


const App = () => {
  return ( 
      <Routes>
        < Route path="/" element={< RootLayout />}>
          <Route index element={<Home />} />
          <Route path='services' >
            <Route index element={<Services />} />
            <Route path=':name' element={<Service />} />
          </Route>
          <Route path='specialists' >
            <Route index element={<Specialists />} />
            <Route path=':name' element={<Specialist />} />
          </Route>
          <Route path="contacts" element={<Contacts />} />
          <Route path="book-an-appointment" element={<BookAnAppointment />} />
          <Route path='*' element={<NoMatch />} />
        </Route >
      </Routes >  
  );
};

export default App;
