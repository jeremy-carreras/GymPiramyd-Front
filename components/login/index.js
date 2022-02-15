import { Container, Button } from "react-bootstrap";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();

  const handleNextPage = () => {
    router.push("/matricula");
  };

  return (
    <Container>
      <p className="h2">Siguiente página</p>
      <Button className="btn btn-success" onClick={handleNextPage}>
        Aceptar
      </Button>
    </Container>
  );
};

export default Login;
