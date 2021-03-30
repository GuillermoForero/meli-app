import HttpClient from 'http/http.client';
import {
  Search,
  ItemDetail
} from 'interfaces/http';
/*
I noticed that due to the API I cannot obtain the data as it is requested in the challenge,
as in the case of the price, there is also missing data for the UI issue,
however it is something that does not affect the operation much, in case of need add them, it doesn't take long
*/
export default class MeliClient extends HttpClient {
  public async searchItems(query: string): Promise<Search> {
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
