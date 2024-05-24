const axios = require('axios');
exports.getCandidatedetails = async (req, res) => {
    try {
        const response = await axios.get('http://localhost:5001/api/public/candidate', {
            //here we are sending the api key in header so that the public request can be authenticated.
            headers: { 'x-api-key': process.env.PUBLIC_API_KEY }
        },
        {
            params:{user_id:req.user}
        }
    );
        res.json(response.data);
    } catch (error) {
        res.status(500).send('Server error');
    }
};