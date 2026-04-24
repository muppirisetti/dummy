import { test, expect } from '@playwright/test';

test('API post REQUEST', async ({ request }) => {
  const response = await request. delete('https://api.restful-api.dev/objects/ff8081819d82fab6019dbfa2c12b46ce', {

    headers: {

      'Content-Type': 'application/json'
   },
   
  })
  
    expect(response.status()).toBe(200);
    

    const resultjson = await response.json();
    console.log(resultjson);
  })


