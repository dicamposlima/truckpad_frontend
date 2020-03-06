import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { initEditStatus } from '../actions/drivers';
import { Descriptions, Switch } from 'antd';
import { EditOutlined, CheckOutlined, CloseOutlined } from '@ant-design/icons';

const { Item } = Descriptions;

const DriverListItem = (props) => {
    const {drivers} = props
    const onStatusChange = (driver) => {
        driver.active = driver.active ? 0 : 1
        props.initEditStatus(driver.id, driver.active);
    };

    return drivers.map((driver) => {
        return (
            <div key={driver.id} className="list-item">
                <div className="descriptions-page-title">{driver.name}</div>
                <div className="page-header-alignment end">
                    <Link className="list-item"
                          to={`/edit/${driver.id}`}
                          style={{ marginRight: 16 }}>
                        <EditOutlined className="edit-outlined-icon" />
                    </Link>
                    {driver.active ? (
                            <Switch
                                checked
                                checkedChildren={<CheckOutlined />}
                                unCheckedChildren={<CloseOutlined />}
                                onChange={() => onStatusChange(driver)}/>

                                ) : (
                                    <Switch
                                    checkedChildren={<CheckOutlined />}
                                    unCheckedChildren={<CloseOutlined />}
                                    onChange={() => onStatusChange(driver)}/>
                                )}
                </div>
                <Descriptions bordered>
                    <Item label="Telefone">{driver.phone}</Item>
                    <Item label="Dt. Nasc">{driver.date_of_birth}</Item>
                    <Item label="CNH">{driver.cnh}</Item>
                    <Item label="Categoria">{driver.cnh_type}</Item>
                    <Item label="CPF">{driver.cpf}</Item>
                    <Item label="Status">{driver.active}</Item>
                </Descriptions>
            </div>
        )
    })
}

const mapDispatchToProps = (dispatch) => ({
    initEditStatus: (id, active) => dispatch(initEditStatus(id, active))
});

export default connect(null, mapDispatchToProps)(DriverListItem);
