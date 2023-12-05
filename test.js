const request = require('supertest');
const { expect } = require('expect');

const app = require('./index');

describe('Testing POSTS/answers endpoint', () => {
  it('respond with valid HTTP status code and description and message', async () => {
    const response = await request(app)
      .post('/postMPDAM')
      .send({ data: 'test' });

    expect(response.status).toBe(403);
    expect(response.body.data).toBe('Auth Needed');
  });

  // Add an afterAll hook to shut down the server
  afterAll(() => {
    // Assuming your server has a method to gracefully shut down
    // Replace the following line with the actual method to shut down your server
    app.close();
  });
});
