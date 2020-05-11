import React, { Component } from 'react';
import axios from 'axios';

export class EditRating extends Component {

    constructor(props) {
        super(props)
        this.state = {
            rating: {
                tool_id: this.props.match.params.toolId,
                easy_configuration_wizard: 1,
                gui_configuration: 1,
                advance_reporting: 1,
                enhanced_visualizations: 1,
                custom_user_dashboards: 1,
                custom_actions: 1,
                notification_escalation: 1,
                scheduled_reports: 1,
                capacity_planning_reports: 1,
                bulk_modification_tool: 1,
                audit_logging: 1,
                sla_reports: 1,
                predictive_analysis: 1,
                code_level_insights_transaction_tracing: 1,
                end_user_experience_monitoring: 1,
                aplication_framework_monitoring: 1,
                real_user_monitoring: 1,
                collect_correlate_custom_metrics: 1,
                integration_with_third_party_tools: 1,
                application_monitoring: 1,
                integration_plugins: 1,
                automation_performance_issue_remediation: 1
            },
            toolId: this.props.match.params.toolId,
            ratingId: ""
        }
    }

    componentDidMount() {
        console.log(this.props.match.params.toolId);
        const toolId = this.props.match.params.toolId;
        this.setState({ toolId: toolId });

        axios.get('http://localhost:8000/api/v1/ratings/' + toolId).then((res) => {
            console.log(res.data);
            this.setState({ rating: res.data });
            this.setState({ ratingId: res.data.id });
        }).catch((err) => {
            console.log("Error Occured");
            console.log(err);
        })

    }

    handleChange = (event) => {
        let { name, value } = event.target;
        console.log(name);
        console.log(value);
        this.setState({ rating: { ...this.state.rating, [name]: value } });
    }

    updateRating = (event) => {
        // let toolId = this.state.toolId;
        event.preventDefault();
        axios.put('http://localhost:8000/api/v1/ratings/' + this.state.ratingId, this.state.rating).then((res) => {
            console.log(res);
            // alert("Rating Added");
            this.props.history.push('/ratings/' + this.state.toolId);
        }).catch((err) => {
            console.log("Error Occured");
            console.log(err);
        })

    }

    render() {
        return (
            <>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label>Easy Configuration Wizards</label>
                            <select id="inputState" className="form-control" name="easy_configuration_wizard" value={this.state.rating.easy_configuration_wizard} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>GUI Configuration</label>
                            <select id="inputState" className="form-control" name="gui_configuration" value={this.state.rating.gui_configuration} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Advanced Reporting</label>
                            <select id="inputState" className="form-control" name="advance_reporting" value={this.state.rating.advance_reporting} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Enhanced Visualizations</label>
                            <select id="inputState" className="form-control" name="enhanced_visualizations" value={this.state.rating.enhanced_visualizations} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Custom User Dashboards</label>
                            <select id="inputState" className="form-control" name="custom_user_dashboards" value={this.state.rating.custom_user_dashboards} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Custom Actions</label>
                            <select id="inputState" className="form-control" name="custom_actions" value={this.state.rating.custom_actions} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Notification Escalations</label>
                            <select id="inputState" className="form-control" name="notification_escalation" value={this.state.rating.notification_escalation} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Scheduled Reports</label>
                            <select id="inputState" className="form-control" name="scheduled_reports" value={this.state.rating.scheduled_reports} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Capacity Planning Reports</label>
                            <select id="inputState" className="form-control" name="capacity_planning_reports" value={this.state.rating.capacity_planning_reports} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Bulk-Modification Tools</label>
                            <select id="inputState" className="form-control" name="bulk_modification_tool" value={this.state.rating.bulk_modification_tool} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>  </div>
                        <div className="form-group">
                            <label>Audit Logging</label>
                            <select id="inputState" className="form-control" name="audit_logging" value={this.state.rating.audit_logging} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>SLA Reports</label>
                            <select id="inputState" className="form-control" name="sla_reports" value={this.state.rating.sla_reports} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>Predictive Analysis</label>
                            <select id="inputState" className="form-control" name="predictive_analysis" value={this.state.rating.predictive_analysis} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>Code level insights and transaction tracing</label>
                            <select id="inputState" className="form-control" name="code_level_insights_transaction_tracing" value={this.state.rating.code_level_insights_transaction_tracing} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>End user experience monitoring and synthetic transaction monitoring</label>
                            <select id="inputState" className="form-control" name="end_user_experience_monitoring" value={this.state.rating.end_user_experience_monitoring} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>Application framework metrics like performance counters, JMX MBeans, etc.</label>
                            <select id="inputState" className="form-control" name="aplication_framework_monitoring" value={this.state.rating.aplication_framework_monitoring} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>Real user monitoring (RUM)</label>
                            <select id="inputState" className="form-control" name="real_user_monitoring" value={this.state.rating.real_user_monitoring} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>Integration with third-party tools</label>
                            <select id="inputState" className="form-control" name="integration_with_third_party_tools" value={this.state.rating.integration_with_third_party_tools} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>Database/Server/Application monitoring</label>
                            <select id="inputState" className="form-control" name="application_monitoring" value={this.state.rating.application_monitoring} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select> </div>
                        <div className="form-group">
                            <label>Collect and correlate custom metrics</label>
                            <select id="inputState" className="form-control" name="collect_correlate_custom_metrics" value={this.state.rating.collect_correlate_custom_metrics} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Integrations and plugins</label>
                            <select id="inputState" className="form-control" name="integration_plugins" value={this.state.rating.integration_plugins} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Automated performance issue remediation</label>
                            <select id="inputState" className="form-control" name="automation_performance_issue_remediation" value={this.state.rating.automation_performance_issue_remediation} onChange={this.handleChange} >
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={this.updateRating}>Submit</button>
                    </form>
                </div>
            </>
        )
    }
}

export default EditRating
