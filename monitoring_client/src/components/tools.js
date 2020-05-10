import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as toolActions from '../actions/tools';
import PropTypes from 'prop-types';

export class Tools extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tools: [
                {
                    "id": "1",
                    "tool_name": "Grafana",
                    "product_name": "Grafana Enterprise Grafana Cloud",
                    "tool_type": "visualization_tool",
                    "open_source": "Open Source + Paid",
                    "community_support": "strong",
                    "core_competency": "GO, C, Javascript",
                    "features": " [\"Multiple visualization options\"]",
                    "dashboard_capabilities": true,
                    "installation": "Agentless",
                    "environment_coverage": "Cloud + on-premise",
                    "license_type": "enterprise",
                    "pricing": "Need to contact Vendor",
                    "support": "Paid",
                    "cost": "Need to contact Vendor"
                },
                {
                    "id": "2",
                    "tool_name": "Grafana",
                    "product_name": "Grafana Enterprise Grafana Cloud",
                    "tool_type": "visualization_tool",
                    "open_source": "Open Source + Paid",
                    "community_support": "strong",
                    "core_competency": "GO, C, Javascript",
                    "features": " [\"Multiple visualization options\"]",
                    "dashboard_capabilities": true,
                    "installation": "Agentless",
                    "environment_coverage": "Cloud + on-premise",
                    "license_type": "enterprise",
                    "pricing": "Need to contact Vendor",
                    "support": "Paid",
                    "cost": "Need to contact Vendor"
                }
            ]
        }
    }

    componentDidMount() {
        console.log("Mounting Tools Component");
        console.log(this.props.getTool);
        const { getTool } = this.props;
        getTool && getTool();
    }

    static propTypes = {
        tools: PropTypes.array.isRequired,
        getTools: PropTypes.func.isRequired
    }

    render() {
        return (
            <>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Tool Name</th>
                            <th>Product Name</th>
                            <th>Tool Type</th>
                            <th>Open Source/ Paid</th>
                            <th>Community Support</th>
                            <th>Core Competency</th>
                            <th>Primary Features</th>
                            <th>Dashboard Capabilities</th>
                            <th>Installation/ Deployment</th>
                            <th>Environment Coverage</th>
                            <th>License Type</th>
                            <th>Pricing</th>
                            <th>Support</th>
                            <th>Cost for Dummy Infra</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tools.map(tool => (
                            <tr key={tool.id}>
                                <td>{tool.tool_name}</td>
                                <td>{tool.product_name}</td>
                                <td>{tool.tool_type}</td>
                                <td>{tool.open_source}</td>
                                <td>{tool.community_support}</td>
                                <td>{tool.core_competency}</td>
                                <td>{tool.features}</td>
                                <td>{tool.dashboard_capabilities ? "Yes" : "No"}</td>
                                <td>{tool.installation}</td>
                                <td>{tool.environment_coverage}</td>
                                <td>{tool.license_type}</td>
                                <td>{tool.pricing}</td>
                                <td>{tool.support}</td>
                                <td>{tool.cost}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators(Object.assign({}, toolActions), dispatch);
}

const mapStateToProps = state => ({
    tools: state
})


export default connect(mapStateToProps, mapDispatchToProps)(Tools);
