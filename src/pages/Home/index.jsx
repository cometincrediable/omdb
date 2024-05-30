import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Api, Pagination,CardBox } from "../../components";
function HomePage() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    //fetch from OMDB Api
    (async () => {
      let page = 1;
      while (page <= 3) {
        const { data } = await Api.get("/?s=home&page=$page&apikey=551b55fc");
        setMovies(data.Search);
        page++;
      }
    })();
  }, []);
  return (
    <Container>
      <Row>
        <Col sm={12}>
          <div className="main">
            <Row xs={1} md={5} className="g-4">
              {movies.map(
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
              )}
            </Row>
          </div>
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

export default HomePage;
