import Axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import { Col, Form, Jumbotron, Row, Button } from "react-bootstrap";
import converDt from "../../util/CommonUtils";

const PageDt = ({ match }) => {
  const [data, setData] = useState([]);
  const { board_id } = match.params;

  const [contents, setContents] = useState({
    updatedt: converDt(new Date(), "yyyy-MM-DD HH:mm:ss"),
  });

  const getBoards = async () => {
    const res = await Axios.get(`http://localhost:8080/v1/board/${board_id}`);
    setData(res.data);
  };

  useEffect(() => {
    getBoards();
    console.log(data);
  }, [getBoards]);

  const onChagne = (e) => {
    setContents({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(contents);
  };

  const onSave = () => {
    Axios.post(`http://localhost:8080/v1/board/save/`, contents).then((res) => {
      getBoards();
    });
  };

  const onDelete = () => {
    Axios.delete(`http://localhost:8080/v1/board/delete/${board_id}`, contents);
    window.location.replace(`/freeboard`);
  };

  return (
    <>
      <Jumbotron>
        <h1>게시글 상세</h1>
        <div>{board_id}의 상세페이지 입니다.</div>
      </Jumbotron>
      <Form style={{ textAlign: "center" }}>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            게시글 번호
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly value={data.board_id || ""} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            작성자
          </Form.Label>
          <Col sm="10">
            <Form.Control plaintext readOnly value={data.user_id || ""} />
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
              defaultValue={data.title}
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
              defaultValue={data.context}
              autoComplete="off"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            게시일
          </Form.Label>
          <Col sm="2">
            <Form.Control plaintext readOnly defaultValue={data.regDt || ""} />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            최종 수정날짜
          </Form.Label>
          <Col sm="2">
            <Form.Control
              plaintext
              readOnly
              defaultValue={data.updatedt || ""}
            />
          </Col>
        </Form.Group>
        <Row className="justify-content-md-center">
          <Button variant="primary" onClick={onSave}>
            저장
          </Button>{" "}
          <Button variant="danger" onClick={onDelete}>
            삭제
          </Button>{" "}
        </Row>
      </Form>
    </>
  );
};

export default PageDt;
