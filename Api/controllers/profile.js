import { query } from '../db_Modules/db.js'; // Import the xenon database connection

// Get a profile by user ID
export const getProfile = async (req, res) => {
    const user_id = req.params.id;

    try {
        const result = await query('SELECT * FROM profile WHERE user_id = ?', [user_id]);

        if (result.length === 0) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        res.status(200).json(result[0]);
    } catch (err) {
        console.error('Error fetching profile:', err);
        res.status(500).json({ error: err.message });
    }
};

// Update a profile by user ID
export const updateProfile = async (req, res) => {
    const user_id = req.params.id;
    const { name, gender, address, dateOfBirth, phoneNumber, profilePictureURL, bio, websiteURL } = req.body;

    try {
        const result = await query(
            'UPDATE profile SET name = ?, gender = ?, address = ?, dateOfBirth = ?, phoneNumber = ?, profilePictureURL = ?, bio = ?, websiteURL = ? WHERE user_id = ?',
            [name, gender, address, dateOfBirth, phoneNumber, profilePictureURL, bio, websiteURL, user_id]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Profile not found' });
        }

        res.status(200).json({ message: 'Profile updated successfully' });
    } catch (err) {
        console.error('Error updating profile:', err);
        res.status(500).json({ error: err.message });
    }
};
