import Image from 'next/image'
import useIsMobileScreen from 'utils/src/useIsMobileScreen'

export function SidebarImage() {
  const isMobile = useIsMobileScreen()
  return (
    <Image
      src={
        isMobile
          ? require('./bg-sidebar-mobile.svg')
          : require('./bg-sidebar-desktop.svg')
      }
      fill
      alt=""
    />
  )
}

export default SidebarImage
