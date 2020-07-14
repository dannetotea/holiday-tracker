import React, { useState } from "react";
import { Table, Button } from "@syneto/compass-react";
import { useHistory } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";

const Centralizator = (props) => {
  const { showAddModal, toggleAddModal } = props;
  const history = useHistory();
  const [showEditModal, toggleEditModal] = useState(false);
  const [showDeleteModal, toggleDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const employees = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      totalZileCo: "24",
      rest2019: "0",
      zileCraciun: "5",
      zileLuate: "3",
      zileRamase: "16",
    },
    {
      id: "2",
      firstName: "Anne",
      lastName: "Marie",
      totalZileCo: "22",
      rest2019: "7",
      zileCraciun: "5",
      zileLuate: "1",
      zileRamase: "23",
    },
    {
      id: "3",
      firstName: "Anne",
      lastName: "Marie",
      totalZileCo: "22",
      rest2019: "7",
      zileCraciun: "5",
      zileLuate: "1",
      zileRamase: "23",
    },
    {
      id: "4",
      firstName: "Anne",
      lastName: "Marie",
      totalZileCo: "22",
      rest2019: "7",
      zileCraciun: "5",
      zileLuate: "1",
      zileRamase: "23",
    },
  ];

  const renderActions = (cell, row) => {
    return (
      <>
        <Button
          role="tertiary"
          onClick={() => history.push(`/desfasurator/${row.id}`)}
        >
          Details
        </Button>
        <Button
          role="tertiary"
          onClick={() => {
            setSelectedEmployee(row);
            toggleEditModal(true);
          }}
        >
          Edit
        </Button>
        <Button role="tertiary" onClick={() => toggleDeleteModal(true)}>
          Delete
        </Button>
      </>
    );
  };

  return (
    <>
      <Table data={employees} keyField="id" search>
        <Table.Col field="firstName" align="left">
          First Name
        </Table.Col>
        <Table.Col field="lastName" align="left">
          Last Name
        </Table.Col>
        <Table.Col field="totalZileCo" align="center">
          Total Zile Cf Contract
        </Table.Col>
        <Table.Col field="rest2019" align="left">
          Restanta 2019
        </Table.Col>
        <Table.Col field="zileCraciun" align="left">
          Zile Craciun
        </Table.Col>
        <Table.Col field="zileLuate" align="left">
          Zile Luate
        </Table.Col>
        <Table.Col field="zileRamase" align="left">
          Zile Ramase
        </Table.Col>
        <Table.Col align="center" renderCell={renderActions}>
          Actions
        </Table.Col>
      </Table>

      <AddEmployee
        showAddModal={showAddModal}
        toggleAddModal={toggleAddModal}
      />
      <EditEmployee
        showEditModal={showEditModal}
        toggleEditModal={toggleEditModal}
        selectedEmployee={selectedEmployee}
      />
      <DeleteEmployee
        showDeleteModal={showDeleteModal}
        toggleDeleteModal={toggleDeleteModal}
      />
    </>
  );
};

export default Centralizator;
