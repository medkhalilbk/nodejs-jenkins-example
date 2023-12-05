const request = require('supertest');
const { expect } = require('expect');
const { app, server } = require('./index');

describe('Testing POSTS/answers endpoint', () => {
  it('respond with valid HTTP status code and description and message', async () => {
    const response = await request(app)
      .post('/postMPDAM')
      .send({ data: 'test'  });

    expect(response.status).toBe(403);
    expect(response.body.data).toBe('Auth Needed');
  });

  // Use the after hook to shut down the server
  after(() => {
    // Close the server to shut it down gracefully
    server.close();
  });
});
