/**
 * PersonController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    getAllPerson: function (req, res) {
        Person.find().exec(function (err, persons) {
            res.send({ 'persons': persons });
            return;
        });
    },
    addPerson: function (req, res) {
        if (req.method == 'POST' && req.param('Person', null) != null) {
            Person.create(req.param('Person')).done(function (err, model) {
                // Error handling
                if (err) {
                    res.send('Error:Sorry!Something went Wrong');
                } else {
                    res.send('Successfully Created!');
                    //res.redirect( ‘person/view/’+model.id);
                }
            });
        }
        else {
            res.send('Error:Sorry!Data Wrong');
        }
    }

};

