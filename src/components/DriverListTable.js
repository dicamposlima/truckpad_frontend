import React from 'react';
import { Table, Switch } from 'antd';
import { EditOutlined } from '@ant-design/icons';

const { Column } = Table;

const DriverListItem = ({ drivers }) => (
    <Table dataSource={drivers}>
        <Column title="Nome" dataIndex="name" key="name" />
        <Column title="Telefone" dataIndex="phone" key="phone" />
        <Column title="Dt. Nasc." dataIndex="date_of_birth" key="date_of_birth" />
        <Column title="CNH" dataIndex="cnh" key="cnh" />
        <Column title="Categoria" dataIndex="cnh_type" key="cnh_type" />
        <Column title="CPF" dataIndex="cpf" key="cpf" />
        <Column title="Status" dataIndex="active" key="active" />
        <Column title="Acoes"
                key="action"
                render={(text, record) => (
                    <span>
                    <a style={{ marginRight: 16 }}>
                        <EditOutlined className="edit-outlined-icon" />
                    </a>
                    <a style={{ marginRight: 16 }}>
                        <Switch size="small" defaultChecked />
                    </a>
                    </span>
                )}
        />
    </Table>
);

export default DriverListItem;
