export const GUIDE_MESSAGES = {
  idle: '시작 버튼을 눌러 게임을 시작하세요.',
  playing: '두더지는 +1점, 폭탄은 -1점입니다.',
  stopped: '중단되었습니다. 다시 시작할 수 있습니다.',
  moleHit: '두더지 잡기 성공! +1점',
  bombHit: '폭탄입니다! -1점',
  ended: (score: number) => `게임 종료! 최종 점수 ${score}점`,
}
