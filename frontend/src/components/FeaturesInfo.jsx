import React from "react";

export default function FeatureInfo(props){
    return(<>
        <div className="features-detail">
                    <table>
                        <tr>
                            <td>Made In</td>
                            <td>{props.madeIn}</td>
                        </tr>
                        <tr>
                            <td>Display Type</td>
                            <td>{props.displayType}</td>
                        </tr>
                        <tr>
                            <td>Power Source</td>
                            <td>{props.powerSource}</td>
                        </tr>
                        <tr>
                            <td>Water Resistance</td>
                            <td>{props.waterResistance}</td>
                        </tr>
                        <tr>
                            <td>Material</td>
                            <td>{props.material}</td>
                        </tr>
                    </table>
                </div>
    </>)
}