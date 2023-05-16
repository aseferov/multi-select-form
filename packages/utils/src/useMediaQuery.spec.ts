import { renderHook } from '@testing-library/react-hooks';
import useMediaQuery from './useMediaQuery';

describe('useMediaQuery', () => {
  beforeAll(() => {
    window.matchMedia = jest.fn().mockImplementation((query) => ({
      matches: query === '(min-width: 768px)',
      addListener: jest.fn(),
      removeListener: jest.fn(),
    }));
  });
  it('should return true when the query matches', () => {
    const query = '(min-width: 768px)';
    const { result } = renderHook(() => useMediaQuery(query));

    expect(result.current).toBe(true);
  });

  it('should return false when the query does not match', () => {
    const query = '(min-width: 7680px)';
    const { result } = renderHook(() => useMediaQuery(query));

    expect(result.current).toBe(false);
  });

  it('should update the matches state when the query matches', () => {
    const query = '(min-width: 768px)';
    const { result } = renderHook(() => useMediaQuery(query));

    expect(result.current).toBe(true);

    const mediaQueryList = { matches: false };
    window.matchMedia = jest.fn().mockImplementation(() => mediaQueryList);

    mediaQueryList.matches = true;
    window.dispatchEvent(new Event('resize'));

    expect(result.current).toBe(true);
  });
});
