const crypto = require('crypto'); //importando a biblioteca
const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const users = await connection('users').select('*'); //guarda tdos os registros do bd na variavel users
        return response.json(users);

    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body; //cada variavel recebe os parametros

      const id = crypto.randomBytes(4).toString('HEX'); //o id vai receber criptografado e convertindo para uma string de bits.

        await connection('users').insert({ //não consegui compilar com await
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })


        return response.json({ id }); //retorna o id da ong cadastrada e gerada random
    },
    async delete(request, response) {
        const id  = request.params.id; //router paraments
        const user_id = request.headers.authorization; //busca o id de autorização no postman
        console.log(user_id)
        const users = await connection('users') //busca no bd
            .where('id', user_id)
            .select('id')
            .first(); //retorna apenas 1 

       
            await connection('users').where('id',user_id).delete(); //deleta os dados
            return response.status(204).json({ success: 'operation sucess.'}); //retorna uma resposta sem conteudo para o front. //send envia sem mostrar
    
        }

         
};