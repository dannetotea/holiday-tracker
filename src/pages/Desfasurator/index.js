import React, { useState } from "react";
import { List, Card, Chart, Tabs } from "@syneto/compass-react";

const Desfasurator = () => {
  const holidays = [
    { id: "1", interval: "13 Mai - 15 Mai", days: "3 zile" },
    { id: "2", interval: "12 Iunie - 17 Iunie", days: "6 zile" },
  ];
  const employee = {
    id: "1",
    firstName: "John",
    lastName: "Doe",
    totalZileCo: 24,
    rest2019: 0,
    zileCraciun: 5,
    zileLuate: 3,
    zileRamase: 21,
  };
  const [activeKey, setActiveKey] = useState("summary");
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
                  value: employee.totalZileCo,
                },
                { label: "Restanta 2019", value: employee.rest2019 },
                { label: "Zile Craciun", value: employee.zileCraciun },
                { label: "Zile Luate", value: employee.zileLuate },
                { label: "Zile Ramase", value: employee.zileRamase },
              ]}
            />
          </div>
          <div style={{ width: 100, height: 100 }}>
            <Chart
              type="donut"
              data={[
                {
                  color: "#1bba80",
                  value: employee.zileRamase,
                },
                {
                  color: "#E1E8F1",
                  value: employee.totalZileCo,
                },
                {
                  color: "#e76974",
                  value: employee.zileLuate,
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
