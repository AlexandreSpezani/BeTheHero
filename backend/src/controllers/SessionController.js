const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { login } = request.body;

        const ong = await connection('ongs')
            .where('id', login)
            .select('name')
            .first();

        if (!ong) {
            response.status(400).json({ error: 'No ONG found with this ID' });
        }

        return response.json(ong);
    }
}