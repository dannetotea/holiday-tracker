import React from "react";
import { Modal } from "@syneto/compass-react";

const DeleteEmployee = (props) => {
  const { showDeleteModal, toggleDeleteModal } = props;
  const onSubmit = () => {
    toggleDeleteModal(false);
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
