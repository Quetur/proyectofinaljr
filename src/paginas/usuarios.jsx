import { useParams } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import UsuarioForm from './UsuarioForm';
import { useState } from 'react';
import ListaUsuarios from './ListaUsuarios';
export default function Perfil() {
  const { id } = useParams();

  
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioEditar, setUsuarioEditar] = useState(null);
  const [contadorId, setContadorId] = useState(1);

const agregarUsuario=(usuario)=>
{
    const nuevoUsuario = { ...usuario, id: contadorId };
    setUsuarios([...usuarios, nuevoUsuario]);
    setContadorId(contadorId + 1);
};

const actualizarUsuario = (usuarioActualizado) => 
    {
    setUsuarios(usuarios.map(p => (p.id === usuarioActualizado.id ? usuarioActualizado : p)));
    setUsuarioEditar(null);
  };

 const borrarUsuario = (id) => 
    {
    setUsuarios(usuarios.filter(p => p.id !== id));
  };

 const editarUsuario = (usuario) => 
    {
    setUsuarioEditar(usuario);
  };



  return (
    <Container className="mt-4">
      <h2>Administracion de Usuarios</h2>
      <p>Bienvenido, {id}</p>
       <UsuarioForm
        onSubmit={usuarioEditar ? actualizarUsuario : agregarUsuario}
        usuarioEditar={usuarioEditar}
        onCancel={() => setUsuarioEditar(null)}
      />
      <ListaUsuarios
        usuarios={usuarios}
        onEdit={editarUsuario}
        onDelete={borrarUsuario}
      />
    </Container>
  );
}