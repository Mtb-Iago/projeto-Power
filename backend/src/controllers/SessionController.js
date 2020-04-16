const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { id } = request.body; //Busca o id do corpo do request

        const user = await connection('users')
            .where('id', id)
            .select('name')
            .first();

        if (!user) {
            return response.status(400).json({ error: 'no user found with this ID' });
        }
        return response.json(user);

    }
}