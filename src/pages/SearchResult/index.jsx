import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";
import { Api, Pagination, CardBox } from "../../components";
function SearchResult() {
  const { params } = useParams();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    (async () => {
      if (params) {
        const { data } = await Api.get(
          "/?&apikey=551b55fc&s=" + params + "&page=page"
        );
        setMovies(data.Search);
      }
    })();
  }, [params]);
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <Row xs={1} md={5} className="g-4">
            {movies
              ? movies.map(
                  (movie, idx) =>
                    idx >= (currentPage - 1) * 5 &&
                    idx < currentPage * 5 && (
                      <Col key={idx}>
                        <CardBox
                          src={movie.Poster}
                          title={movie.Title}
                          year={movie.Year}
                        ></CardBox>
                      </Col>
                    )
                )
              : "error"}
          </Row>
        </Col>
      </Row>
      <Pagination
        current={currentPage}
        total={5}
        onPageChange={setCurrentPage}
      />
    </Container>
  );
}

export default SearchResult;
