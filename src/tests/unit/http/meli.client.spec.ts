import axiosMockAdapter from 'axios-mock-adapter';
import { itemDetailResponse, searchResponse } from 'tests/support/stubResponse';
import MeliClient from '../../../http/meli.client';

let axiosMock: axiosMockAdapter;
let client: MeliClient;

beforeEach(() => {
  client = new MeliClient({ baseUrl: 'meli.host', timeout: 2000 });
  axiosMock = new axiosMockAdapter(client.getInstance());
  jest.resetAllMocks();
  axiosMock.reset();
});

describe('Http MeliClient', () => {

  test('Success searchItems', async () => {
    const searchParam = 'iphone 20';
    axiosMock.onGet(`items?search=${searchParam}`).reply(200, searchResponse);

    const response = await client.searchItems(searchParam);

    expect(response).toEqual(searchResponse);
  });

  test('Failed searchItems', async () => {
    const searchParam = 'iphone 20';
    axiosMock.onGet(`items?search=${searchParam}`).reply(500, null);
    try{
      const response = await client.searchItems(searchParam);
    } catch(error){
      expect(error.response.status).toEqual(500);
    }
  });

  test('Success getItemDetail', async () => {
    const itemId = 'id1';
    axiosMock.onGet(`items/${itemId}`).reply(200, itemDetailResponse);

    const response = await client.getItemDetail(itemId);

    expect(response).toEqual(itemDetailResponse);
  });
  test('Failed getItemDetail', async () => {
    const itemId = 'id1';
    axiosMock.onGet(`items/${itemId}`).reply(500, null);
    try{
      const response = await client.getItemDetail(itemId);
    } catch(error){
      expect(error.response.status).toEqual(500);
    }
  });
});
