import React from "react";
import styled from "styled-components";
import Button from "../components/Buttons";
import Modal from "../components/Modal";
import PropType from "prop-types";
import { FlexGrid, FlexContainer, Container } from "../components/Styled"

const Input = styled.input`
  border: ${props => (props.readOnly ? "0" : "2px solid #ececec")};
  border-radius: 5px;
  padding: 0.6em 2em;
  color: gray;
  background: ${props => (props.readOnly ? "#fbfbfb" : "white")};
`;

const TextBox = styled.textarea`
  border: ${props => (props.readOnly ? "0" : "2px solid #ececec")};
  border-radius: 5px;
  padding: 1.2em 2.4em;
  color: gray;
  background: ${props => (props.readOnly ? "#fbfbfb" : "white")};
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: ""
    };
  }

  componentDidMount() {
    if (this.props.id) {
      this.getSelectedPost()
    }
  }

  /**
   * Obtiene el post seleccionado
   */
  getSelectedPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/${this.props.hook}`)
      .then(res => res.json())
      .then(response => {
        const { body, title } = response;
        this.setState({
          title: title,
          text: body
        });
      });
  }

  /**
   * Manejador de eventos input.
   */
  handleInput = input => event => {
    this.setState({
      [input]: event.target.value
    });
  };

  /**
   * Cierra el modal, en caso de ser el metodo DELETE, redirige para el inicio
   */
  closeModal = () => {
    this.props.onCloseModal();
    if (this.isForDelete()) {
      this.goToHome();
    }
  };

  /**
   * Limpia los campos del formulario
   */
  resetForm = () => {
    this.setState({ title: "", text: "" });
  };

  /**
   * Navega hasta el inicio
   */
  goToHome = () => {
    this.props.history.push("/");
  };

  /**
   * Realiza la peticion pasada por parametro
   */
  makeRequest = () => {
    this.resetForm();
    this.props.func(this.props.id);
  };


  isForDelete() {
    return this.props.type === "Eliminar";         
  }

  render() {
    return (
      <Container>
        <Modal showModal={this.props.showModal}>
          <FlexGrid value={3}>
            <h2>{this.props.modalMsg}</h2>
          </FlexGrid>
          <FlexGrid>
            <Button onClick={this.closeModal}>Cerrar</Button>
          </FlexGrid>
        </Modal>
        <h1>{this.props.type} Publicación</h1>
        {this.isForDelete() && (
          <h4>Estás seguro que deseas eliminarlo?</h4>
        )}
        <FlexContainer>
          <FlexGrid>
            <Input
              placeholder="Titulo"
              onChange={this.handleInput("title")}
              value={this.state.title}
              {...this.isForDelete() && { readOnly: true }}
            />
          </FlexGrid>
          <FlexGrid>
            <TextBox
              placeholder="Texto"
              onChange={this.handleInput("text")}
              value={this.state.text}
              {...this.isForDelete() && { readOnly: true }}
            />
          </FlexGrid>
          <FlexGrid>
            <Button
              onClick={this.makeRequest}
              {...(this.isForDelete()
                ? { danger: true }
                : { primary: true })}
              disabled={!this.state.text || !this.state.title}
            >
              {this.props.type}
            </Button>
          </FlexGrid>
        </FlexContainer>
      </Container>
    );
  }
}

Form.propTypes = {
  hook: PropType.string.isRequired,
  type: PropType.string.isRequired,
  id: PropType.number,
  func: PropType.func.isRequired
};

export default Form;
