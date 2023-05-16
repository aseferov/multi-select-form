import useMediaQuery from './useMediaQuery'

const useIsMobileScreen = () => {
  return useMediaQuery('(max-width: 640px)')
}

export default useIsMobileScreen
