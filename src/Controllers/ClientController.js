const ClientModel = require('../Models/ClientModel');

class ClientController {
    //criar clientes
    async store(req, res) {
        const { email, name } = req.body;

        const clientAlreadyExists = await ClientModel.findOne({ email });

        if (clientAlreadyExists) {
            return res.status(400).json({ message: 'Client already exists!'});
        }

        if (!email || !name) {
            return res.status(400).json({ message: 'Email and name is required'});
        }

        const createdClient = await ClientModel.create(req.body);

        return res.status(200).json(createdClient);
    }

    //listar todos clientes
    async index(req, res) {
        const clients = await ClientModel.find();

        return res.status(200).json(clients);
    }

    //listar um produto específico
    async show(req, res) {
        try {
        const { id } = req.params;

        const client = await ClientModel.findById(id);

        if (!client) {
            return res.status(404).json({ message: 'Client does not exists'});
        }

        return res.status(200).json(client);

        } catch (error) {
          return res.status(400).json({ message: 'Failed to list client'});
        }
    }

    //atualizar
    async update(req, res) {
        try {
        const { id } = req.params;

        await ClientModel.findByIdAndUpdate(id, req.body);

        return res.status(200).json({ message: 'Client updated'});
        } catch (error) {
          return res.status(400).json({ message: 'Failed to update client'});
        }
    }

    //deletar
    async delete(req, res) {
       try {
        const { id } = req.params;

        const clientDeleted = await ClientModel.findByIdAndDelete(id);

        if (!clientDeleted) {
            return res.status(404).json({ message: 'Client does not existis'});
        }

        return res.status(200).json({ message: 'Client deleted'});
       } catch (error) {
       return res.status(400).json({ message: 'Failed to deleted client'});
    }

}

}

module.exports = new ClientController();