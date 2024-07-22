import React from 'react';
import { Row, Col } from 'react-bootstrap';
import FundraiserCard from './FundraiserCard';

const FundraiserSection = ({ fundraisers, onShowDetails }) => {
    return (
        <div className="fundraiser-section p-3">
            <h5>Active Fundraisers</h5>
            <Row>
                {fundraisers.map((fundraiser) => (
                    <Col md={4} key={fundraiser.id}>
                        <FundraiserCard fundraiser={fundraiser} onShowDetails={onShowDetails} />
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FundraiserSection;
