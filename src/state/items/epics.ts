import { Observable, from, of } from 'rxjs';
import { mergeMap, catchError } from 'rxjs/operators';
import { ofType, StateObservable } from 'redux-observable';
import { AppState, EpicDependencies } from 'state';
import { itemsTypes, itemsActions } from 'state/items';
import { AxiosError } from 'axios';
import { ReduxAction } from 'state/utils';

const searchItemsEpic = (
  action$: Observable<ReduxAction<string>>,
  _: StateObservable<AppState>,
  { meliClient }: EpicDependencies
): Observable<any> =>
  action$.pipe(
    ofType(itemsTypes.SEARCH_ITEMS),
    mergeMap(({ payload }) =>
      from(meliClient.searchItems(payload)).pipe(
        mergeMap(searchResult =>
          of(itemsActions.searchItemsSuccess(searchResult))
        ),
        catchError((e: Error | AxiosError) => {
          return of(itemsActions.searchItemsFailed(e.message));
        }),
      )
    )
  );

  const getItemDetailEpic = (
    action$: Observable<ReduxAction<string>>,
    _: StateObservable<AppState>,
    { meliClient }: EpicDependencies
  ): Observable<any> =>
    action$.pipe(
      ofType(itemsTypes.GET_ITEM_DETAIL),
      mergeMap(({ payload }) =>
        from(meliClient.getItemDetail(payload)).pipe(
          mergeMap(itemDetail =>
            of(itemsActions.getItemDetailSuccess(itemDetail))
          ),
          catchError((e: Error | AxiosError) => {
            return of(itemsActions.getItemDetailFailed(e.message));
          }),
        )
      )
    );

export const itemsEpics = {
  searchItemsEpic,
  getItemDetailEpic,
};
