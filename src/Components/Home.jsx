import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const Table = styled.div`
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
`;
export const Home = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(`https://employees-dino-app.herokuapp.com/city`)
      .then((res) => res.json())
      .then((res) => {
        setData([...res]);
      })
      .catch((error) => console.log(error));
  };

  const deleteData = (id) => {
    fetch(`https://employees-dino-app.herokuapp.com/${id}`, {
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
      <div>
        <button
          onClick={() => {
            navigate("/add-country");
          }}
        >
          Add Country
        </button>
        <button
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
        {data.map((e) => (
          <tr key={e.id}>
            <td>{e.id}</td>
            <td>{e.country}</td>
            <td>{e.city}</td>
            <td>{e.population}</td>
            <td>Edit</td>
            <td
              onClick={() => {
                deleteData(e.id);
              }}
            >
              Delete
            </td>
          </tr>
        ))}
      </Table>
    </div>
  );
};
