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
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  // scrollYProgressの値(0~1)をscaleYに変換
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline">
      <div className="container max-w-4xl font-body-primary">
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
