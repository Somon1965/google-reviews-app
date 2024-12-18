const axios = require('axios');

module.exports = async (req, res) => {
    const API_KEY = 'AIzaSyB5bNeXwCJaBfTbiM4wVdZiso3Escxn4-4'; // Google APIキーをここに入力
    const PLACE_ID = 'ChIJb8LG9Z_fVDURCYmh_TeN2To'; // 対象のGoogleプレイスIDをここに入力

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/details/json', {
            params: {
                place_id: PLACE_ID,
                fields: 'reviews',
                key: API_KEY
            }
        });
        const reviews = response.data.result.reviews;
        res.status(200).json(reviews);
    } catch (error) {
        console.error('Error fetching reviews:', error);
        res.status(500).json({ error: 'Failed to fetch reviews' });
    }
};
