const Fundraiser = require('../Models/Fundraiser');

const createFundraiser = async (req, res) => {
    const { title, description, category, targetAmount, imageUrl } = req.body;

    try {
        const fundraiser = new Fundraiser({
            title,
            description,
            category,
            targetAmount,
            imageUrl,
        });

        await fundraiser.save();
        res.status(201).json(fundraiser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating fundraiser', error });
    }
};

const fetchFundraiser = async (req, res) => {
    //mongodb fetch all fundraiser
    try {
        // Fetch all fundraisers from the database
        const fundraisers = await Fundraiser.find();

        // Send the fundraisers in the response
        res.status(200).json(fundraisers);
    } catch (error) {
        // Handle any errors that occur during the fetch operation
        res.status(500).json({ message: 'Error fetching fundraisers', error });
    }

};

const deleteFundraiser = async (req, res) => {
    const { id } = req.params;

    try {
        // Find the fundraiser by ID and delete it
        const deletedFundraiser = await Fundraiser.findByIdAndDelete(id);

        if (!deletedFundraiser) {
            return res.status(404).json({ message: 'Fundraiser not found' });
        }

        res.status(200).json({ message: 'Fundraiser deleted successfully' });
    } catch (error) {
        // Handle any errors that occur during the delete operation
        res.status(500).json({ message: 'Error deleting fundraiser', error });
    }
};

module.exports = { createFundraiser, fetchFundraiser, deleteFundraiser };
