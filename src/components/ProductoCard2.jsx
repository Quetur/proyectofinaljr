import styled from 'styled-components';
import miLogo from './micard.png';

const Card = styled.div`
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 1rem;
  background: white;
  height: 100%;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.03);
  }

  img {
    height: 150px;
    object-fit: contain;
    width: 100%;
    margin-bottom: 1rem;
  }
`;

export default function ProductoCard({ producto }) 
{
  return (
    <Card className="mb-3">
       <Card.Img height="300" src={producto.imageUrl || miLogo}/>

      <h5>{producto.name}</h5>
      <p className="text-muted">${producto.cmc}</p>
    </Card>
  );
}