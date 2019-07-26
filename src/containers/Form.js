import React from "react";
import styled from "styled-components";
import Button from "../components/Buttons";
import Modal from "../components/Modal";
import PropType from "prop-types";

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

const FlexGrid = styled.div`
  flex: ${props => props.value || "1"};
  padding: 5px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

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
    const { id, hook } = this.props;
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/${hook}`)
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
    this.props.onCloseModal();
    if (this.props.method === "DELETE") {
      this.goToHome();
    }
  };

  resetForm = () => {
    this.setState({ title: "", text: "" });
  };

  goToHome = () => {
    this.props.history.push("/");
  };

  makeRequest = () => {
    this.resetForm();
    this.props.func(this.props.id);
  };

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
        {this.props.method === "DELETE" && (
          <h4>Estás seguro que deseas eliminarlo?</h4>
        )}
        <FlexContainer>
          <FlexGrid>
            <Input
              placeholder="Titulo"
              onChange={this.handleInput("title")}
              value={this.state.title}
              {...this.props.method === "DELETE" && { readOnly: true }}
            />
          </FlexGrid>
          <FlexGrid>
            <TextBox
              placeholder="Texto"
              onChange={this.handleInput("text")}
              value={this.state.text}
              {...this.props.method === "DELETE" && { readOnly: true }}
            />
          </FlexGrid>
          <FlexGrid>
            <Button
              onClick={this.makeRequest}
              {...(this.props.method === "DELETE"
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
  text: PropType.string.isRequired,
  title: PropType.string.isRequired,
  id: PropType.number.isRequired
};

export default Form;
