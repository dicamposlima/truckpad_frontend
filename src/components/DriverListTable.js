import React from 'react';
import { Table } from 'antd';

const { Column } = Table;

const ExpenseListItem = ({ drivers }) => (
    <Table dataSource={drivers[0]}>
        <Column title="Nome" dataIndex="name" key="name" />
        <Column title="Telefone" dataIndex="phone" key="phone" />
        <Column title="Dt. Nasc." dataIndex="date_of_birth" key="date_of_birth" />
        <Column title="CNH" dataIndex="cnh" key="cnh" />
        <Column title="Categoria" dataIndex="cnh_type" key="cnh_type" />
        <Column title="CPF" dataIndex="cpf" key="cpf" />
        <Column title="Status" dataIndex="status" key="status" />       
    </Table>
);

export default ExpenseListItem;
