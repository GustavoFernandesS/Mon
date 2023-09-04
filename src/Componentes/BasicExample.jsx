import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function BasicExample() {

  const url = "http://ffsgestaocondominial.com.br/wp-content/uploads/2017/07/logomarca-ffs-gestao-condominial.png";

  return (
      <Navbar bg='light' data-bs-theme="light">
        <Container>
          <Navbar.Brand href="/"><img src={url} alt="Imagem" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">A Empresa</Nav.Link>
            <Nav.Link href="/Administradores">Administração de Condominio</Nav.Link>
            <Nav.Link href="/Sobre">Sindico Profissional</Nav.Link>
            <Nav.Link href="/Contato">Contato</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

  export default BasicExample