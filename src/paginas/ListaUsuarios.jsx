import { Table, Button } from 'react-bootstrap';

function ListaUsuarios({ usuarios, onEdit, onDelete }) 
{
  if (usuarios.length === 0) 
    {
    return <p>No hay usuarios cargados.</p>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>      
          <th>Nombre</th>
          <th>Apellido</th>
          <th style={{ width: '150px' }}>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map(({ id, nombre, apellido }) => (
          <tr key={id}>
            <td>{id}</td>  
            <td>{nombre}</td>
            <td>{apellido}</td>
            <td>
              <Button
                variant="warning"
                size="sm"
                className="me-2"
                onClick={() => onEdit({ id, nombre, apellido })}
              >
                Editar
              </Button>
              <Button
                variant="danger"
                size="sm"
                onClick={() => onDelete(id)}
              >
                Borrar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default ListaUsuarios;