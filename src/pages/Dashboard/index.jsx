import React, { useState, useEffect } from "react";
import { Api } from "../../components";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
function DashboardPage() {
  const history = useNavigate();
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [result, setSearchResult] = useState([]);
  useEffect(() => {
    //fetch from OMDB Api
    (async () => {
      const { data } = await Api.get("/?s=home&page=$page&apikey=551b55fc");
      setMovies(data.Search);
    })();
  }, []);

  const handleSearch = () => {
    const same = movies.filter((u) =>
      u.Title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSearchResult(same);
    if (result) {
      history(`/search/${searchValue}`);
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 430,
      }}
    >
      <Form.Control
        type="text"
        placeholder="Enter Movies or Series name"
        className=" mr-sm-2"
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
        style={{ width: 590, borderRadius: 35, height: 60 }}
      />
      <div style={{ paddingLeft: 5 }}>
        <Button
          size="lg"
          onClick={() => {
            handleSearch();
          }}
          style={{ borderRadius: 35, height: 60 }}
        >
          Search
        </Button>
      </div>
    </div>
  );
}

export default DashboardPage;
