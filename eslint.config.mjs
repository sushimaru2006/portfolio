/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 静的HTMLエクスポートを有効にする
  distDir: 'out', // ビルド出力ディレクトリを 'out' に指定 (任意だが推奨)
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '', // GitHub Pagesのサブディレクトリに対応
  assetPrefix: process.env.NODE_ENV === 'production' ? '/portfolio/' : '', // アセットのパスも調整
  images: {
    unoptimized: true, // GitHub PagesではNext/Imageの最適化が動作しないため無効化
  },
};

export default nextConfig;
