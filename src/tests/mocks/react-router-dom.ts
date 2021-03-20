export const mockLocation = {
  pathname: '/',
  hash: '#hi',
  search: '',
  state: '',
};

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');
  const mockHistoryPush = jest.fn();

  return {
    ...originalModule,
    useParams: jest.fn().mockReturnValue({}),
    useHistory: () => ({
      push: mockHistoryPush,
    }),
    useLocation: jest.fn().mockReturnValue(mockLocation),
  };
});
