import React, { useState, useEffect } from 'react';
import { Modal, Button, ProgressBar, Form } from 'react-bootstrap';

const FundraiserDetailsModal = ({ show, onHide, fundraiser, onContribute }) => {
    const [contributionAmount, setContributionAmount] = useState('');
    const [localRaisedAmount, setLocalRaisedAmount] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        if (fundraiser) {
            updateProgress();
        }
    }, [fundraiser, localRaisedAmount]);

    if (!fundraiser) return null;

    const raisedAmount = parseFloat(fundraiser.raisedAmount) || 0;
    const targetAmount = parseFloat(fundraiser.targetAmount) || 0;

    const updateProgress = () => {
        const totalRaised = raisedAmount + localRaisedAmount;
        const newProgress = targetAmount > 0 ? (totalRaised / targetAmount) * 100 : 0;
        setProgress(newProgress);
    };

    const handlePay = () => {
        const amount = parseFloat(contributionAmount);
        if (amount && !isNaN(amount) && amount > 0) {
            console.log(`Paying ₹${amount} for fundraiser ${fundraiser.title}`);
            
            setLocalRaisedAmount(prevAmount => prevAmount + amount);
            
            if (onContribute) {
                onContribute(fundraiser.id, amount);
            }

            alert('Thank you for supporting!');
            setContributionAmount('');
        } else {
            alert('Please enter a valid amount.');
        }
    };

    return (
        <Modal show={show} onHide={onHide} centered>
            <Modal.Header closeButton>
                <Modal.Title>{fundraiser.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src={fundraiser.imageUrl} alt={fundraiser.title} className="img-fluid mb-3" />
                <p><strong>Description:</strong> {fundraiser.description}</p>
                <p><strong>Category:</strong> {fundraiser.category}</p>
                <p><strong>Target Amount:</strong> ₹{targetAmount.toFixed(2)}</p>
                <p><strong>Amount Raised:</strong> ₹{(raisedAmount + localRaisedAmount).toFixed(2)}</p>
               
                {/* <ProgressBar now={progress} label={`${Math.round(progress)}%`} className="mb-3"/> */}
                <ProgressBar 
                    now={progress} 
                    label={`${Math.round(progress)}%`} 
                    className="mb-3"
                    style={{ backgroundColor: '#e9ecef' }} // This sets the background color of the unfilled part
                >
                    <ProgressBar 
                        now={progress} 
                        label={`${Math.round(progress)}%`} 
                        style={{ backgroundColor: '#463F3A' }} // This sets the color of the progress part
                    />
                </ProgressBar>
                <Form.Group controlId="formContributionAmount">
                    <Form.Label>Amount to Contribute</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter amount"
                        value={contributionAmount}
                        onChange={(e) => setContributionAmount(e.target.value)}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handlePay} className="mt-3" style={{backgroundColor: '#463F3A', border: 'none'}}>
                    Pay
                </Button>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default FundraiserDetailsModal;