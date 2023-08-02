import { Route, Routes } from "react-router-dom";
import RootLayout from "./layouts/root/RootLayout";
import Specialists from "./pages/all-specialists/Specialists";
import Specialist from "./pages/specialist/Specialist";
import Services from "./pages/all-services/Services";
import Contacts from "./pages/contacts/Contacts";
import NoMatch from "./pages/no-match/NoMatch";
import Service from "./pages/service/Service";
import Home from "./pages/home/Home";


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
        <Route path='*' element={<NoMatch />} />
      </Route >
    </Routes >
  );
};

export default App;
