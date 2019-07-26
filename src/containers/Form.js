import React from "react";
import styled from "styled-components";
import Button from "../components/Buttons";
import Modal from "../components/Modal";

const Container = styled.section`
  width: 70%;
  margin: 1em auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  align-items: center;
  padding: 1em 5em;
  border-radius: 5px;
  max-width: 400px;
`;

const FlexColum = styled.div`
  flex: ${props => props.value || "1"};
  padding: 5px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  border: 2px solid #ececec;
  border-radius: 5px;
  padding: 0.6em 2em;
  color: gray;
`;

const TextBox = styled.textarea`
  border: 2px solid #ececec;
  border-radius: 5px;
  padding: 1.2em 2.4em;
  color: gray;
`;

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      text: "",
      showModal: false,
      modalMsg: "La operación ha sido exitosa"
    };
  }

  componentDidMount() {
    const { id, hook } = this.props;
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/${hook}/${id}`)
        .then(res => res.json())
        .then(response => {
          const { body, title } = response;
          this.setState({
            title: title,
            text: body
          });
        });
    }
  }

  handleInput = input => event => {
    this.setState({
      [input]: event.target.value
    });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  resetForm = () => {
    this.setState({ title: "", text: "" });
  };

  makeRequest = () => {
    const { hook, method } = this.props;
    fetch(`https://jsonplaceholder.typicode.com/${hook}`, {
      method
    })
      .then(res => res.json())
      .then(response => {
        if (response.id) {
          this.resetForm();
          this.setState({
            showModal: true
          });
        }
      })
      .catch(e => {
        this.setState({
          showModal: true,
          modalMsg: `Error: La petición falló - ${e.message}`
        });
      });
  };

  render() {
    return (
      <Container>
        <Modal showModal={this.state.showModal}>
          <FlexColum value={3}>
            <h2>{this.state.modalMsg}</h2>
          </FlexColum>
          <FlexColum>
            <Button onClick={this.closeModal}>Cerrar</Button>
          </FlexColum>
        </Modal>
        <h1>{this.props.type} Publicación</h1>
        <FlexContainer>
          <FlexColum>
            <Input
              placeholder="Titulo"
              onChange={this.handleInput("title")}
              value={this.state.title}
            />
          </FlexColum>
          <FlexColum>
            <TextBox
              placeholder="Texto"
              onChange={this.handleInput("text")}
              value={this.state.text}
            />
          </FlexColum>
          <FlexColum>
            <Button
              onClick={this.makeRequest}
              primary
              disabled={!this.state.text || !this.state.title}
            >
              {this.props.type}
            </Button>
          </FlexColum>
        </FlexContainer>
      </Container>
    );
  }
}

export default Form;
