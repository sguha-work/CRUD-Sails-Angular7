/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAllPerson: (req, res) => {
        Person.find().exec((err, persons) => {
            res.send({ 'persons': persons });
            return;
        });
    },

    getPersonById: (req, res) => {
        if (req.method == 'GET' && req.param('id', null) != null) {
            Person.findOne({id: req.param('id')}).exec((error, person) => {
                res.send(person);
                return;
            });
        } else {
            res.send({
                success: false,
                status: 500,
                message: 'Error in request'
            });
            return;
        }
    },

    addPerson: function (req, res) {
        if (req.method == 'POST' && req.param('person', null) != null) {
            Person.create(req.param('person'), (error, person) => {
                if (error) {
                    res.send(error);
                } else {
                    res.send({
                        success: true,
                        status: 200,
                        message: 'Successfully created 1 row in database'
                    });
                }
            });
        }
        else {
            res.send({
                success: false,
                status: 500,
                message: 'Wrong data'
            });
        }
    },

    updatePerson: function (req, res) {
        if (req.method == 'POST' && req.param('person', null) != null) {
            Person.update({id:req.param('person')['id']},req.param('person'), (error) => {
                if(error) {
                    res.send(error);
                } else {
                    res.send({
                        success: true,
                        status: 200,
                        message: 'Successfully updated 1 row in database'
                    });
                }
            });

        }
        else {
            res.send({
                success: false,
                status: 500,
                message: 'Wrong data'
            });
        }
    },

    deletePerson: function(req, res) {
        if (req.method == 'GET' && req.param('id', null) != null) {
            Person.destroy({id: req.param('id')}).exec((error) => {
                res.send({
                    success: true,
                    status: 200,
                    message: 'Successfully deleted 1 row in database'
                });
                return;
            });
        } else {
            res.send({
                success: false,
                status: 500,
                message: 'Unable to delete'
            });
            return;
        }
    }
};

