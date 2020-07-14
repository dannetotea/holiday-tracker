import React from "react";
import { Button, Form, Modal } from "@syneto/compass-react";
import { useForm } from "react-hook-form";

const AddEmployee = (props) => {
  const { showAddModal, toggleAddModal } = props;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    // axios.createEmployee(values).then(()=>{console.log("success")}).catch((error) => console.log(error))
    console.log(errors);
    toggleAddModal(false);
  };

  return (
    <>
      <Modal show={showAddModal} onHide={() => toggleAddModal(false)}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Header>
            <Modal.Title>Add Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                ref={register({ required: true })}
              />
              {errors.firstName && "First name is required"}
            </Form.Group>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                ref={register({ required: true })}
              />
              {errors.lastName && "Last name is required"}
            </Form.Group>
            <Form.Group controlId="totalZileCo">
              <Form.Label>Total Zile Cf Concediu</Form.Label>
              <Form.Control
                type="text"
                name="totalZileCo"
                ref={register({ required: true })}
              />
              {errors.totalZileCo && "Total zile cf concediu is required"}
            </Form.Group>
            <Form.Group controlId="rest2019">
              <Form.Label>Restanta 2019</Form.Label>
              <Form.Control
                type="text"
                name="rest2019"
                ref={register({ required: true })}
              />
              {errors.rest2019 && "Restanta 2019 is required"}
            </Form.Group>
            <Form.Group controlId="zileCraciun">
              <Form.Label>Zile Craciun</Form.Label>
              <Form.Control
                type="text"
                name="zileCraciun"
                ref={register({ required: true })}
              />
              {errors.zileCraciun && "Zile Craciun is required"}
            </Form.Group>
            <Form.Group controlId="zileLuate">
              <Form.Label>Zile Luate</Form.Label>
              <Form.Control
                type="text"
                name="zileLuate"
                ref={register({ required: true })}
              />
              {errors.zileLuate && "Zile luate is required"}
            </Form.Group>
            <Form.Group controlId="zileRamase">
              <Form.Label>Zile Ramase</Form.Label>
              <Form.Control
                type="text"
                name="zileRamase"
                ref={register({ required: true })}
              />
              {errors.zileRamase && "Zile ramase is required"}
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button role="secondary" onClick={() => toggleAddModal(false)}>
              Cancel
            </Button>
            <Button type="submit">Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
export default AddEmployee;
