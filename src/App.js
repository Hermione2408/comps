import Sidebar from "./components/sidebar"
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from "./pages/ModalPage";
function App() {

  return (
    <div className="container mx-auto grid gr                        id-cols-6 gap-4 mt-4">
      <Sidebar />
      <div className="col-span-5">
        <Route path="/accordion">
          <AccordionPage />
        </Route>
      </div>
      <Route path="/">
        <DropdownPage />
      </Route>
      <Route path="/button">
        <ButtonPage/>
      </Route>
      <Route path="/modal">
        <ModalPage/>
      </Route>
    </div>
  )

}

export default App;