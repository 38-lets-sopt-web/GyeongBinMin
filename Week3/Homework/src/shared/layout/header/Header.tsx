import { TABS, type TabValue } from '@/shared/constants/tab'

import * as styles from './header.css'

type HeaderProps = {
  currentTab: TabValue
  onTabChange: (tab: TabValue) => void
}

const Header = ({ currentTab, onTabChange }: HeaderProps) => {
  return (
    <header className={styles.root}>
      <div className={styles.inner}>
        <h1 className={styles.brand}>두더지 게임</h1>
        <nav className={styles.tabs} aria-label="페이지 전환">
          <button
            type="button"
            className={currentTab === TABS.GAME ? styles.tabActive : styles.tab}
            onClick={() => onTabChange(TABS.GAME)}
            aria-current={currentTab === TABS.GAME ? 'page' : undefined}
          >
            게임
          </button>
          <button
            type="button"
            className={currentTab === TABS.RANKING ? styles.tabActive : styles.tab}
            onClick={() => onTabChange(TABS.RANKING)}
            aria-current={currentTab === TABS.RANKING ? 'page' : undefined}
          >
            랭킹
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
