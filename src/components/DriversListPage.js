import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DriverListTable from './DriverListTable';
import DriverListDescriptions from './DriverListDescriptions';
import selectDrivers from '../selectors/drivers';
import { sortByStatus } from '../actions/filters';
import { Button, Switch, Typography } from 'antd';
import { UserAddOutlined, CloseOutlined, CheckOutlined } from '@ant-design/icons';

const { Text } = Typography;

const header = (<div className="page-header-alignment">
  <div className="header-page-title">Motoristas</div>
  <Link className="list-item" to={`/create`}>
        <Button type="primary"
                shape="circle"
                icon={<UserAddOutlined twoToneColor="#face48" />}
                size="large"/>
    </Link>
</div>);



const DriverList = (props) => {

    const onInactivesShow = checked => {
        props.sortByStatus(checked);
    };
    return (
            <>
                <div className="list-header">
                    <div className="show-for-mobile">
                        {header}
                    </div>
                    <div className="show-for-desktop">
                        {header}
                    </div>
                </div>

                <div className="">
                        <div className="button--page-switch">
                            <Text style={{ paddingRight: 10 }}>Exibir inativos</Text>
                            {props.inactives ? (
                                    <Switch
                                        checked
                                        checkedChildren={<CheckOutlined />}
                                        unCheckedChildren={<CloseOutlined />}
                                        onChange={onInactivesShow}/>

                                        ) : (
                                            <Switch
                                            checkedChildren={<CheckOutlined />}
                                            unCheckedChildren={<CloseOutlined />}
                                            onChange={onInactivesShow}/>
                                        )}
                        </div>

                    <div className="list-body">
                        {
                            props.drivers.length === 0 ? (
                            <div className="list-item list-item--message">
                                <span>Nenhum dado encontrado.</span>
                            </div>
                            ) : (
                                <>
                                    <div className="content-container">
                                        <DriverListDescriptions {...props} />
                                    </div>
                                </>
                            )
                        }
                    </div>
                </div>
            </>
    )
}

const mapStateToProps = (state) => {
  const {drivers, filters}  = state
  return {
    drivers: selectDrivers(drivers[0], filters.inactives),
    inactives: state.inactives
  };
};

const mapDispatchToProps = (dispatch) => ({
    sortByStatus: (inactives) => dispatch(sortByStatus(inactives))
});

export default connect(mapStateToProps, mapDispatchToProps)(DriverList);
