'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { timelineData } from '@/data/timeline';

// タイムラインの各項目を表すコンポーネント
const TimelineItem = ({
  item,
  index,
}: {
  item: { date: string; event: string };
  index: number;
}) => {
  const isRight = index % 2 === 0;

  // 各アイテムのアニメーション定義
  const itemVariants = {
    hidden: { opacity: 0, x: -100 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <motion.div
      className="mb-8 flex w-full items-center justify-between"
      variants={itemVariants} // initial, whileInViewの代わりにvariantsを使用
    >
      {/* コンテンツ */}
      <div
        className={`z-10 w-full rounded-lg bg-slate-800 p-4 shadow-lg md:w-5/12`}
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
  // コンテナ用のアニメーション定義
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        // 子要素を0.3秒ずつ遅延させてアニメーションさせる
        staggerChildren: 0.7,
      },
    },
  };

  return (
    <section id="timeline">
      <div className="container max-w-4xl font-body-primary">
        <div className="relative">
          {/* タイムラインの項目をマッピング */}
          <motion.div
            className="relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }} // コンテナが20%見えたら発動
          >
            {timelineData.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
