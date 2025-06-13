import { useState, useEffect } from 'react';
import { Form, Button, Row, Col, Alert } from 'react-bootstrap';

function UsuarioForm({ onSubmit, usuarioEditar, onCancel }) {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [errores, setErrores] = useState([]);

  useEffect(() => {
    if (usuarioEditar) {
      setNombre(usuarioEditar.nombre);
      setApellido(usuarioEditar.apellido.toString());
      setErrores([]);
    } else {
      setNombre('');
      setApellido('');
      setErrores([]);
    }
  }, [usuarioEditar]);

  const validar = () => {
    const erroresValidacion = [];
    if (!nombre.trim()) {
      erroresValidacion.push('El nombre no puede estar vacío.');
    }
    if (!apellido.trim()) {
      erroresValidacion.push('El apellido no debe estar vacio');
    }
    setErrores(erroresValidacion);
    return erroresValidacion.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validar()) return;

    const usuario = {
      nombre: nombre.trim(),
      apellido: apellido.trim(),
    };

    if (usuarioEditar) {
      usuario.id = usuarioEditar.id; 
    }

    onSubmit(usuario);

    if (!usuarioEditar) {
      setNombre('');
      setApellido('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      {errores.length > 0 && (
        <Alert variant="danger">
          <ul>
            {errores.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      <Form.Group as={Row} className="mb-3" controlId="nombre">
        <Form.Label column sm={2}>Nombre</Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Nombre del usuario"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="apellido">
        <Form.Label column sm={2}>Apellido</Form.Label>
        <Col sm={10}>
          <Form.Control
             type="text"
            placeholder="Apellido"
            value={apellido}
            onChange={(e) => setApellido(e.target.value)}
           />
        </Col>
      </Form.Group>

      <Button variant="primary" type="submit" className="me-2">
        {usuarioEditar ? 'Actualizar' : 'Agregar'}
      </Button>

      {usuarioEditar && (
        <Button variant="secondary" onClick={onCancel}>
          Cancelar
        </Button>
      )}
    </Form>
  );
}

export default UsuarioForm;