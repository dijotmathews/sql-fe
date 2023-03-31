import React, { useState, useEffect } from 'react';
import ResTable from './table';
import axios from 'axios';
import { Form, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';


function MyTable() {
  const [data, setData] = useState([{"batch":1,"id":1,"migration":"2021_09_12_094402_add_landlord_tenants_table"}]);
  const [text, setText] = useState('');
 
//   useEffect(() => {
//     axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
//       .then(response => setData(response.data))
//       .catch(error => console.log(error));
   
//   }, []);

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('http://localhost:9090/v1/api/run', { "query": text })
      .then(response => {
		// console.log(response.data)
		const data = JSON.parse(response.data.message);
		// columns = Object.keys(data[0]);
		setData(data)
		// console.log(columns)

	  })
      .catch(error => console.log(error));
  }

  return (
    <Container className="p-3">
	<div>
		<Form onSubmit={handleSubmit}>
			<Form.Group controlId="formTextArea">
			<Form.Label>Enter Query:</Form.Label>
			<Form.Control as="textarea" rows={3} value={text} onChange={event => setText(event.target.value)} />
			</Form.Group>
     		<Button variant="primary" type="submit">Submit</Button>
    	</Form>

	</div>
    
    <ResTable data={data}/>
   
    </Container>
  );
}

export default MyTable;