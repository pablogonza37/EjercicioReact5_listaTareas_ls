import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioTareas from "./components/FormularioTareas";

function App() {
  return (
    <>
      <Container>
        <h1 className="display-1 text-center text-white my-3">Lista de Tareas</h1>
        <FormularioTareas></FormularioTareas>
      </Container>
    </>
  );
}

export default App;
