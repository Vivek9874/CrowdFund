import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const FundraiserDetailsModal = ({ show, onHide, fundraiser }) => {
    if (!fundraiser) return null;

    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>{fundraiser.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={fundraiser.image} alt={fundraiser.title} className="img-fluid mb-3" />
                <p>{fundraiser.description}</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FundraiserDetailsModal;
