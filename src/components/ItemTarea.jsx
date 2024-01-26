import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

const ItemTarea = ({ nombreTarea, borrarTarea }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {nombreTarea}
      <Button variant="danger" onClick={() => borrarTarea(nombreTarea)}>
        Borrar
      </Button>
    </ListGroup.Item>
  );
};

export default ItemTarea;
