// 制作実績の各プロジェクトの型を定義
export type WorkProject = {
  title: string;
  description: string;
  tech: string[];
  role: string;
  learnings: string;
};

// 制作実績データの配列をエクスポート
export const worksData: WorkProject[] = [
  {
    title: 'ICT基礎ラボ for junior Python入門',
    description: '中学生への技術教育と、学生自身の学びの深化を目的とした講座。',
    tech: ['Python'],
    role: '講師兼リーダーとしてカリキュラム設計、チームマネジメントを担当。参加者が挫折しないよう、基礎理論の伝達に特に注力しました。',
    learnings:
      '人に教えることの難しさと楽しさを学びました。複雑な概念をいかに平易な言葉で伝えるかというティーチングスキル、そしてチームで一つの目標に向かうプロジェクトマネジメント能力が向上しました。',
  },
  // 新しいプロジェクトを追加する場合は、この下に同じ形式でオブジェクトを追加します
  // {
  //   title: '新しいプロジェクト名',
  //   description: 'プロジェクトの簡単な説明。',
  //   tech: ['Next.js', 'TypeScript'],
  //   role: '担当した役割や、工夫した点など。',
  //   learnings: 'このプロジェクトを通して得られた学びや経験。',
  // },
];
