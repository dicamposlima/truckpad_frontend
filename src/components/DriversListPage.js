import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DriverListTable from './DriverListTable';
import DriverListDescriptions from './DriverListDescriptions';
import selectDrivers from '../selectors/drivers';
import { Button } from 'antd';
import { UserAddOutlined } from '@ant-design/icons';

const handleSizeChange = e => {
    this.setState({ size: e.target.value });
  };


const header = (<div className="page-header-alignment">
  <div className="header-page-title">Motoristas</div>
  <Link className="list-item" to={`/create`}>
        <Button type="primary"
                shape="circle"
                icon={<UserAddOutlined twoToneColor="#face48" />}
                size="large"/>
    </Link>
</div>);

export const DriverList = (props) => (
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
            <div className="list-body">
                {
                    props.drivers.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>Nenhum dado encontrado.</span>
                    </div>
                    ) : (
                        <>
                            <div className="show-for-mobile">
                                <div className="content-container">
                                    <DriverListDescriptions {...props} />
                                </div>
                            </div>
                            <div className="show-for-desktop">
                                <DriverListTable {...props} />
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    </>
);

const mapStateToPropsS = (state) => {
  return {
    drivers: selectDrivers(state.drivers, state.filters)
  };
};

const mapStateToProps = (state) => {
    return {
      drivers: state.drivers
    };
  };

export default connect(mapStateToProps)(DriverList);
