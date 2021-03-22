import HttpClient from '../../../http/http.client';
import axiosMockAdapter from 'axios-mock-adapter';

class MockHttpClass extends HttpClient {
  public mockGet = this.get;
  public mockPost = this.post;
  public mockPatch = this.patch;
  public mockPut = this.put;
  public mockDelete = this.delete;
}

const OK_STATUS = 200;
const ERROR_STATUS = 400;
const MOCK_REQUEST = 'MOCK_REQUEST';
const MOCK_PARAMS = {
  mockParam: 'mockParam',
};
const MOCK_RESPONSE = {
  status: OK_STATUS,
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe('[HTTP][Base client]', () => {
  let axiosMock: axiosMockAdapter;
  let client: MockHttpClass;

  beforeEach(() => {
    client = new MockHttpClass({ baseUrl: 'meli.host' });
    axiosMock = new axiosMockAdapter(client.getInstance());
  });

  test('[GET][success]', async () => {
    axiosMock.onGet(MOCK_REQUEST).reply(OK_STATUS, MOCK_RESPONSE);
    const { data } = await client.mockGet(MOCK_REQUEST);
    expect(data).toEqual(MOCK_RESPONSE);
  });

  test('[GET][failed]', async () => {
    axiosMock.onGet(MOCK_REQUEST).reply(ERROR_STATUS);
    try {
      const info = await client.mockGet(MOCK_REQUEST);
      expect(info).toThrowError();
    } catch (error) {
      expect(error.response.status).toEqual(ERROR_STATUS);
    }
  });

  test('[POST][success]', async () => {
    axiosMock.onPost(MOCK_REQUEST, MOCK_PARAMS).reply(OK_STATUS, MOCK_RESPONSE);
    const { data } = await client.mockPost(MOCK_REQUEST, MOCK_PARAMS);
    expect(data).toEqual(MOCK_RESPONSE);
  });

  test('[POST][failed]', async () => {
    axiosMock.onPost(MOCK_REQUEST, MOCK_PARAMS).reply(ERROR_STATUS);
    try {
      const info = await client.mockPost(MOCK_REQUEST, MOCK_PARAMS);
      expect(info).toThrowError();
    } catch (error) {
      expect(error.response.status).toEqual(ERROR_STATUS);
    }
  });

  test('[PUT][success]', async () => {
    axiosMock.onPut(MOCK_REQUEST, MOCK_PARAMS).reply(OK_STATUS, MOCK_RESPONSE);
    const { data } = await client.mockPut(MOCK_REQUEST, MOCK_PARAMS);
    expect(data).toEqual(MOCK_RESPONSE);
  });

  test('[PUT][failed]', async () => {
    axiosMock.onPut(MOCK_REQUEST, MOCK_PARAMS).reply(ERROR_STATUS);
    try {
      const info = await client.mockPut(MOCK_REQUEST, MOCK_PARAMS);
      expect(info).toThrowError();
    } catch (error) {
      expect(error.response.status).toEqual(ERROR_STATUS);
    }
  });

  test('[PATCH][success]', async () => {
    axiosMock
      .onPatch(MOCK_REQUEST, MOCK_PARAMS)
      .reply(OK_STATUS, MOCK_RESPONSE);
    const { data } = await client.mockPatch(MOCK_REQUEST, MOCK_PARAMS);
    expect(data).toEqual(MOCK_RESPONSE);
  });

  test('[PATCH][failed]', async () => {
    axiosMock.onPatch(MOCK_REQUEST, MOCK_PARAMS).reply(ERROR_STATUS);
    try {
      const info = await client.mockPatch(MOCK_REQUEST, MOCK_PARAMS);
      expect(info).toThrowError();
    } catch (error) {
      expect(error.response.status).toEqual(ERROR_STATUS);
    }
  });

  test('[DELETE][success]', async () => {
    axiosMock.onDelete(MOCK_REQUEST).reply(OK_STATUS, MOCK_RESPONSE);
    const { data } = await client.mockDelete(MOCK_REQUEST);
    expect(data).toEqual(MOCK_RESPONSE);
  });

  test('[DELETE][failed]', async () => {
    axiosMock.onDelete(MOCK_REQUEST).reply(ERROR_STATUS);
    try {
      const info = await client.mockDelete(MOCK_REQUEST);
      expect(info).toThrowError();
    } catch (error) {
      expect(error.response.status).toEqual(ERROR_STATUS);
    }
  });
});
