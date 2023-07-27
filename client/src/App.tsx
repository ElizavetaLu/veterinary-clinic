import { Route, Routes } from "react-router-dom";
import NoMatch from "./pages/no-match/NoMatch";
import Home from "./pages/home/Home";
import RootLayout from "./layouts/root/RootLayout";
import Service from "./pages/service/Service";
import Contacts from "./pages/contacts/Contacts";


const App = () => {
  return (
    <Routes>
      < Route path="/" element={< RootLayout />}>
        <Route index element={<Home />} />
        <Route path="service/:name" element={<Service />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path='*' element={<NoMatch />} />
      </Route >
    </Routes >
  );
};

export default App;
