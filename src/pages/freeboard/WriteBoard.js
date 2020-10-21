import Axios from "axios";
import React, { useState } from "react";
import { Col, Form, Jumbotron, Row, Button } from "react-bootstrap";
import converDt from "../../util/CommonUtils";

const WriteBoard = () => {
  const [contents, setContents] = useState({
    regDt: converDt(new Date(), "yyyy-MM-DD HH:mm:ss"),
    updatedt: converDt(new Date(), "yyyy-MM-DD HH:mm:ss"),
  });

  const onChagne = (e) => {
    setContents({
      ...contents,
      [e.target.name]: e.target.value,
    });
    console.log(contents);
  };

  const onSave = () => {
    Axios.post(`http://localhost:8080/v1/board/insert/`, contents);
    window.location.replace(`/freeboard`);
  };

  return (
    <>
      <Jumbotron>
        <h1>게시글 작성</h1>
      </Jumbotron>
      <Form style={{ textAlign: "center" }}>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            게시글 번호
          </Form.Label>
          <Col sm="5">
            <Form.Control plaintext readOnly value={""} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            작성자
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              name="user_id"
              onChange={onChagne}
              defaultValue={""}
              autoComplete="off"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            제목
          </Form.Label>
          <Col sm="5">
            <Form.Control
              type="text"
              name="title"
              onChange={onChagne}
              defaultValue={""}
              autoComplete="off"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            내용
          </Form.Label>
          <Col sm="5">
            <Form.Control
              as="textarea"
              name="context"
              rows={3}
              onChange={onChagne}
              defaultValue={""}
              autoComplete="off"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            게시일
          </Form.Label>
          <Col sm="2">
            <Form.Control plaintext readOnly defaultValue={""} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            최종 수정날짜
          </Form.Label>
          <Col sm="2">
            <Form.Control plaintext readOnly defaultValue={""} />
          </Col>
        </Form.Group>
        <Row className="justify-content-md-center">
          <Button variant="primary" onClick={onSave}>
            저장
          </Button>{" "}
        </Row>
      </Form>
    </>
  );
};

export default WriteBoard;
