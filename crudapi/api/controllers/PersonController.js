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
        Person.findOne({id: req.param('id')}).exec((error, person) => {
            res.send(person);
            return;
        });
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

    editPerson: function (req, res) {
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
    }
};

