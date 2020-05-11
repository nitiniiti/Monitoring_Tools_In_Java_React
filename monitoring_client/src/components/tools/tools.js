import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as toolActions from '../../actions/tools';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from 'react-router-dom';

export class Tools extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tools: []
        }
    }

    componentDidMount() {
        console.log("Mounting Tools Component");
        // console.log(this.props.getTool);
        // const { getTool } = this.props;
        // getTool && getTool();


        // Start Temporary Code

        axios.get('http://localhost:8000/api/v1/tools').then((res) => {
            console.log(res.data);
            this.setState({ tools: res.data });
        }).catch((err) => {
            console.log("Error Occured");
            console.log(err);
        })

        // End Temporary Code 
    }

    deleteTool = (toolId) => {
        console.log(toolId);
        console.log("Delete clicked");
        axios.delete('http://localhost:8000/api/v1/tools/' + toolId).then((res) => {
            console.log(res);
            this.setState({ tools: this.state.tools.filter((tool) => { return tool.id !== toolId }) });
        }).catch((err) => {
            console.log("Error Occured while deleting");
            console.log(err);
        })
    }
    // static propTypes = {
    //     tools: PropTypes.array.isRequired,
    //     getTools: PropTypes.func.isRequired
    // }

    render() {
        return (
            <>
                <Link to="/tool"><button type="button" className="btn btn-primary btn-lg btn-block">Add Tool</button></Link>
                <div className="tableWidth">
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
                                <th></th>
                                <th></th>
                                <th />
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.tools.map(tool => (
                                <tr key={tool.id}>
                                    <td><Link to={"/ratings/" + tool.id}>{tool.tool_name}</Link></td>
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
                                    <td><Link to={"/tool/" + tool.id}><button type="button" className="btn btn-primary">Edit</button></Link></td>
                                    <td><button type="button" className="btn btn-danger" onClick={() => this.deleteTool(tool.id)}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return bindActionCreators(toolActions.getTool, dispatch);
}

const mapStateToProps = state => ({
    tools: state
})


export default connect(mapStateToProps, mapDispatchToProps)(Tools);
