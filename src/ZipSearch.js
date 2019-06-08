
import React from 'react';


class ZipSearch extends React.Component {
    render() {
        return (
            <div className="results">
                <p className="city">{this.props.City}, {this.props.State}</p>
                <div className="info">

                    <p>State: {this.props.State}</p>
                    <p>Location: {this.props.Location}</p>
                    <p>Population: {this.props.EstimatedPopulation}</p>
                    <p>Total Wages: {this.props.TotalWages}</p>

                </div>

            </div>
        );
    }
}

export default ZipSearch;