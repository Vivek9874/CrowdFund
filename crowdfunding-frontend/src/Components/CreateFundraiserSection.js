import React from 'react';
import { Form, Button } from 'react-bootstrap';

const CreateFundraiserSection = () => {
    return (
        <div className="create-fundraiser-section p-3">
            <h5>Create Your Own Fundraiser</h5>
            <Form>
                <Form.Group controlId="fundraiserTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" placeholder="Enter title" />
                </Form.Group>
                <Form.Group controlId="fundraiserDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Enter description" />
                </Form.Group>
                <Form.Group controlId="fundraiserCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select">
                        <option>Health</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Community</option>
                </Form.Control>
                </Form.Group>
                <Button variant="primary" className="mt-3">Create Fundraiser</Button>
            </Form>
        </div>
);
};

export default CreateFundraiserSection;
