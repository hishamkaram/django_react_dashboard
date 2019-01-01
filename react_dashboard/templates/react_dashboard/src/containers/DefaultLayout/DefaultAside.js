import React, { Component } from 'react';
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { AppSwitch } from '@coreui/react'

const propTypes = {
  children: PropTypes.node,
};

const defaultProps = {};

class DefaultAside extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1',
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  render() {

    // eslint-disable-next-line
    const { children, ...attributes } = this.props;

    return (
      <React.Fragment>
        <Nav tabs>
          <NavItem>
            <NavLink className={classNames({ active: this.state.activeTab === '1' })}
                     onClick={() => {
                       this.toggle('1');
                     }}>
              <i className="icon-plus"></i>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ListGroup className="list-group-accent" tag={'div'}>
              <ListGroupItem className="list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small">Select a widget to add</ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-primary list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="static/img/widgets/map-widget.png" alt="admin@bootstrapmaster.com"></img>
                </div>
                <strong>Map</strong>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-light list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="static/img/widgets/aggregate-widget.png" alt="admin@bootstrapmaster.com"></img>
                </div>
                <strong>Aggregate Widget</strong>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-danger list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="static/img/widgets/bar-widget.png" alt="admin@bootstrapmaster.com"></img>
                </div>
                <strong>Bar Chart</strong>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-dark list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="static/img/widgets/pie-widget.png" alt="admin@bootstrapmaster.com"></img>
                </div>
                <strong>Pie Chart</strong>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-info list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="static/img/widgets/line-widget.png" alt="admin@bootstrapmaster.com"></img>
                </div>
                <strong>Line Chart</strong>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-warning list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="static/img/widgets/legend-widget.png" alt="admin@bootstrapmaster.com"></img>
                </div>
                <strong>Legend</strong>
              </ListGroupItem>
              <ListGroupItem action tag="a" href="#" className="list-group-item-accent-secondary list-group-item-divider">
                <div className="avatar float-right">
                  <img className="img-avatar" src="static/img/widgets/identify-widget.png" alt="admin@bootstrapmaster.com"></img>
                </div>
                <strong>Identify</strong>
              </ListGroupItem>
            </ListGroup>
          </TabPane>
        </TabContent>
      </React.Fragment>
    );
  }
}

DefaultAside.propTypes = propTypes;
DefaultAside.defaultProps = defaultProps;

export default DefaultAside;
