import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getCityData } from "../Redux/City/action";
import { Modal } from "./Model";
const MainDiv = styled.div`
  width: 40%;
  margin: auto;
  margin-top: 50px;
  .btn {
    height: 38px;
    border: none;
    background-color: tomato;
    color: white;
    :hover {
      opacity: 0.9;
    }
  }
  .btnDiv {
    display: flex;
    justify-content: space-around;
  }
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Button = styled.button`
  padding: 4px;
  border-radius: 4px;
  border: 1px dashed green;
  color: black;
  background-color: white;
  font-size: 15px;
  cursor: pointer;
`;
const Table = styled.div`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
  margin-top: 50px;
  td,
  th {
    border-bottom: 1px solid #dddddd;
    text-align: left;
    padding: 8px 18px;
    width: 100%;
  }
`;
export const Home = () => {
  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [cityId, setId] = useState("");

  const openModal = (id) => {
    setShowModal((prev) => !prev);
    setId(id);
  };

  const { city } = useSelector((state) => state.city);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(getCityData());
  };

  const deleteData = (id) => {
    fetch(`https://employees-dino-app.herokuapp.com/city/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((res) => {
        fetchData();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <MainDiv>
        <div className="btnDiv">
          <button
            className="btn"
            onClick={() => {
              navigate("/add-country");
            }}
          >
            Add Country
          </button>
          <button
            className="btn"
            onClick={() => {
              navigate("/add-city");
            }}
          >
            Add City
          </button>
        </div>

        <Table>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th className="Edit">Edit</th>
            <th className="Delete">Delete</th>
          </tr>
          {city.map((e) => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.country}</td>
              <td>{e.city}</td>
              <td>{e.population}</td>
              <td>
                <Button
                  onClick={() => {
                    openModal(e.id);
                  }}
                  className="Edit"
                >
                  Edit
                </Button>
              </td>
              <td>
                <Button
                  className="Delete"
                  onClick={() => {
                    deleteData(e.id);
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </Table>
      </MainDiv>
      <Container>
        <Modal id={cityId} showModal={showModal} setShowModal={setShowModal} />
      </Container>
    </div>
  );
};
