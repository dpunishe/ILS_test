import { Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../styles/table.scss";
import { Typography } from "antd";

const { Text } = Typography;

const columns = [
  {
    title: "Маршрут",
    dataIndex: "name",
    key: "id",
  },
];

const MyTable = () => {
  const { positionState: data, isError } = useSelector((state) => state.maps);
  const dispatch = useDispatch();

  const dataSource = data.map((way) => ({
    key: way.id,
    idWay: way.id,
    name: way.name,
  }));

  const onRowSelect = (selectedRows) => {
    const rowData = data.find((c) => c.id === selectedRows[0]);
    dispatch({ type: "saga/setSelectedWay", payload: rowData });
  };

  return (
    <div className="table">
      <Table
        rowSelection={{
          type: "radio",
          onChange: onRowSelect,
        }}
        columns={columns}
        dataSource={dataSource}
        pagination={false}
      />
      <br />
      {isError && <Text type="danger">{isError.message}</Text>}
    </div>
  );
};

export default MyTable;
