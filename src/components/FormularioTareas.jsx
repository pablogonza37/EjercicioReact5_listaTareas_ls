import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";

const FormularioTareas = () => {
  return (
    <section>
      <Form>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control type="text" placeholder="Agregar Tarea" />
          <Button variant="warning" className="mx-3">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
