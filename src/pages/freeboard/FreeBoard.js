import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table, Button } from "react-bootstrap";
import Pagination from "../../component/Pagenation";

const FreeBoard = ({ history }) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage] = useState(5);

  const totalPosts = data.length;

  useEffect(() => {
    const getBoards = async () => {
      const res = await axios.get("http://localhost:8080/v1/board");
      setData(res.data);
    };
    getBoards();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * perPage;
  const indexOfFirstPost = indexOfLastPost - perPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  //Change Page Number
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  //상세 페이지 이동
  const pageDt = (param) => {
    history.push(`/freeboard/${param.board_id}`);
  };

  //글쓰기
  const onWrite = () => {
    history.push("/writeboard");
  };

  if (totalPosts === 0) {
    return <p>There are no databases</p>;
  }
  return (
    <Container>
      <p>Showing {totalPosts} boards</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>내용</th>
            <th>등록일</th>
            <th>최근 수정일</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((el) => (
            <tr
              key={el.board_id}
              onClick={() => pageDt(el)}
              style={{ cursor: "pointer" }}
            >
              <td>{el.board_id}</td>
              <td>{el.title}</td>
              <td>{el.user_id}</td>
              <td>{el.context}</td>
              <td>{el.regDt}</td>
              <td>{el.updatedt}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalPosts={totalPosts}
        perPage={perPage}
        paginate={paginate}
        currentPage={currentPage}
      />
      <Button variant="primary" onClick={onWrite} style={{ float: "right" }}>
        글쓰기
      </Button>{" "}
    </Container>
  );
};

export default FreeBoard;
