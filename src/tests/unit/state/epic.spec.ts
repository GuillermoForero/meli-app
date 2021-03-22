import { itemsEpics, itemsTypes } from "state/items";
import store from 'state';
import { TestScheduler } from 'rxjs/testing';
import { throwError } from 'rxjs';
import { itemDetailResponse, searchResponse } from "tests/support/stubResponse";
describe('[searchItemsEpic] Redux', () => {
    test('search items success', () => {
        const state$: any = store;

        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });

        const payload = 'iphone 20';

        testScheduler.run(({ cold, hot, expectObservable }) => {
            const action$ = hot('-a', {
                a: {
                    payload,
                    type: itemsTypes.SEARCH_ITEMS,
                },
            });

            const dependencies: any = {
                meliClient: {
                    searchItems: () =>
                        cold('--a', {
                            a: searchResponse,
                        }),
                },
            };

            const output$ = itemsEpics.searchItemsEpic(
                action$,
                state$,
                dependencies
            );
            expectObservable(output$).toBe('---a', {
                a: {
                    type: itemsTypes.SEARCH_ITEMS_SUCCESS,
                    payload: searchResponse,
                },
            });
        });
    });
    test('search items Failed', () => {
        const state$: any = store;

        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });

        const payload = 'iphone 20';

        testScheduler.run(({ hot, expectObservable }) => {
            const action$ = hot('-a', {
                a: {
                    payload,
                    type: itemsTypes.SEARCH_ITEMS,
                },
            });

            const dependencies: any = {
                meliClient: {
                    searchItems: () =>
                        throwError({ message: 'Failed' }),
                },
            };

            const output$ = itemsEpics.searchItemsEpic(
                action$,
                state$,
                dependencies
            );
            expectObservable(output$).toBe('-a', {
                a: {
                    type: itemsTypes.SEARCH_ITEMS_FAILED,
                    payload: 'Failed',
                },
            });
        });
    });
    test('get item detail success', () => {
        const state$: any = store;

        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });

        const payload = 'id_1';

        testScheduler.run(({ cold, hot, expectObservable }) => {
            const action$ = hot('-a', {
                a: {
                    payload,
                    type: itemsTypes.GET_ITEM_DETAIL,
                },
            });

            const dependencies: any = {
                meliClient: {
                    getItemDetail: () =>
                        cold('--a', {
                            a: itemDetailResponse,
                        }),
                },
            };

            const output$ = itemsEpics.getItemDetailEpic(
                action$,
                state$,
                dependencies
            );
            expectObservable(output$).toBe('---a', {
                a: {
                    type: itemsTypes.GET_ITEM_DETAIL_SUCCESS,
                    payload: itemDetailResponse,
                },
            });
        });
    });
    test('get item detail Failed', () => {
        const state$: any = store;

        const testScheduler = new TestScheduler((actual, expected) => {
            expect(actual).toEqual(expected);
        });

        const payload = 'id_1';

        testScheduler.run(({ hot, expectObservable }) => {
            const action$ = hot('-a', {
                a: {
                    payload,
                    type: itemsTypes.GET_ITEM_DETAIL,
                },
            });

            const dependencies: any = {
                meliClient: {
                    getItemDetail: () =>
                        throwError({ message: 'Failed' }),
                },
            };

            const output$ = itemsEpics.getItemDetailEpic(
                action$,
                state$,
                dependencies
            );
            expectObservable(output$).toBe('-a', {
                a: {
                    type: itemsTypes.GET_ITEM_DETAIL_FAILED,
                    payload: 'Failed',
                },
            });
        });
    });
});