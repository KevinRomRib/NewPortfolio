import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from 'react-bootstrap/Placeholder';
import { AiFillHtml5, AiFillGithub } from "react-icons/ai"
import { BiLogoReact, BiLogoJava, BiLogoFigma } from "react-icons/bi"
import { RiJavascriptFill } from "react-icons/ri"
import { IoLogoPython } from "react-icons/io"
import { SiMysql, SiApachecassandra, SiNeo4J, SiStyledcomponents } from "react-icons/si"
import { BiLogoMongodb, BiLogoRedux } from "react-icons/bi"
import { DiCss3, DiRedis } from "react-icons/di"
import { FaDocker, FaNodeJs } from "react-icons/fa"
import { GrOracle } from "react-icons/gr"
import { BsGit } from "react-icons/bs"
import styled from 'styled-components';
import { ReactNode } from 'react';


const Field = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  font-size: 50px;
  gap: 10px;
`;



interface CardProps {
  link?: string;
  text?: string;
  title?: string;
  type?: string;
  tecnologias?: ReactNode
}

const Cards: React.FC<CardProps> = ({ link, text, title, type, tecnologias }) => {

  const redirecionarParaSiteExterno = (link: any) => {
    const siteExternoURL = link;
    window.open(siteExternoURL, '_blank');
  };

  return (
      <div className="d-flex justify-content-around">
        <Card style={{ 
          width: '30rem',
          background: '#2D2D2D',
          color: 'white',
          border: '1px solid white',
        }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body style={{ 
            margin: '20px', 
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '20px',
          }}>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {text.split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </Card.Text>
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
                  <AiFillGithub/>
                  "Repositorio"
                </>
              ) : "Empresa"}
            </Button>
          </Card.Body>
        </Card>
      </div>
  );
}

export default Cards;