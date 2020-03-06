import React from 'react';
import { connect } from 'react-redux';
import DriverForm from './DriverForm';
import { initAddDriver, initListDrivers } from '../actions/drivers';

const header = (<div className="page-header-alignment">
  <div className="header-page-title">Adicionar Motorista</div>
</div>);

export class AddDriverPage extends React.Component {
  onSubmit = (driver) => {
    this.props.initAddDriver(driver)
    this.props.history.push('/')
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
            onSubmit={this.onSubmit}
          />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
    initAddDriver: (driver) => dispatch(initAddDriver(driver)),
    initListDrivers: (driver) => dispatch(initListDrivers())
  });

  export default connect(undefined, mapDispatchToProps)(AddDriverPage);
