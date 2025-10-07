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
      <div className="container header-height mx-auto max-w-4xl px-4 font-body-primary">
        <div ref={targetRef} className="relative">
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
