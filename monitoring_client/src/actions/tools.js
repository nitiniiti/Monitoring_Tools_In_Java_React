import axios from 'axios';
import { GET_TOOLS } from './types';


// export const getTools = () => (dispatch, getState) => {
//     console.log("Got here, calling tools");

//     axios.get('/api/v1/tools').then((res) => {
//         console.log(res);
//         dispatch({
//             type: GET_TOOLS,
//             payload: res.data
//         })
//     }).catch((err) => {
//         console.log(err);
//     })
// };


export function getTool() {
    console.log("Got here, calling tools");
    const tools = [
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

    return {
        type: GET_TOOLS,
        payload: tools
    }
}