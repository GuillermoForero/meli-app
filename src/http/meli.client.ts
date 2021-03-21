import HttpClient from 'http/http.client';
import {
  Search,
  ItemDetail
} from 'interfaces/http';

export default class MeliClient extends HttpClient {
  public async searchItems(query: string): Promise<Search> {
    console.log(query)
    const { data } = await this.get(
      `items?search=${query}`);
    return data;
  }
  public async getItemDetail(itemId: string): Promise<ItemDetail> {
    const { data } = await this.get(
      `items/${itemId}`);

    return data;
  }
}
