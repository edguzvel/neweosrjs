import React, { useState } from 'react';
// Importing necessary components from reactstrap for UI design
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const SubmitReportForm = () => {
  // State to control the visibility of the modal
  const [modal, setModal] = useState(false);

  // Function to toggle the modal's visibility
  const toggleModal = () => setModal(!modal);

  // API URL for submitting the report
  const API_URL = "http://localhost:5026";

  // Function to handle form submission
  const handleSubmit = async (event) => {
	event.preventDefault(); // Prevent default form submission behavior
  
	// Collect form data
	const formData = new FormData(event.target);
	const reportData = {
	  userID: formData.get('id'), // Extracting user ID from form
	  reportDate: formData.get('datetime'), // Extracting report date from form
	  reportContent: formData.get('report'), // Extracting report content from form
	};
  
	try {
	  // Send data to the server using POST request
	  const response = await fetch(`${API_URL}/api/Values/SubmitReport`, {
		method: 'POST',
		headers: {
		  'Content-Type': 'application/json',
		},
		body: JSON.stringify(reportData), // Convert report data to JSON string
	  });
  
	  if (!response.ok) {
		// If response is not ok, throw an error
		throw new Error(`HTTP error! status: ${response.status}`);
	  }
  
	  // Log success message and close the modal
	  console.log("Form submitted successfully");
	  toggleModal();
	} catch (error) {
	  // Log error if submission fails
	  console.error("Failed to submit report", error);
	}
  };

  // Render the form inside a modal
  return (
	<>
	  <Button color="link" onClick={toggleModal}>Submit Report</Button>
	  <Modal isOpen={modal} toggle={toggleModal}>
		<ModalHeader toggle={toggleModal}>Submit Report</ModalHeader>
		<ModalBody>
		  <Form onSubmit={handleSubmit}>
			<FormGroup>
			  <Label for="reportId">ID</Label>
			  <Input type="text" name="id" id="reportId" placeholder="Enter your ID" />
			</FormGroup>
			<FormGroup>
			  <Label for="reportDateTime">Date/Time</Label>
			  <Input type="datetime-local" name="datetime" id="reportDateTime" />
			</FormGroup>
			<FormGroup>
			  <Label for="reportContent">Report</Label>
			  <Input type="textarea" name="report" id="reportContent" />
			</FormGroup>
			<Button type="submit" color="primary">Submit</Button>{' '}
			<Button color="secondary" onClick={toggleModal}>Cancel</Button>
		  </Form>
		</ModalBody>
		<ModalFooter>
		</ModalFooter>
	  </Modal>
	</>
  );
};

export default SubmitReportForm;