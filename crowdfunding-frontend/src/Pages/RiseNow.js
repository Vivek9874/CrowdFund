import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav, Button } from 'react-bootstrap';
import FilterSection from '../Components/FilterSection';
import FundraiserSection from '../Components/FundraiserSection';
import CreateFundraiserSection from '../Components/CreateFundraiserSection';
import FundraiserDetailsModal from '../Components/FundraiserDetailsModal';
import NavbarComponent from '../Components/NavbarComponent';
import FooterComponent from '../Components/FooterComponent';
import '../Stylings/RiseNow.css';

const RiseNow = () => {
    const navigate = useNavigate();

    const [filters, setFilters] = useState({ category: 'All' });
    const [fundraisers, setFundraisers] = useState([
        { id: 1, title: 'Health Fundraiser 1', description: 'Support health initiatives', image: 'https://via.placeholder.com/300x200', category: 'Health' },
        { id: 2, title: 'Education Fundraiser 1', description: 'Support education initiatives', image: 'https://via.placeholder.com/300x200', category: 'Education' },
        { id: 3, title: 'Environment Fundraiser 1', description: 'Support environment initiatives', image: 'https://via.placeholder.com/300x200', category: 'Environment' },
    ]);
    const [selectedFundraiser, setSelectedFundraiser] = useState(null);
    const [showModal, setShowModal] = useState(false);

    const handleFilterChange = (name, value) => {
        setFilters({ ...filters, [name]: value });
    };

    const handleShowDetails = (fundraiser) => {
        setSelectedFundraiser(fundraiser);
        setShowModal(true);
    };

    const handleHideModal = () => {
        setShowModal(false);
    };

    const filteredFundraisers = fundraisers.filter(fundraiser => filters.category === 'All' || fundraiser.category === filters.category);

    return (
        <div id="root">
            <NavbarComponent/>

            <Container fluid className="main-content">
                <Row>
                    <Col md={3}>
                        <FilterSection onFilterChange={handleFilterChange} />
                    </Col>
                    <Col md={6}>
                        <FundraiserSection fundraisers={filteredFundraisers} onShowDetails={handleShowDetails} />
                    </Col>
                    <Col md={3}>
                        <CreateFundraiserSection />
                    </Col>
                </Row>
            </Container>

            <FundraiserDetailsModal show={showModal} onHide={handleHideModal} fundraiser={selectedFundraiser} />

            <FooterComponent/>
        </div>
    );
};

export default RiseNow;
