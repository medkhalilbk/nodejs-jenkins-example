const request = require('supertest');
const {expect} = require('expect');

const app = require('./index');

describe('Testing POSTS/answers endpoint', () => {
  it('respond with valid HTTP status code and description and message', async () => { // add `async` keyword here
    const response = await request(app)
      .post('/postMPDAM')
      .send({ data:"test" });

    expect(response.status).toBe(403);
    expect(response.body.data).toBe("Auth Needed" ); 
  });
});