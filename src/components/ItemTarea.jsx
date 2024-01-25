import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const ItemTarea = () => {
    return (
        <ListGroup.Item className='d-flex justify-content-between'>Cras justo odiobut<Button variant="danger">Borrar</Button></ListGroup.Item>
    );
};

export default ItemTarea;