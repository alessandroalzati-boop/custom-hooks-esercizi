import Faq from "./components/Faq";
import ThemeSwitcher from "./components/ThemeSwitcher";
import ProductQuantity from "./components/ProductQuantity";
import NotesApp from "./components/NotesApps";
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
        <p>Inserisci qui i componenti dell'esercizio</p>
        <ProductQuantity />
      </div>
      <div className="my-10 border-b py-4">
        <h2 className="text-4xl">Esercizio 3</h2>
        <p>Inserisci qui i componenti dell'esercizio</p>
      </div>
      <div className="my-10 border-b py-4">
        <h2 className="text-4xl">Esercizio 4</h2>
        <p>Inserisci qui i componenti dell'esercizio</p>
      </div>
    </div>
  );
}

export default App;
