import React from 'react';
import { Form, Button } from 'react-bootstrap';

const FilterSection = ({ onFilterChange }) => {
    const handleFilterChange = (event) => {
        const { name, value } = event.target;
        onFilterChange(name, value);
    };

    return (
        <div className="filter-section p-3">
            <h5>Filter Fundraisers</h5>
            <Form>
                <Form.Group controlId="categoryFilter">
                    <Form.Label>Category</Form.Label>
                    <Form.Control as="select" name="category" onChange={handleFilterChange}>
                        <option>All</option>
                        <option>Health</option>
                        <option>Education</option>
                        <option>Environment</option>
                        <option>Community</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" className="mt-3">Apply Filters</Button>
            </Form>
        </div>
    );
};

export default FilterSection;
