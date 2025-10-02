'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// アイコンを使用します (npm install react-icons)
import { FaFolder, FaTimes, FaPython } from 'react-icons/fa';
import { SiCurseforge } from "react-icons/si";
// 制作実績データ
// 複数ある場合はこの配列に追加していきます
const worksData = [
  {
    title: 'ICT基礎ラボ for junior Python入門',
    description: '中学生への技術教育と、学生自身の学びの深化を目的とした講座。',
    tech: ['Python'],
    role: '講師兼リーダーとしてカリキュラム設計、チームマネジメントを担当。参加者が挫折しないよう、基礎理論の伝達に特に注力しました。',
    learnings:
      '人に教えることの難しさと楽しさを学びました。複雑な概念をいかに平易な言葉で伝えるかというティーチングスキル、そしてチームで一つの目標に向かうプロジェクトマネジメント能力が向上しました。',
  },
  // 他のプロジェクトがあればここに追加
  // {
  //   title: '次のプロジェクト',
  //   ...
  // },
];

const Works = () => {
  // 選択されたプロジェクトを管理するstate (nullの場合はモーダル非表示)
  const [selectedWork, setSelectedWork] = useState<(typeof worksData)[0] | null>(
    null
  );

  const openModal = (work: (typeof worksData)[0]) => {
    setSelectedWork(work);
  };

  const closeModal = () => {
    setSelectedWork(null);
  };

  return (
    <section id="works" className="py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-12 font-mono text-[#64ffda]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          04. Works
        </motion.h2>

        {/* カードグリッド */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {worksData.map((work, index) => (
            <motion.div
              key={index}
              className="group cursor-pointer rounded-lg bg-slate-800 p-6 transition-transform duration-300 hover:-translate-y-2"
              onClick={() => openModal(work)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between">
                <FaFolder className="text-4xl text-[#00aaff]" />
              </div>
              <h3 className="mt-4 text-xl font-bold text-slate-200 group-hover:text-[#64ffda]">
                {work.title}
              </h3>
              <p className="mt-2 text-sm text-slate-400">{work.description}</p>
              <div className="mt-4 flex space-x-2">
                {work.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-slate-700 px-2 py-1 text-xs text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* モーダル表示 */}
      <AnimatePresence>
        {selectedWork && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal} // 背景クリックで閉じる
          >
            <motion.div
              className="relative m-4 w-full max-w-2xl rounded-lg bg-slate-800 p-8 shadow-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()} // モーダル内のクリックが背景に伝播しないようにする
            >
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 text-2xl text-slate-400 hover:text-white"
              >
                <FaTimes />
              </button>
              <h2 className="mb-2 text-2xl font-bold text-[#64ffda]">
                {selectedWork.title}
              </h2>
              <div className="mb-4 flex space-x-2">
                {selectedWork.tech.map((t, i) => (
                  <span
                    key={i}
                    className="rounded-full bg-slate-700 px-3 py-1 text-sm text-cyan-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="space-y-4 text-slate-300">
                <div>
                  <h4 className="font-semibold text-slate-100">背景</h4>
                  <p>{selectedWork.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">役割と工夫</h4>
                  <p>{selectedWork.role}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-100">学び</h4>
                  <p>{selectedWork.learnings}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Works;
