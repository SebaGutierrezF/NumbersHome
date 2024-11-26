// phone.js
import { validatePhoneNumber } from '../services/validation.js';

export async function validatePhone(req, res) {
    try {
        const { phoneNumber } = req.body;

        if (!phoneNumber) {
            return res.status(400).json({
                error: 'Phone number is required'
            });
        }

        const result = await validatePhoneNumber(phoneNumber);
        res.json(result);
    } catch (error) {
        console.error('Error in validatePhone controller:', error);
        res.status(500).json({
            error: 'Error validating phone number',
            details: error.message
        });
    }
}
