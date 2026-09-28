import Faq from "./components/Faq";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ProductQuantity from "./components/ProductQuantity";
import NotesApp from "./components/NotesApps";
import UserList from "./components/UserList";
function App() {
  return (
    <div className="container my-10">
      <h1 className="text-center text-6xl mb-4">Custom Hooks</h1>
      <div className="my-10 border-b py-4">
        <h2 className="text-4xl">Esercizio 1</h2>
        <Faq question={"pasta del giorno?"} answer={"pasta al sugo"} />
        <Faq question={"carne del giorno?"} answer={"carne di bovino"} />
        <ThemeSwitcher />
      </div>
      <div className="my-10 border-b py-4">
        <h2 className="text-4xl">Esercizio 2</h2>
        <ProductQuantity />
      </div>
      <div className="my-10 border-b py-4">
        <h2 className="text-4xl">Esercizio 3</h2>
        <NotesApp />
      </div>
      <div className="my-10 border-b py-4">
        <h2 className="text-4xl">Esercizio 4</h2>
        <UserList />
      </div>
    </div>
  );
}

export default App;

/*Questo codice crea il componente principale App che importa e visualizza diversi componenti React (Faq, ThemeSwitcher, ProductQuantity, NotesApp e UserList), 
organizzandoli in 4 esercizi sui Custom Hooks e mostrando ogni esercizio all'interno di una sezione separata della pagina.*/
