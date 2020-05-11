import React, { Component } from 'react';
import axios from 'axios';

export class EditTool extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tool: {
                tool_name: "",
                product_name: "",
                tool_type: "",
                open_source: "",
                community_support: "",
                core_competency: "",
                features: "",
                dashboard_capabilities: "",
                installation: "",
                environment_coverage: "",
                license_type: "",
                pricing: "",
                support: "",
                cost: ""
            },
            toolId: ""
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.toolId);
        const toolId = this.props.match.params.toolId;
        this.setState({ toolId: toolId });

        axios.get('http://localhost:8000/api/v1/tools/' + toolId).then((res) => {
            console.log(res.data);
            this.setState({ tool: res.data });
        }).catch((err) => {
            console.log("Error Occured");
            console.log(err);
        })
    }

    handleChange = (event) => {
        let { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({ tool: { ...this.state.tool, [name]: value } });
    }

    updateTool = (event) => {
        let toolId = this.state.toolId;
        if (toolId) {
            axios.put('http://localhost:8000/api/v1/tools/' + toolId, this.state.tool).then((res) => {
                console.log(res);
                alert("Tool Updated");
            }).catch((err) => {
                console.log("Error Occured");
                console.log(err);
            })
        } else {
            axios.post('http://localhost:8000/api/v1/tools/', this.state.tool).then((res) => {
                console.log(res);
                alert("Tool Saved");
                let rating = {
                    tool_id: res.data.id,
                    easy_configuration_wizard: null,
                    gui_configuration: null,
                    advance_reporting: null,
                    enhanced_visualizations: null,
                    custom_user_dashboards: null,
                    custom_actions: null,
                    notification_escalation: null,
                    scheduled_reports: null,
                    capacity_planning_reports: null,
                    bulk_modification_tool: null,
                    audit_logging: null,
                    sla_reports: null,
                    predictive_analysis: null,
                    code_level_insights_transaction_tracing: null,
                    end_user_experience_monitoring: null,
                    aplication_framework_monitoring: null,
                    real_user_monitoring: null,
                    collect_correlate_custom_metrics: null,
                    integration_with_third_party_tools: null,
                    application_monitoring: null,
                    integration_plugins: null,
                    automation_performance_issue_remediation: null
                }
                axios.post('http://localhost:8000/api/v1/ratings/', rating).then((res) => {
                    console.log(res);
                    alert("Rating Saved");
                }).catch((err) => {
                    console.log("Error Occured");
                    console.log(err);
                })
            }).catch((err) => {
                console.log("Error Occured");
                console.log(err);
            })
        }
    }

    render() {
        return (
            <>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label>Tool Name</label>
                            <input type="text" onChange={this.handleChange} name="tool_name" value={this.state.tool.tool_name} className="form-control" placeholder="Enter Tool Name" />
                        </div>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="product_name" value={this.state.tool.product_name} placeholder="Enter Product Name" />
                        </div>
                        <div className="form-group">
                            <label>Tool Type</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="tool_type" value={this.state.tool.tool_type} placeholder="Enter Tool Type" />
                        </div>
                        <div className="form-group">
                            <label>Open Source/ Paid</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="open_source" value={this.state.tool.open_source} placeholder="Enter Open Source/ Paid" />
                        </div>
                        <div className="form-group">
                            <label>Community Support</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="community_support" value={this.state.tool.community_support} placeholder="Enter Community Support" />
                        </div>
                        <div className="form-group">
                            <label>Core Competency</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="core_competency" value={this.state.tool.core_competency} placeholder="Enter Core Competency" />
                        </div>
                        <div className="form-group">
                            <label>Primary Features</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="features" value={this.state.tool.features} placeholder="Enter Primary Features" />
                        </div>
                        <div className="form-group">
                            <label>Dashboard Capabilities</label>
                            <select id="inputState" className="form-control" placeholder="Enter Dashboard Capabilities" name="features" value={this.state.tool.dashboard_capabilities} onChange={this.handleChange} >
                                <option selected>Yes</option>
                                <option>No</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Installation/ Deployment</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="installation" value={this.state.tool.installation} placeholder="Enter Installation/ Deployment" />
                        </div>
                        <div className="form-group">
                            <label>Environment Coverage</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="environment_coverage" value={this.state.tool.environment_coverage} placeholder="Enter Environment Coverage" />
                        </div>
                        <div className="form-group">
                            <label>License Type</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="license_type" value={this.state.tool.license_type} placeholder="Enter License Type" />
                        </div>
                        <div className="form-group">
                            <label>Pricing</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="pricing" value={this.state.tool.pricing} placeholder="Enter Pricing" />
                        </div>
                        <div className="form-group">
                            <label>Support</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="support" value={this.state.tool.support} placeholder="Enter Support" />
                        </div>
                        <div className="form-group">
                            <label>Cost for Dummy Infra</label>
                            <input type="text" className="form-control" onChange={this.handleChange} name="cost" value={this.state.tool.cost} placeholder="Enter Cost for Dummy Infra" />
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.updateTool}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default EditTool
