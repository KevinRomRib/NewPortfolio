import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillGithub } from 'react-icons/ai';
import styled from 'styled-components';

const Field = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  font-size: 50px;
  gap: 10px;
`;

const Container = styled.div`
  width: 500px;
  @media(max-width: 1120px){
    width: auto;
  }
  @media(max-width: 490px){
    width: 450px;
  }
  @media(max-width: 470px){
    width: 400px;
  }
  @media(max-width: 400px){
    width: 350px;
  }
`;

interface CardProps {
  link?: string;
  text?: string;
  title?: string;
  type?: string;
  tecnologias?: React.ReactNode;
}

const Cards: React.FC<CardProps> = ({ link, text, title, type, tecnologias }) => {

  const redirecionarParaSiteExterno = (link: any) => {
    const siteExternoURL = link;
    window.open(siteExternoURL, '_blank');
  };

  return (
    <Container>
      <Card style={{
        background: '#2D2D2D',
        color: 'white',
        border: '1px solid white',
        margin: '20px',
      }}>
        <Card.Body style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '20px',
        }}>
          <Card.Title>{title}</Card.Title>
          {text && (
            <Card.Text>
              {text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Card.Text>
          )}
          <Field>
            {tecnologias}
          </Field>
          <Button
            variant="primary"
            onClick={() => redirecionarParaSiteExterno(link)}
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px'
            }}>
            {type === "projeto" ? (
              <>
                <AiFillGithub />
                "Repositório"
              </>
            ) : "Empresa"}
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Cards;