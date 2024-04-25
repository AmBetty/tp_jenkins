const request = require('supertest');
const app = require('../app');
let server;

const orders = []; 

beforeAll((done) => {
    server = app.listen(5001, () => {
        console.log('Test server running on port 5001');
        done();
    });
});

afterAll((done) => {
    server.close(() => {
        console.log('Test server closed');
        done();
    });
});
describe('API Tests', () => {
    it('GET /order - should return all order', async () => {
        const response = await request(server).get('/orders');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
    
});