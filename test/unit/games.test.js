const chai = require('chai');
const { assert } = chai;
const Game = require('../../lib/models/game');
const { getErrors } = require('./helpers');

describe('Game model', () => {

    it('validates good model', () => {
        const data = {
            name: 'Breath of the Wild', 
            url: 'https://www.zelda.com/breath-of-the-wild/',
            developer: 'Nintendo',
            year: 2017
        };
        const game = new Game(data);

        const json = game.toJSON();
        delete json._id;
        assert.deepEqual(json, data);
        assert.isUndefined(game.validateSync());
    });

    it('validates required fields', () => {
        const game = new Game({});
        const errors = getErrors(game.validateSync(), 3);

        assert.equal(errors.name.kind, 'required');
        assert.equal(errors.developer.kind, 'required');
        assert.equal(errors.year.kind, 'required');
    });

});