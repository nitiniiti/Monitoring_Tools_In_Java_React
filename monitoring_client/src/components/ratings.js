import React, { Component } from 'react'

export class Ratings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tools: [
                {
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

export default Ratings
