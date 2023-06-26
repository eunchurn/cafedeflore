import Folder from './folder.svg'
import Instagram from './instagram.svg'
import KakaoNavi from './kakao_navi.svg'

const FolderIcon = () => {
  return <Folder className="h-10 w-10 text-primary-color-500 dark:text-primary-color-dark-500" />
}

export const InstagramIcon = () => {
  return <Instagram className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 132 132" />
}

export const KakaoNaviIcon = () => {
  return <KakaoNavi className="h-6 w-6 text-green-600" />
}

export default FolderIcon
