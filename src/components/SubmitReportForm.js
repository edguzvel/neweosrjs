import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';

const SubmitReportForm = () => {
  const [modal, setModal] = useState(false);
  const [userID, setUserID] = useState('');
  const [reportDate, setReportDate] = useState('');
  const [reportContent, setReportContent] = useState('');

  const toggleModal = () => setModal(!modal);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reportData = { userID, reportDate, reportContent };

    try {
      const response = await fetch("http://localhost:5026/api/Values/SubmitReport", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(reportData),
      });

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      console.log("Form submitted successfully");
      toggleModal();
      // Optionally, reset form fields here
    } catch (error) {
      console.error("Failed to submit report", error);
    }
  };

  return (
    <>
      <Button color="link" onClick={toggleModal}>Submit Report</Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Report</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="reportId">ID</Label>
              <Input type="text" value={userID} onChange={e => setUserID(e.target.value)} id="reportId" placeholder="Enter your ID" />
            </FormGroup>
            <FormGroup>
              <Label for="reportDateTime">Date/Time</Label>
              <Input type="datetime-local" value={reportDate} onChange={e => setReportDate(e.target.value)} id="reportDateTime" />
            </FormGroup>
            <FormGroup>
              <Label for="reportContent">Report</Label>
              <Input type="textarea" value={reportContent} onChange={e => setReportContent(e.target.value)} id="reportContent" />
            </FormGroup>
            <Button type="submit" color="primary">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};

export default SubmitReportForm;