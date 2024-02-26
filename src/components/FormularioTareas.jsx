import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListaTareas from "./ListaTareas";
import { useState, useEffect } from "react";

const FormularioTareas = () => {
  const [tarea, setTarea] = useState("");
  const tareasLocalStorage =
    JSON.parse(localStorage.getItem("tareasKey")) || [];
  const [tareas, setTareas] = useState(tareasLocalStorage);

  useEffect(() => {
    localStorage.setItem("tareasKey", JSON.stringify(tareas));
  }, [tareas]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTareas([...tareas, tarea]);
    setTarea("");
  };

  const borrarTarea = (nombreTarea) => {
    const indiceTarea = tareas.findIndex((tarea) => tarea === nombreTarea);
    if (indiceTarea !== -1) {
      const nuevasTareas = [
        ...tareas.slice(0, indiceTarea),
        ...tareas.slice(indiceTarea + 1),
      ];
      setTareas(nuevasTareas);
    }
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="mb-3 d-flex justify-content-between"
          controlId="exampleForm.ControlInput1"
        >
          <Form.Control
            type="text"
            placeholder="Agregar Tarea"
            minLength={3}
            maxLength={50}
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
            required
          />
          <Button variant="warning" className="mx-3" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas tareas={tareas} borrarTarea={borrarTarea}></ListaTareas>
    </section>
  );
};

export default FormularioTareas;
