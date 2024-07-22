import React from 'react';
import { Card, Button } from 'react-bootstrap';

const FundraiserCard = ({ fundraiser, onShowDetails }) => {
    return (
        <Card className="mb-3 shadow-sm">
            <Card.Img variant="top" src={fundraiser.image} />
            <Card.Body>
                <Card.Title>{fundraiser.title}</Card.Title>
                <Card.Text>{fundraiser.description}</Card.Text>
                <Button variant="primary" onClick={() => onShowDetails(fundraiser)}>View Details</Button>
            </Card.Body>
        </Card>
    );
};

export default FundraiserCard;
