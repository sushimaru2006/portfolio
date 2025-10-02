// タイムラインの各イベントの型を定義
export type TimelineEvent = {
  date: string;
  event: string;
};

// 経歴データの配列をエクスポート
export const timelineData: TimelineEvent[] = [
  { date: '2022/12', event: 'セキュリティ・ミニキャンプ in Tokyo 参加' },
  { date: '2023/07', event: 'ベトナムの学生と交流会 (英語司会)' },
  { date: '2023/08', event: '埼玉ICTコンテスト (アイデア部門)' },
  { date: '2023/09', event: 'アプリ甲子園 (アイデア部門)' },
  { date: '2023/09', event: 'ICT基礎ラボ for junior 開催 (講師)' },
  { date: '2023/12', event: 'Hack U 産技高専 出場 (ハッピーハッキング賞)' },
  { date: '2024/02', event: 'Open Hack U 2024 Tokyo 出場' },
  { date: '2024/03', event: 'ICT基礎ラボ for junior 開催' },
  { date: '2024/07', event: '埼玉ICTコンテスト (アプリ部門)' },
  { date: '2024/08', event: 'ドバイ短期留学' },
  { date: '2024/08', event: 'Open Hack U 2024 Tokyo vol.2 出場' },
  { date: '2024/12', event: 'Hack U Kosen 出場' },
  { date: '2025/01', event: 'TOEIC 690点 取得' },
];
