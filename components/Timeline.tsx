'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// 経歴データ
// 本来は data/timeline.ts のような別ファイルに記述するのがおすすめです
const timelineData = [
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

// タイムラインの各項目を表すコンポーネント
const TimelineItem = ({
  item,
  index,
}: {
  item: { date: string; event: string };
  index: number;
}) => {
  const isRight = index % 2 === 0;
  return (
    <motion.div
      className="mb-8 flex w-full items-center justify-between"
      initial={{ opacity: 0, x: isRight ? 100 : -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.8 }}
    >
      {/* 項目を左右に振り分けるためのスペーサー */}
      {!isRight && <div className="hidden md:block md:w-5/12"></div>}

      {/* 中央のドット */}
      <div className="z-20 flex w-10 items-center bg-[#0a192f] md:w-auto">
        <div className="mx-auto h-4 w-4 rounded-full bg-[#64ffda] shadow-[0_0_10px_#64ffda]"></div>
      </div>

      {/* コンテンツ */}
      <div
        className={`z-10 w-full rounded-lg bg-slate-800 p-4 shadow-lg md:w-5/12 ${
          isRight ? 'text-left' : 'text-right'
        }`}
      >
        <p className="mb-1 text-sm font-semibold text-[#64ffda]">{item.date}</p>
        <p className="text-base text-slate-300">{item.event}</p>
      </div>

      {isRight && <div className="hidden md:block md:w-5/12"></div>}
    </motion.div>
  );
};

// タイムライン全体コンポーネント
const Timeline = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // scrollYProgressの値(0~1)をscaleYに変換
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-16 font-mono text-[#64ffda]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          03. Timeline
        </motion.h2>

        <div ref={targetRef} className="relative">
          {/* 中央の光るライン */}
          <motion.div
            style={{ scaleY }}
            className="absolute left-1/2 top-0 z-0 h-full w-1 origin-top -translate-x-1/2 bg-cyan-400/30"
          >
            <div className="absolute h-full w-full bg-[#64ffda] shadow-[0_0_10px_#64ffda]"></div>
          </motion.div>

          {/* タイムラインの項目をマッピング */}
          <div className="relative z-10">
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
