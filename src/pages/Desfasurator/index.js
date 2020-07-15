import React, { useEffect, useState } from "react";
import { List, Card, Chart, Tabs } from "@syneto/compass-react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Desfasurator = () => {
  let { id } = useParams();
  const holidays = [
    { id: "1", interval: "13 Mai - 15 Mai", days: "3 zile" },
    { id: "2", interval: "12 Iunie - 17 Iunie", days: "6 zile" },
  ];

  const [activeKey, setActiveKey] = useState("summary");
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    fetchEmployee();
  }, []);
  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/employees/${id}`);
      setEmployee(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Tabs activeKey={activeKey} onSelect={(tab) => setActiveKey(tab)}>
        <Tabs.Tab eventKey="summary" title="Summary">
          <div className="d-flex flex-wrap">
            {holidays.map((holiday, index) => {
              return (
                <Card
                  key={index}
                  className="w-25 mx-3"
                  title={`Vacation ${index + 1}`}
                  content={
                    <div>
                      <div>{holiday.interval}</div>
                      <div className="font-weight-bold">{holiday.days}</div>
                    </div>
                  }
                />
              );
            })}
          </div>
        </Tabs.Tab>
        <Tabs.Tab
          eventKey="listholydays"
          title="List Holidays"
          className="d-flex"
        >
          <div className="w-25 mr-5">
            <List
              items={[
                {
                  label: "Total Zile Cf Contract",
                  value: employee.total_vacantion_days,
                },
                { label: "Restanta 2019", value: employee.leftovers_2019 },
                { label: "Zile Craciun", value: employee.christmas_days },
                { label: "Zile Luate", value: employee.vacantion_days_taken },
                {
                  label: "Zile Ramase",
                  value: employee.available_vacation_days,
                },
              ]}
            />
          </div>
          <div style={{ width: 100, height: 100 }}>
            <Chart
              type="donut"
              data={[
                {
                  color: "#1bba80",
                  value: employee.leftovers_2019,
                },
                {
                  color: "#E1E8F1",
                  value: employee.total_vacantion_days,
                },
                {
                  color: "#e76974",
                  value: employee.vacantion_days_taken,
                },
              ]}
              multipleLabels={true}
            />
          </div>
        </Tabs.Tab>
      </Tabs>
    </>
  );
};

export default Desfasurator;
