import React, { useState } from "react";
import { Header } from "../Header";
import { Form, InputGroup } from "react-bootstrap";
<<<<<<< HEAD
import { useHistory} from "react-router-dom";
import { ModalClient } from "./ModalClient";


export const ShoppingUser = () => {
=======
import { useHistory } from "react-router-dom";

// import { Button, Modal } from "react-bootstrap";


export const ShoppingUser = () => {
  const history = useHistory();

>>>>>>> fc426f7 (ultimo cambio)
  // // MODAL
  // const [show, setShow] = React.useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  const [client, setClient] = useState({
    name: "",
    employee_code: "",
    postal_code: "",
  });

  // const [grouClient, setGroupClient] = useState([]);

  const handleClient = (e) => {
    const value = e.target.value;
    setClient({ ...client, [e.target.name]: value });
  };

  // const arrayClient = (e) => {
  //   e.preventDefault();
  //   if (client.name !== "") {
  //     setGroupClient([...grouClient, client]);
  //   }
  // };

  // const handleSubmit = () => {
  //   setShow(true);
  // };

  return (
    <>
      <Header />
      <section className="bri-containerSaldo">
        <i>⬅</i>
        {/* <p>
          Saldo disponible: <b>S/50.00</b>
        </p> */}
      </section>
      <section className="bri-containerDescription">
        <h6>Cliente</h6>
      </section>
      <Form>
        {["radio"].map((type) => (
          <div key={`inline-${type}`} className="check-radio">
            <Form.Check
              inline
              label="Para Mi"
              name="group1"
              type={type}
              id={`inline-${type}-1`}
              checked
              onChange={() => history.push('/usuario')}
            />
            <Form.Check
              inline
              label="Otro Cliente"
              name="group1"
              type={type}
              id={`inline-${type}-2`}
              onChange={() => history.push('/cliente')}
            />
          </div>
        ))}
      </Form>
      <Form>
        <section className="inputNombre">
          <Form.Group controlId="formGroupName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={(e) => handleClient(e)}
            />
          </Form.Group>
        </section>
        <section className="inputCodeNumber">
          <Form.Group controlId="formGroupNumber">
            <Form.Label>Código de trabajador</Form.Label>
            <Form.Control
              type="number"
              name="employee_code"
              onChange={(e) => handleClient(e)}
            />
          </Form.Group>
        </section>
        <section className="inputZoneNumber">
          <Form.Group controlId="formGroupNumber">
            <Form.Label>Código de zona</Form.Label>
            <Form.Control
              type="number"
              name="postal_code"
              onChange={(e) => handleClient(e)}
            />
          </Form.Group>
        </section>
        <section className="paula-consultaCodigo">
          <InputGroup className="mb-3 input-group m-auto">
            <p className="mb-0 me-2">Consulta el código de zona ➡️ </p>
            <a className='ms-2' target="_blank" href="http://www.codigopostal.gob.pe/pages/invitado/consulta.jsf" rel="noreferrer">Ir...</a>
            {/* <Link to='http://www.codigopostal.gob.pe/pages/invitado/consulta.jsf'></Link> */}
{/*             <InputGroup.Text className="border-0 bg-transparent text-danger">
              <i className="fas fa-search"></i>
            </InputGroup.Text> */}
          </InputGroup>
        </section>
        <section className="btnAgregar">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            // onClick={handleSubmit()}
          >
            Finalizar pedido
          </button>
        </section>
      </Form>

      {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>¡Felicidades!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tu pedido ha sido regitrado exitosamente y será descontado en tu
          próxima planilla
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ACEPTAR
          </Button>
        </Modal.Footer>
      </Modal> */}
    </>
  );
};
