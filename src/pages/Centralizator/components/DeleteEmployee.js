import React from "react";
import { Modal } from "@syneto/compass-react";
import axios from "axios";

const DeleteEmployee = (props) => {
  const {
    showDeleteModal,
    toggleDeleteModal,
    selectedEmployee,
    fetchEmployees,
  } = props;

  const onSubmit = () => {
    deleteEmployee();
    toggleDeleteModal(false);
  };

  const deleteEmployee = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/employees/${selectedEmployee.id}`
      );
      fetchEmployees();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Modal
        show={showDeleteModal}
        onHide={() => toggleDeleteModal(false)}
        content="Are you sure you want to delete this employee?"
        title="Delete Employee"
        actions={{
          primary: {
            label: "Delete",
            onClick: onSubmit,
          },
          secondary: {
            label: "Cancel",
          },
        }}
      />
    </>
  );
};

export default DeleteEmployee;
