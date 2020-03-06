import React from 'react';
import { connect } from 'react-redux';
import DriverForm from './DriverForm';
import { initEditDriver } from '../actions/drivers';

const header = (<div className="page-header-alignment">
  <div className="header-page-title">Editar Motorista</div>
</div>);

export class EditDriverPage extends React.Component {
  onSubmit = (driver) => {
    this.props.initEditDriver(this.props.driver.id, driver);
    this.props.history.push('/');
  };
    render() {
        return (
        <div>
            <div className="list-header">
                <div className="show-for-mobile">
                    {header}
                </div>
                <div className="show-for-desktop">
                    {header}
                </div>
            </div>
            <div className="content-container">
            <DriverForm
                driver={this.props.driver}
                onSubmit={this.onSubmit}
            />
            </div>
        </div>
        );
    }
};

const mapStateToProps = (state, props) => {
    const {drivers}  = state
    return {
        driver: drivers[0].find((driver) => parseInt(driver.id) === parseInt(props.match.params.id))
    };
  };

const mapDispatchToProps = (dispatch, props) => ({
    initEditDriver: (id, driver) => dispatch(initEditDriver(id, driver)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditDriverPage);
