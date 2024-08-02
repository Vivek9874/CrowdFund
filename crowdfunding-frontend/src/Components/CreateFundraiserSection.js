import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import CustomButton from "./CustomButton";
axios.defaults.baseURL = 'http://localhost:5000';
const CreateFundraiserSection = ({ onAddFundraiser }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('Health');
    const [targetAmount, setTargetAmount] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!title || !description || !targetAmount || !image) {
            alert('Please fill out all fields and upload an image.');
            return;
        }
    
        try {
            const formData = new FormData();
            formData.append('image', image);
            
            // Log formData to check its content
            console.log('FormData:', formData);
    
            // Upload the image
            const imageResponse = await axios.post('/api/users/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            // Log the response to inspect its structure
            console.log('Image Response:', imageResponse);
    
            // Ensure imageResponse.data and imageResponse.data.imageUrl exist
            if (!imageResponse.data || !imageResponse.data.imageUrl) {
                throw new Error('Image upload failed or imageUrl is missing');
            }
    
            const imageUrl = imageResponse.data.imageUrl;
    
            const newFundraiser = {
                title,
                description,
                category,
                targetAmount,
                imageUrl,
            };
    
            // Create the fundraiser
            const response = await axios.post('/api/users/fundraisers', newFundraiser);
            onAddFundraiser(response.data);
    
            setTitle('');
            setDescription('');
            setCategory('Health');
            setTargetAmount('');
            setImage(null);
        } catch (error) {
            console.error('Error creating fundraiser:', error);
            alert('An error occurred while creating the fundraiser.');
        }
    };
    
    
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(file);
        }
    };

    return (
        <div className="create-fundraiser-section p-3">
            <h5>Create Your Own Fundraiser</h5>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="fundraiserTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="fundraiserDescription">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="fundraiserCategory">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        as="select"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option>Health</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Community</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="targetAmount">
                    <Form.Label>Target Amount (in Rupees)</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter target amount in INR"
                        value={targetAmount}
                        onChange={(e) => setTargetAmount(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="imageUpload">
                    <Form.Label>Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                    />
                </Form.Group>
                <div className="mt-3">
                    <CustomButton className="custom-button custom-button-small" type="submit">Create Fundraiser</CustomButton>
                </div>
            </Form>
        </div>
    );
};

export default CreateFundraiserSection;
