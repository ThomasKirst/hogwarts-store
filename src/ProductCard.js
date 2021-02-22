import styled from 'styled-components';

export default function ProductCard({ product }) {
  console.log(product);
  return (
    <Card>
      <h4>{product.name}</h4>
      <p>
        <span>{product.price + ' '}</span>
        <span>{product.currency}</span>
      </p>
      <p>Package Size: {product.packageSize}</p>
      <p>{product.supportContact}</p>
      <p>{product.tags}</p>
    </Card>
  );
}

const Card = styled.div`
  background-color: #6171ad;
  padding: 0.5rem 0.5rem 2rem 1.5rem;
  border-radius: 10px;
  max-width: 500px;
  margin: 2rem auto 0;
`;
