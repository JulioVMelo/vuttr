import React from "react";
import { Container } from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as ToolsActions } from "../../store/ducks/tools";
import { Form, Input } from "@rocketseat/unform";
import * as yup from "yup";
import * as message from "../../util/messageValidation/";

const schema = yup.object().shape({
  title: yup
    .string()
    .required(message.required),
  link: yup
    .string()
    .url(message.url)
    .required(message.required),
  description: yup
    .string()
    .required(message.required),
  tags: yup
    .string().required(message.required)
});

const panelAdd = ({ toggleAddPanel, addTool }) => (
  <Container>
    <div className="container">
      <header>
        <h2>Add new tool</h2>
        <span onClick={() => toggleAddPanel()}>&times;</span>
      </header>

      <Form onSubmit={data => addTool(data)} schema={schema}>
        <div className="boxInput">
          <Input label="Name*" name="title" />
        </div>

        <div className="boxInput">
          <Input label="Link*" name="link" />
        </div>

        <div className="boxInput">
          <Input label="Description*" name="description" />
        </div>

        <div className="boxInput">
          <Input label="Tags" name="tags" />
        </div>

        <div className="action">
          <button type="submit">Send</button>
        </div>
      </Form>
    </div>
  </Container>
);

const mapDispatchToProps = dispatch =>
  bindActionCreators(ToolsActions, dispatch);

const mapStateToProps = state => ({
  state
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(panelAdd);
