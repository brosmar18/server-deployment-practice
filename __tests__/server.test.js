const { app } = require('../server.js');
const supertest = require('supertest');
const mockRequest = supertest(app);

describe('API Server', () => {
    it('handles the root path', async () => {
        const response = await mockRequest.get('/');

        expect(response.status).toBe(200);
        expect(response.text).toBeTruthy();
        expect(response.text).toEqual('This is a log!');
    });
});