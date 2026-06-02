import '../shared/styles/reset.css'
import '../shared/styles/global.css'

import { useState } from 'react'

import { TABS, type TabValue } from '@/shared/constants/tab'

import Header from '@/shared/layout/header/Header'
import GamePage from '@/pages/game/GamePage'
import RankingPage from '@/pages/ranking/RankingPage'

import * as styles from './App.css'

const App = () => {
  const [tab, setTab] = useState<TabValue>(TABS.GAME)

  return (
    <div className={styles.container}>
      <Header currentTab={tab} onTabChange={setTab} />
      {tab === TABS.GAME ? <GamePage /> : <RankingPage />}
    </div>
  )
}

export default App
