import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';

const SubmitReportForm = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => setModal(!modal);

  return (
    <>
      <Button color="link" onClick={toggleModal}>Submit Report</Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Submit Report</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="reportName">Name</Label>
              <Input type="text" name="name" id="reportName" placeholder="Enter your name" />
            </FormGroup>
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
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};