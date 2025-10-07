'use client';

import React from 'react';
import { motion } from 'framer-motion';
// アイコンのプレースホルダーとしてreact-iconsを使用します。
// npm install react-icons でインストールしてください。
// import { FaUserCircle } from 'react-icons/fa';
import icon from '../public/icon.png';
import Image from 'next/image';

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="container max-w-4xl">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* 左側: アイコン */}
          <motion.div
            className="flex space-lg md:col-span-1"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {/* TODO: ここにご自身のSVGアイコンを配置してください */}
            {/* <FaUserCircle className="text-8xl md:text-9xl text-[#00aaff]" /> */}
            <Image
              src={icon}
              alt="Profile Icon"
              className="rounded-full img-xl"
            />
            <p className="font-semibold font-heading-4xl flex items-center space-md text-[#64ffda]">Maru</p>
          </motion.div>

          {/* 自己紹介文 */}
          <motion.div
            className="md:col-span-2 font-body-primary"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            <p className="text-base font-body-primary space-sm leading-relaxed text-slate-300">
              情報工学を専攻している学生。AIとアプリ開発を勉強しています。
            </p>
          </motion.div>


          {/* 興味 */}
          <motion.h2
            className="md:col-span-3 font-heading-xl font-bold mb-6 text-slate-100"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            〜＞ ls Interests
          </motion.h2>
          {/* 興味のカードリスト 横並び */}
          <motion.div
            className="space-sm grid grid-cols-2 gap-4 mb-8"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeInOut' }}
          >
            {['AI', 'App_Development', 'Game_Development', 'Teaching', 'Management', 'Volleyball'].map((interest) => (
              <div
                key={interest}
                className="bg-slate-800 font-body-primary rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-lg font-semibold text-[#64ffda] text-slate-200">{interest}</h3>
              </div>
            ))}
          </motion.div>

          {/* 右側: 自己紹介文 */}
          {/* <motion.div
            className="md:col-span-2 font-body-primary"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeInOut' }}
          >
            <p className="text-base md:text-lg leading-relaxed text-slate-300">
              [あなたの高専名]で情報工学を専攻し、特にAIとアプリケーション開発に情熱を注いでいます。新しいアイデアを形にすることに魅力を感じ、国内外のハッカソンやコンテストへ積極的に参加。個人でのゲーム開発も行い、常に手を動かし続けることを信条としています。
              <br />
              <br />
              また、中学生にPythonを教える講座で講師兼リーダーを務めた経験から、複雑な技術を分かりやすく伝えることの重要性とチームマネジメントの面白さを学びました。
              <br />
              <br />
              趣味のバレーボールで培ったチームワークも活かし、技術とコミュニケーションの両面から価値を創造できるエンジニアを目指しています。
            </p>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default About;
