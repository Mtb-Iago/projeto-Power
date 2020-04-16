const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const user_id = request.headers.authorization;

        const users_id = await connection('users')
            .where('id', user_id)
            .select('*') //
            

        return response.json(user_id);
    }
}