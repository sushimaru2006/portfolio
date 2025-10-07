'use client';

import React, { useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaChevronDown } from 'react-icons/fa';


const Hero = () => {

  // キャッチコピーのテキスト
  const codeText = `const myMind = {
  proactivity: "常にON",         // 積極性
  effort:      "無限ループ",     // 努力
  curiosity:   "尽きることのない探究心"
};`;

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center text-center"
    >
      {/* メインコンテンツ */}
      <div className="z-10 w-full max-w-2xl px-4">
        <div className="rounded-lg bg-gray-900/50 p-6 shadow-xl ring-1 ring-cyan-400/30">
          <pre className="text-left">
            <code className="font-body-primary space-sm">
              <TypeAnimation
                sequence={[codeText, 2000]} // テキストを表示し、2秒待つ
                wrapper="span"
                speed={60}
                cursor={true}
                style={{
                  whiteSpace: 'pre-line',
                  display: 'inline-block',
                  color: '#64ffda', // アクセントカラー
                }}
              />
            </code>
          </pre>
        </div>
      </div>

      {/* スクロールダウンアイコン */}
      {/* <div className="absolute bottom-10 z-10">
        <a href="#about" aria-label="Scroll to about section">
          <FaChevronDown className="animate-bounce text-3xl text-slate-400 hover:text-cyan-400" />
        </a>
      </div> */}
    </section>
  );
};

export default Hero;
