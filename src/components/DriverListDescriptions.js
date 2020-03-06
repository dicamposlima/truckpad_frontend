import React from 'react';
import { Descriptions } from 'antd';

const { Item } = Descriptions;

const ExpenseListItem = ({ drivers }) => (
    drivers[0].map((driver) => {
        return (
            <div key={driver.id} className="list-item">
                <div className="descriptions-page-title">{driver.name}</div>
                <Descriptions bordered>
                    <Item label="Telefone">{driver.phone}</Item>
                    <Item label="Dt. Nasc">{driver.date_of_birth}</Item>
                    <Item label="CNH">{driver.cnh}</Item>
                    <Item label="Categoria">{driver.cnh_type}</Item>
                    <Item label="CPF">{driver.cpf}</Item>
                    <Item label="Status">{driver.status}</Item>
                </Descriptions>
            </div>
        )
    })

);

export default ExpenseListItem;
