import React from 'react';
import { Table } from 'antd';

const TableComponent = ({ data }) => {
  const columns = [
    {
      title: 'Fullname',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Age Range',
      dataIndex: 'ageRange',
      key: 'ageRange',
    },
    {
      title: 'Feedback',
      dataIndex: 'feedback',
      key: 'feedback',
    },
  ];

  return (
    <Table 
      dataSource={data} 
      columns={columns} 
      rowKey={(record) => record.fullName}
      pagination={false} 
    />
  );
};

export default TableComponent;
