// app/page.tsx
import Link from 'next/link'; // Linkコンポーネントをインポート

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* 色々コンテンツがありますが、一旦このままにしておきます */}
      </div>

      {/* 中央のNext.jsロゴの下あたりにリンクを追加 */}
      <div className="relative z-[-1] flex place-items-center ...">
        {/* ...元々のコード... */}
      </div>

      <div>
        <Link href="/about" className="text-lg text-blue-500 hover:underline">
          自己紹介ページへ
        </Link>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">
        {/* ...元々のコード... */}
      </div>
    </main>
  );
}
