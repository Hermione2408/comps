import Sidebar from "./components/sidebar"
import Route from './components/Route';
import AccordionPage from './pages/AccordionPage';
import DropdownPage from './pages/DropdownPage';
import ButtonPage from './pages/ButtonPage';
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
function App() {

  return (
    <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
      <Sidebar />
      <div>
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
      <Route path="/table">
        <TablePage/>
      </Route>
    </div>
  )

}

export default App;