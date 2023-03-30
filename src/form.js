import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function MyTable() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
      .then(response => setData(response.data))
      .catch(error => console.log(error));
   
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://example.com/api/data', { text })
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  }

  return (
    <Container className="p-3">
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formTextArea">
      <Form.Label>Enter text:</Form.Label>
      <Form.Control as="textarea" rows={3} value={text} onChange={event => setText(event.target.value)} />
    </Form.Group>
    <Button variant="primary" type="submit">Submit</Button>
  </Form>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
         
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.city}</td>
         
          </tr>
        ))}
      </tbody>
    </Table>
    </Container>
  );
}

export default MyTable;