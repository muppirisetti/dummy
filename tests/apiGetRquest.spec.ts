import { test, expect } from '@playwright/test';

test('API GET REQUEST', async ({ request }) => {
  const response = await request.get('https://api.restful-api.dev/objects/7');
   expect(response.status()).toBe(200);
   const text = await response.text();
   expect(text).toContain('Apple MacBook Pro 16');
   const resultjson = await response.json();
    console.log(resultjson);
    expect(resultjson).toHaveProperty("id", "7");
    expect(response.statusText()).toBe("OK");
})


