import {describe, expect, test} from '@jest/globals';
let request = require('supertest');
const app = require("../../src/app.ts");

describe("GET tests", () => {
  test("GET '/' returns status code 302", async () => {
    let response = await request(app).get("/");
    expect(response.statusCode).toBe(302);
  });

  test("GET '/home' returns status code 200", async () => {
    let response = await request(app).get("/home");
    expect(response.statusCode).toBe(200);
  });

  test('GET "/settings" returns status code 200', async () => {
    let response = await request(app).get("/settings");
    expect(response.statusCode).toBe(200);
  }); 
}); 

describe("POST tests", () => {
  test('POST "/settings" returns status code 302', async () => {
    let response = await request(app).post('/settings');

    expect(response.statusCode).toBe(302);
  });

  // test('POST "/settings" returns response body', async () => {
  //   let body = {
  //     time: "8:00",
  //     theme: "Light",
  //     language: "en",
  //   }

  //   let response = await request(app)
  //     .post('/settings')
  //     .set('Content-type', 'application/json')
  //     .send(body);

  //   // expect(response.body.time).toBe("8:00");
  //   // expect(response.statusCode).toBe(302);
  //   expect(response).toHaveProperty('body');
  //   expect(response.body).not.toBe(undefined);
  //   expect(response.body).toHaveProperty('time');
  // });

});
