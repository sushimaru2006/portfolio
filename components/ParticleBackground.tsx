'use client';

// 背景アニメーション用のインポート
import Particles from 'react-tsparticles';
import type { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';

const ParticleBackground = () => {
    // tsparticlesの初期化
    const particlesInit = async (engine: Engine) => {
        await loadSlim(engine);
    };

    return (
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
                        color: '#ffffff', // 粒子間のリンクの色
                        distance: 150,
                        enable: true,
                        opacity: 0.5,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
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
                        value: { min: 1, max: 3 }, // 粒子のサイズ
                    },
                },
                detectRetina: true,
            }}
            className="absolute inset-0 -z-10" // 背景に配置
        />
    );
};

export default ParticleBackground;
