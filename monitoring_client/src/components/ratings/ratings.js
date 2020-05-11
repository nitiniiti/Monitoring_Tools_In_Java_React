import React, { Component } from 'react';
import axios from 'axios';
import async from 'async';
import { Link } from 'react-router-dom';

export class Ratings extends Component {

    constructor(props) {
        super(props)
        this.state = {
            ratings: [{
                tool_id: null,
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
            }],
            toolId: ""
        }
    }

    componentDidMount() {

        console.log(this.props.match.params.toolId);
        const toolId = this.props.match.params.toolId;
        this.setState({ toolId: toolId })

        if (toolId) {
            axios.get('http://localhost:8000/api/v1/ratings/' + this.props.match.params.toolId).then((ratingResponse) => {
                // const ratingData = ratingResponse.data;
                this.setState({ ratings: [ratingResponse.data] });

                axios.get('http://localhost:8000/api/v1/tools/' + ratingResponse.data.tool_id).then((toolResponse) => {
                    console.log(toolResponse.data);
                    ratingResponse.data.tool_name = toolResponse.data.tool_name;
                    this.setState({ ratings: [ratingResponse.data] });
                }).catch((err) => {
                    console.log("Error Occured");
                    console.log(err);
                })

            }).catch((err) => {
                console.log("Error Occured");
                console.log(err);
            })
        } else {
            axios.get('http://localhost:8000/api/v1/ratings').then((ratingResponse) => {
                // const ratingData = ratingResponse.data;
                this.setState({ ratings: ratingResponse.data });

                async.each(ratingResponse.data, (rating, callback) => {
                    axios.get('http://localhost:8000/api/v1/tools/' + rating.tool_id).then((toolResponse) => {
                        console.log(toolResponse.data);
                        rating.tool_name = toolResponse.data.tool_name;
                        callback(null);
                    }).catch((err) => {
                        console.log("Error Occured in fetching Tool Name");
                        console.log(err);
                        callback(null);
                    })
                }, (err) => {
                    this.setState({ ratings: ratingResponse.data });
                })
            }).catch((err) => {
                console.log("Error Occured");
                console.log(err);
            })
        }
    }


    deleteRating = (ratingId) => {
        console.log(ratingId);
        console.log("Delete clicked");
        axios.delete('http://localhost:8000/api/v1/ratings/' + ratingId).then((res) => {
            console.log(res);
            this.setState({ ratings: this.state.ratings.filter((rating) => { return rating.id !== ratingId }) });
        }).catch((err) => {
            console.log("Error Occured while deleting");
            console.log(err);
        })
    }

    render() {
        return (
            <>

                {/* <Link to={"/ratings/edit/" + this.state.toolId}><button type="button" className="btn btn-primary btn-lg btn-block hidden}">Add Rating</button></Link> */}
                <div className="tableWidth">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Tool Name</th>
                                <th>Easy Configuration Wizard</th>
                                <th>GUI Configuration</th>
                                <th>Advanced Reporting</th>
                                <th>Enhanced Visualizations</th>
                                <th>Custom User Dashboards</th>
                                <th>Custom Actions</th>
                                <th>Notification Escalations</th>
                                <th>Scheduled Reports</th>
                                <th>Capacity Planning Reports</th>
                                <th>Bulk-Modification Tools</th>
                                <th>Audit Logging</th>
                                <th>SLA Reports</th>
                                <th>Predictive Analysis</th>
                                <th>Code level insights and transaction tracing</th>
                                <th>End user experience monitoring and synthetic transaction monitoring</th>
                                <th>Application framework metrics like performance counters, JMX MBeans, etc.</th>
                                <th>Real user monitoring (RUM)</th>
                                <th>Integration with third-party tools</th>
                                <th>Database/Server/Application monitoring</th>
                                <th>Collect and correlate custom metrics</th>
                                <th>Integrations and plugins</th>
                                <th>Automated performance issue remediation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.ratings.map(rating => (
                                <tr key={rating.id}>
                                    <td>{rating.tool_name}</td>
                                    <td>{rating.easy_configuration_wizard}</td>
                                    <td>{rating.gui_configuration}</td>
                                    <td>{rating.advance_reporting}</td>
                                    <td>{rating.enhanced_visualizations}</td>
                                    <td>{rating.custom_user_dashboards}</td>
                                    <td>{rating.custom_actions}</td>
                                    <td>{rating.notification_escalation}</td>
                                    <td>{rating.scheduled_reports}</td>
                                    <td>{rating.capacity_planning_reports}</td>
                                    <td>{rating.bulk_modification_tool}</td>
                                    <td>{rating.audit_logging}</td>
                                    <td>{rating.sla_reports}</td>
                                    <td>{rating.predictive_analysis}</td>
                                    <td>{rating.code_level_insights_transaction_tracing}</td>
                                    <td>{rating.end_user_experience_monitoring}</td>
                                    <td>{rating.aplication_framework_monitoring}</td>
                                    <td>{rating.real_user_monitoring}</td>
                                    <td>{rating.collect_correlate_custom_metrics}</td>
                                    <td>{rating.integration_with_third_party_tools}</td>
                                    <td>{rating.application_monitoring}</td>
                                    <td>{rating.integration_plugins}</td>
                                    <td>{rating.automation_performance_issue_remediation}</td>
                                    <td><Link to={"/ratings/edit/" + this.state.toolId}><button type="button" className="btn btn-primary">Edit</button></Link></td>
                                    <td><button type="button" className="btn btn-danger" onClick={() => this.deleteRating(rating.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}

export default Ratings
