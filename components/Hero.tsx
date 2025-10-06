'use client';

import React, { useCallback } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaChevronDown } from 'react-icons/fa';

// 背景アニメーション用のインポート
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const Hero = () => {
  // tsparticlesの初期化
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

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
      {/* 背景パーティクルアニメーション */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: '#0a192f', // ベースの背景色
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: 'repulse', // マウスホバーで粒子が離れる
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: '#ffffff', // 粒子の色
            },
            links: {
              color: '#ffffff',
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: 'none',
              enable: true,
              outModes: {
                default: 'bounce',
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80, // 粒子の数
            },
            opacity: {
              value: 0.3,
            },
            shape: {
              type: 'circle',
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

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
