import React, { useEffect, useState } from "react";
import { Table, Button } from "@syneto/compass-react";
import { useHistory } from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import EditEmployee from "./components/EditEmployee";
import DeleteEmployee from "./components/DeleteEmployee";
import axios from "axios";

const Centralizator = (props) => {
  const { showAddModal, toggleAddModal } = props;
  const history = useHistory();
  const [showEditModal, toggleEditModal] = useState(false);
  const [showDeleteModal, toggleDeleteModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState({});
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:5000/employees");
      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    }
  };
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
        <Button
          role="tertiary"
          onClick={() => {
            setSelectedEmployee(row);
            toggleDeleteModal(true);
          }}
        >
          Delete
        </Button>
      </>
    );
  };

  return (
    <>
      <Table data={employees} keyField="id" search>
        <Table.Col field="first_name" align="left">
          First Name
        </Table.Col>
        <Table.Col field="last_name" align="left">
          Last Name
        </Table.Col>
        <Table.Col field="total_vacantion_days" align="center">
          Total Zile CF Contract
        </Table.Col>
        <Table.Col field="leftovers_2019" align="left">
          Restanta 2019
        </Table.Col>
        <Table.Col field="christmas_days" align="left">
          Zile Craciun
        </Table.Col>
        <Table.Col field="vacantion_days_taken" align="left">
          Zile Luate
        </Table.Col>
        <Table.Col field="available_vacation_days" align="left">
          Zile Ramase
        </Table.Col>
        <Table.Col align="center" renderCell={renderActions}>
          Actions
        </Table.Col>
      </Table>

      <AddEmployee
        showAddModal={showAddModal}
        toggleAddModal={toggleAddModal}
        fetchEmployees={fetchEmployees}
      />
      <EditEmployee
        showEditModal={showEditModal}
        toggleEditModal={toggleEditModal}
        selectedEmployee={selectedEmployee}
        fetchEmployees={fetchEmployees}
      />
      <DeleteEmployee
        showDeleteModal={showDeleteModal}
        toggleDeleteModal={toggleDeleteModal}
        selectedEmployee={selectedEmployee}
        fetchEmployees={fetchEmployees}
      />
    </>
  );
};

export default Centralizator;
