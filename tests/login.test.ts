import request from "supertest";
import { beforeAll, describe, expect, it } from "vitest";
import app from "../src/app";

describe("Request Login user", () => {

    it('Should have response status 200', async () => {
        const response = await request(app).get('/auth/login')
        expect(response.status).toBe(200);
    });

    it('Should have response body of json', async () => {
        const response = await request(app).get('/auth/login')
        expect(response.headers['content-type']).toEqual(expect.stringContaining('json'));
    });

});


