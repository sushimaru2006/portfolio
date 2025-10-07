'use client';

import React from 'react';
import { motion } from 'framer-motion';

// Chart.js と Reactラッパーをインポート
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

// Chart.jsに必要なコンポーネントを登録
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const Skills = () => {
  // レーダーチャートのデータ
  const data = {
    labels: [
      'Python',
      'C#',
      'Dart',
      'C++',
      'Flutter',
      'Unity',
      'Next.js',
      'AWS',
      'Docker',
      'Git',
      'Figma',
    ],
    datasets: [
      {
        label: '習熟度',
        data: [80, 70, 70, 30, 80, 80, 30, 50, 50, 80, 80],
        backgroundColor: 'rgba(0, 170, 255, 0.2)', // エレクトリックブルー (塗りつぶし)
        borderColor: '#00aaff', // エレクトリックブルー (線)
        borderWidth: 2,
        pointBackgroundColor: '#00aaff',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#00aaff',
      },
    ],
  };

  // レーダーチャートのオプション
  const options = {
    scales: {
      r: {
        angleLines: {
          color: 'rgba(255, 255, 255, 0.2)', // 中心からの線の色
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', // グリッド線の色
        },
        pointLabels: {
          color: '#e2e8f0', // スキル名のテキスト色
          font: {
            size: 12,
            family: "'Roboto Mono', monospace",
          },
        },
        ticks: {
          backdropColor: 'rgba(0,0,0,0)', // 目盛りの背景色を透明に
          color: 'rgba(255, 255, 255, 0.5)', // 目盛りのテキスト色
          stepSize: 20,
        },
        min: 0,
        max: 100,
      },
    },
    plugins: {
      legend: {
        display: false, // 凡例は非表示
      },
    },
    maintainAspectRatio: false, // アスペクト比を維持しない
  };

  return (
    <section id="skills">
      <div className="container max-w-4xl">
        <motion.div
          className="relative space-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 2 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Radar data={data} options={options} />
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
