import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Table } from "antd";
import { Typography } from "antd";

import {  columns }  from "../../const/index"
import "../../styles/table.scss";

const { Text } = Typography;

const MyTable = () => {
  const { positionState: data, isError } = useSelector((state) => state.maps);
  const dispatch = useDispatch();

  const dataSource = data.map((way) => ({
    key: way.id,
    idWay: way.id,
    name: way.name,
  }));

  const onRowSelect = (selectedRows) => {
    const rowData = data.find((row) => row.id === selectedRows[0]);
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
      {isError && <Text type="danger">{isError.message}</Text>}
    </div>
  );
};

export default MyTable
