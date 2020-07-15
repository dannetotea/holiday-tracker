import React from "react";
import { Form, Modal, Button } from "@syneto/compass-react";
import { useForm } from "react-hook-form";
import axios from "axios";

const EditEmployee = (props) => {
  // Destructured OBJ :  const showModel = props.showModel;
  const {
    showEditModal,
    toggleEditModal,
    selectedEmployee,
    fetchEmployees,
  } = props;
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (values) => {
    updateData(values);
    toggleEditModal(false);
  };
  const updateData = async (values) => {
    try {
      await axios.put(
        `http://localhost:5000/employees/${selectedEmployee.id}`,
        values
      );
      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={showEditModal} onHide={() => toggleEditModal(false)}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Body>
          <Form.Group controlId="first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="first_name"
              defaultValue={selectedEmployee.first_name}
              ref={register({ required: true })}
            />
            {errors.first_name && "First name is required"}
          </Form.Group>
          <Form.Group controlId="last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="last_name"
              defaultValue={selectedEmployee.last_name}
              ref={register({ required: true })}
            />
            {errors.last_name && "Last name is required"}
          </Form.Group>
          <Form.Group controlId="total_vacantion_days">
            <Form.Label>Total Zile Cf Concediu</Form.Label>
            <Form.Control
              type="text"
              name="total_vacantion_days"
              defaultValue={selectedEmployee.total_vacantion_days}
              ref={register({ required: true })}
            />
            {errors.total_vacantion_days &&
              "Total zile cf concediu is required"}
          </Form.Group>
          <Form.Group controlId="leftovers_2019">
            <Form.Label>Restanta 2019</Form.Label>
            <Form.Control
              type="text"
              name="leftovers_2019"
              defaultValue={selectedEmployee.leftovers_2019}
              ref={register({ required: true })}
            />
            {errors.leftovers_2019 && "Restanta 2019 is required"}
          </Form.Group>
          <Form.Group controlId="christmas_days">
            <Form.Label>Zile Craciun</Form.Label>
            <Form.Control
              type="text"
              name="christmas_days"
              defaultValue={selectedEmployee.christmas_days}
              ref={register({ required: true })}
            />
            {errors.christmas_days && "Zile Craciun is required"}
          </Form.Group>
          <Form.Group controlId="vacantion_days_taken">
            <Form.Label>Zile Luate</Form.Label>
            <Form.Control
              type="text"
              name="vacantion_days_taken"
              defaultValue={selectedEmployee.vacantion_days_taken}
              ref={register({ required: true })}
            />
            {errors.vacantion_days_taken && "Zile luate is required"}
          </Form.Group>
          <Form.Group controlId="available_vacation_days">
            <Form.Label>Zile Ramase</Form.Label>
            <Form.Control
              type="text"
              name="available_vacation_days"
              defaultValue={selectedEmployee.available_vacation_days}
              ref={register({ required: true })}
            />
            {errors.available_vacation_days && "Zile ramase is required"}
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button role="secondary" onClick={() => toggleEditModal(false)}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
};
export default EditEmployee;
