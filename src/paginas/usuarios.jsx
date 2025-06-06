import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';

export default function Perfil() {
  const { id } = useParams();

  return (
    <Container className="mt-4">
      <h2>Administracion de Usuarios</h2>
      <p>Bienvenido, {id}</p>
    </Container>
  );
}