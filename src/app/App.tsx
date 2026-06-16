import { useState, useEffect } from "react";
import PathScreenHighFidelity from "../imports/PathScreenHighFidelity/index";
import QuizSuccessScreen from "../imports/QuizSuccessScreen/index";
import NewsSearchResultsScreen from "../imports/NewsSearchResultsScreen/index";
import { QuizQuestion, INVEST_QUIZZES, LEVEL_THEMES } from "./investQuizzes";

type Screen =
  | 'home'
  | 'concept'          // 오늘의 개념 (새 개념 학습)
  | 'conceptQuiz'      // 오늘의 개념 → 퀴즈
  | 'challenge'        // 오늘의 챌린지 (전날 개념 심화문제)
  | 'setPath'          // 학습세트 → 게임 경로
  | 'setQuiz'          // 학습세트 → 퀴즈 풀기
  | 'quizSuccess'
  | 'news'
  | 'levelSelect'      // 자격증 레벨 선택 화면
  | 'createQuiz';      // AI 퀴즈 생성 화면

export interface BookmarkedNews {
  title: string;
  link: string;
  description: string;
  source: string;
  pubDate: string;
  image?: string;
  memo?: string;
}

export interface CustomQuizSet {
  id: string;
  name: string;
  emoji: string;
  questions: QuizQuestion[];
  isCustom: boolean;
}


type Tab = 'home' | 'learn' | 'stats' | 'profile';

const CONCEPT_QUIZ: QuizQuestion = {
  question: '기준금리에 대한 설명으로 옳은 것은?',
  level: 'LEVEL 1',
  options: [
    { text: '중앙은행이 시중은행과 거래할 때 기준이 되는 금리이다.', correct: true },
    { text: '물가 안정을 위해 시장의 통화량을 조절하는 수단이다.' },
    { text: '개인이 은행에 저축할 때 적용되는 가장 높은 금리이다.' },
    { text: '주식 시장의 변동성에 따라 실시간으로 변하는 금리이다.' },
  ],
  progress: 0.1,
  current: 1,
  total: 10,
};

const CHALLENGE_QUIZ: QuizQuestion = {
  question: '기준금리가 인상될 때 나타나는 효과로 옳지 않은 것은?',
  level: 'LEVEL 3',
  options: [
    { text: '시중 대출 금리가 상승한다.' },
    { text: '소비 지출이 증가하고 경기가 활성화된다.', correct: true },
    { text: '예금 이자율이 높아져 저축 유인이 증가한다.' },
    { text: '환율 상승으로 수출 경쟁력이 약화될 수 있다.' },
  ],
  progress: 0.3,
  current: 3,
  total: 10,
};

const SET_QUIZZES: Record<string, QuizQuestion[]> = {
  주식: [
    {
      question: '주식의 배당금이란 무엇인가?',
      level: 'LEVEL 1',
      options: [
        { text: '회사가 이익을 주주에게 나눠주는 금액이다.', correct: true },
        { text: '주식을 살 때 내는 거래 수수료이다.' },
        { text: '주가가 오를 때 생기는 시세 차익이다.' },
        { text: '회사가 빌린 돈에 대한 이자이다.' },
      ],
      progress: 0.1,
      current: 1,
      total: 8,
    },
    {
      question: 'PER(주가수익비율)이 낮을수록 의미하는 것은?',
      level: 'LEVEL 2',
      options: [
        { text: '주가가 이익 대비 저평가되어 있다.', correct: true },
        { text: '회사의 성장 가능성이 높다.' },
        { text: '주가가 고평가되어 있다.' },
        { text: '배당을 많이 주는 주식이다.' },
      ],
      progress: 0.25,
      current: 2,
      total: 8,
    },
    {
      question: '코스피(KOSPI)는 무엇을 나타내는 지수인가?',
      level: 'LEVEL 2',
      options: [
        { text: '한국 유가증권시장 전체 시가총액 변동 지수이다.', correct: true },
        { text: '미국 뉴욕증권거래소의 주가 지수이다.' },
        { text: '한국 코스닥 시장의 주가 지수이다.' },
        { text: '전 세계 주요 주식의 평균 지수이다.' },
      ],
      progress: 0.375,
      current: 3,
      total: 8,
    },
  ],
  채권: [
    {
      question: '채권의 만기수익률(YTM)이란?',
      level: 'LEVEL 1',
      options: [
        { text: '채권을 만기까지 보유했을 때 얻는 연평균 수익률이다.', correct: true },
        { text: '채권을 중간에 팔았을 때 얻는 수익이다.' },
        { text: '채권 발행 시 정해진 액면이자율이다.' },
        { text: '물가 상승분을 제외한 실질 수익률이다.' },
      ],
      progress: 0.1,
      current: 1,
      total: 8,
    },
    {
      question: '금리가 오르면 채권 가격은?',
      level: 'LEVEL 2',
      options: [
        { text: '하락한다.', correct: true },
        { text: '상승한다.' },
        { text: '변하지 않는다.' },
        { text: '금리와 무관하다.' },
      ],
      progress: 0.25,
      current: 2,
      total: 8,
    },
  ],
  미시경제: [
    {
      question: '수요의 가격탄력성이 높다는 것은?',
      level: 'LEVEL 1',
      options: [
        { text: '가격이 조금 오르면 수요가 크게 줄어든다.', correct: true },
        { text: '가격이 올라도 수요가 거의 줄지 않는다.' },
        { text: '가격과 수요가 비례해 움직인다.' },
        { text: '공급이 수요를 결정한다.' },
      ],
      progress: 0.1,
      current: 1,
      total: 6,
    },
    {
      question: '독점 시장의 특징으로 옳은 것은?',
      level: 'LEVEL 2',
      options: [
        { text: '공급자가 가격을 결정하는 시장 지배력을 가진다.', correct: true },
        { text: '다수의 공급자가 경쟁한다.' },
        { text: '가격이 한계비용과 같다.' },
        { text: '소비자 잉여가 극대화된다.' },
      ],
      progress: 0.2,
      current: 2,
      total: 6,
    },
  ],
};

const generateSimulatedQuiz = (topic: string, count: number, difficulty: string): QuizQuestion[] => {
  const cleanTopic = topic.trim();
  
  const presets: Record<string, { q: string, opts: {text: string, correct?: boolean}[] }[]> = {
    '부동산': [
      {
        q: 'LTV(담보인정비율)가 60%이고 주택 평가 가격이 6억원일 때, 금융기관에서 최대로 대출받을 수 있는 금액은?',
        opts: [
          { text: '3억 6천만원', correct: true },
          { text: '3억원' },
          { text: '4억 2천만원' },
          { text: '2억 4천만원' }
        ]
      },
      {
        q: 'DSR(총부채원리금상환비율)에 대한 설명으로 가장 적절한 것은?',
        opts: [
          { text: '모든 가계대출의 연간 원리금 상환액을 연 소득으로 나눈 비율이다.', correct: true },
          { text: '주택담보대출의 원리금 상환액만을 기준으로 산정한 비율이다.' },
          { text: '신용대출의 연간 이자 상환액만을 소득으로 나눈 비율이다.' },
          { text: '매달 상환해야 하는 원금만을 월 소득으로 나눈 비율이다.' }
        ]
      },
      {
        q: '대출 상환 방식 중 초기 원금 상환 부담은 적으나 총 이자 부담액이 가장 큰 방식은?',
        opts: [
          { text: '원리금균등분할상환', correct: true },
          { text: '원금균등분할상환' },
          { text: '만기일시상환' },
          { text: '체증식분할상환' }
        ]
      },
      {
        q: '부동산 가격 상승기에 대출을 규제하기 위해 정부가 주로 인하하는 비율이 아닌 것은?',
        opts: [
          { text: '기준금리', correct: true },
          { text: 'LTV' },
          { text: 'DTI' },
          { text: 'DSR' }
        ]
      },
      {
        q: '주택도시기금에서 지원하는 서민형 주택담보대출 상품의 대표적인 명칭은?',
        opts: [
          { text: '디딤돌대출', correct: true },
          { text: '보금자리론' },
          { text: '신용대출' },
          { text: '전세자금대출' }
        ]
      }
    ],
    '가상화폐': [
      {
        q: '비트코인(Bitcoin)의 최대 발행 예정 수량은 얼마인가?',
        opts: [
          { text: '2,100만 개', correct: true },
          { text: '1,000만 개' },
          { text: '8,400만 개' },
          { text: '무제한 발행' }
        ]
      },
      {
        q: '블록체인의 핵심 기술적 특징으로 가장 옳은 것은?',
        opts: [
          { text: '거래 장부를 분산하여 투명하게 기록하고 조작을 방지한다.', correct: true },
          { text: '중앙은행에서 모든 거래 내역을 실시간 검증한다.' },
          { text: '완벽한 익명성을 보장하여 추적이 불가능하게 한다.' },
          { text: '네트워크 속도를 빠르게 하기 위해 모든 정보를 중앙화한다.' }
        ]
      },
      {
        q: '가상화폐 거래소에서 투자자 보호를 위해 이상 거래나 악재가 발생했을 때 지정하는 종목은?',
        opts: [
          { text: '유의 종목', correct: true },
          { text: '상장 폐지 종목' },
          { text: '우수 종목' },
          { text: '공매도 종목' }
        ]
      },
      {
        q: '비트코인 채굴 보상이 절반으로 줄어들어 공급량이 감소하는 현상을 일컫는 말은?',
        opts: [
          { text: '반감기', correct: true },
          { text: '하드포크' },
          { text: '락업 해제' },
          { text: '에어드랍' }
        ]
      },
      {
        q: '스마트 계약(Smart Contract) 기능을 도입하여 탈중앙화 애플리케이션(DApp) 생태계를 구축한 대표적인 가상화폐는?',
        opts: [
          { text: '이더리움(Ethereum)', correct: true },
          { text: '비트코인 캐시' },
          { text: '라이트코인' },
          { text: '도지코인' }
        ]
      }
    ],
    '환율': [
      {
        q: '원/달러 환율이 급격히 상승(원화 가치 하락)할 때 일반적으로 발생하는 경제적 영향으로 옳은 것은?',
        opts: [
          { text: '수출 기업의 가격 경쟁력이 강화된다.', correct: true },
          { text: '수입 원자재 가격이 하락한다.' },
          { text: '외국인 관광객의 한국 여행 부담이 커진다.' },
          { text: '국내 물가가 전반적으로 안정된다.' }
        ]
      },
      {
        q: '환율을 인위적으로 조정하여 수출을 촉진하려는 정책을 펼칠 때 발생할 수 있는 부작용은?',
        opts: [
          { text: '상대국으로부터 환율조작국으로 지정되거나 통상 마찰이 일어난다.', correct: true },
          { text: '국내 금리가 자동으로 인하된다.' },
          { text: '외환보유고가 무한히 급증한다.' },
          { text: '환차손 위험이 완전히 사라진다.' }
        ]
      },
      {
        q: '국가 간 외환 거래가 원활하지 못하거나 외환보유고가 바닥났을 때 발생하는 국가적 위기 상태는?',
        opts: [
          { text: '외환위기 (모라토리엄/디폴트 포함)', correct: true },
          { text: '인플레이션 위기' },
          { text: '스태그플레이션 위기' },
          { text: '금리 역전 위기' }
        ]
      }
    ]
  };

  let matchedPreset: { q: string, opts: {text: string, correct?: boolean}[] }[] | undefined;
  for (const key of Object.keys(presets)) {
    if (cleanTopic.toLowerCase().includes(key)) {
      matchedPreset = presets[key];
      break;
    }
  }

  const baseQuestions = matchedPreset || [];
  const generated: QuizQuestion[] = [];

  for (let i = 0; i < count; i++) {
    if (i < baseQuestions.length) {
      const qData = baseQuestions[i];
      generated.push({
        question: qData.q,
        level: `LEVEL ${difficulty === '초급' ? 1 : difficulty === '중급' ? 2 : 3}`,
        options: qData.opts,
        progress: (i + 1) / count,
        current: i + 1,
        total: count
      });
    } else {
      const templates = [
        {
          q: `[${cleanTopic}] 관련 자산에 투자할 때 가장 중요하게 고려해야 할 리스크 관리 방법은?`,
          opts: [
            { text: '분산 투자를 통해 포트폴리오의 비체계적 위험을 낮춘다.', correct: true },
            { text: '단기적인 가격 급변동에 따라 추격 매수를 단행한다.' },
            { text: '레버리지(신용 거래)를 최대한 끌어올려 단기 고수익을 노린다.' },
            { text: '인터넷 커뮤니티나 SNS의 추천 글을 맹신하고 몰빵 투자한다.' }
          ]
        },
        {
          q: `[${cleanTopic}] 시장이 급변하는 국면에서 초보 투자자가 취해야 할 올바른 자세는?`,
          opts: [
            { text: '기초 체력(펀더멘탈)과 내재 가치를 면밀히 분석한 후 장기 투자한다.', correct: true },
            { text: '주가가 급락할 때 공포심에 휩싸여 패닉 셀(Panic Sell)을 한다.' },
            { text: '지인의 권유만 듣고 빚을 내어 추가 매수를 진행한다.' },
            { text: '단기간에 주가가 회복할 것이라 확신하고 몰빵 투자한다.' }
          ]
        },
        {
          q: `[${cleanTopic}] 투자 활동을 수행할 때 발생하는 세금 부담을 합리적으로 절약하기 위해 추천하는 계좌는?`,
          opts: [
            { text: 'ISA(개인종합자산관리계좌) 또는 연금저축펀드 계좌', correct: true },
            { text: '일반 비과세 미지정 일반 주식 종합 계좌' },
            { text: '수시 입출금이 자유로운 일반 CMA 계좌' },
            { text: '단기 차익 실현용 해외 주식 전용 계좌' }
          ]
        },
        {
          q: `[${cleanTopic}] 시장의 가치를 객관적으로 평가하고 분석하는 방법 중, 재무제표와 펀더멘탈 분석을 활용하는 방법은 무엇인가?`,
          opts: [
            { text: '기본적 분석 (Fundamental Analysis)', correct: true },
            { text: '기술적 분석 (Technical Analysis)' },
            { text: '정량적 차트 모멘텀 분석' },
            { text: '소셜 미디어 빅데이터 언급률 분석' }
          ]
        },
        {
          q: `[${cleanTopic}] 관련 규제나 법률 개정이 시장 가격에 큰 변화를 미칠 때, 이러한 위험 요소를 무엇이라고 하는가?`,
          opts: [
            { text: '규제 리스크 (Regulatory Risk)', correct: true },
            { text: '체계적 시장 리스크 (Systemic Risk)' },
            { text: '신용 위험 (Credit Risk)' },
            { text: '유동성 리스크 (Liquidity Risk)' }
          ]
        },
        {
          q: `[${cleanTopic}] 투자 시 복리 효과(Compounding Effect)를 극대화하기 위해 가장 중요한 행동 요령은?`,
          opts: [
            { text: '발생한 수익과 배당을 즉시 재투자하고 장기 보유한다.', correct: true },
            { text: '소소한 이익이 생길 때마다 현금화하여 즉시 소비한다.' },
            { text: '수시로 매수와 매도를 반복하여 잦은 수수료를 발생시킨다.' },
            { text: '변동성을 피하기 위해 무조건 초단기 채권에만 투자한다.' }
          ]
        },
        {
          q: `[${cleanTopic}] 투자 시 뇌동매매를 방지하고 감정 제어 능력을 갖추기 위해 설정해야 하는 명확한 규칙은?`,
          opts: [
            { text: '자산 배분 가이드라인 및 목표 수익률/손절 라인 설정', correct: true },
            { text: '커뮤니티 시장 반응에 실시간 대응하기' },
            { text: '주가가 내릴 때 무계획적으로 무조건 물타기' },
            { text: '급격한 호재 발생 시 가용한 예수금 전부 투입하기' }
          ]
        },
        {
          q: `[${cleanTopic}] 투자 대상의 내재 가치보다 시장 가격이 매우 저렴하게 거래되는 상황을 발견했을 때, 가치 투자자들이 강조하는 핵심 단어는?`,
          opts: [
            { text: '안전 마진 (Margin of Safety)', correct: true },
            { text: '공매도 찬스 (Short Sale Opportunity)' },
            { text: '단타 트레이딩 타점 (Day Trading Point)' },
            { text: '레버리지 스퀴즈 (Leverage Squeeze)' }
          ]
        },
        {
          q: `[${cleanTopic}] 자산의 가격 상승 속도가 너무 빠르고 실체가 모호할 때 발생하여, 언젠가 꺼지기 마련인 거품 현상을 무엇이라 하는가?`,
          opts: [
            { text: '버블 (Asset Bubble)', correct: true },
            { text: '인플레이션 (Inflation)' },
            { text: '디플레이션 (Deflation)' },
            { text: '불마켓 (Bull Market)' }
          ]
        },
        {
          q: `[${cleanTopic}] 투자 성과를 분기나 년 단위로 측정하며, 자신의 투자 원칙이 잘 고수되고 있는지 피드백하는 문서를 무엇이라 하는가?`,
          opts: [
            { text: '투자 저널 (Investment Journal) 및 오답 노트', correct: true },
            { text: '증권사 일별 실시간 시세 내역서' },
            { text: '금융 뉴스 일일 스크랩 요약본' },
            { text: '주주총회 참석 확인서' }
          ]
        }
      ];

      const tIdx = (i - baseQuestions.length) % templates.length;
      const t = templates[tIdx];

      generated.push({
        question: t.q,
        level: `LEVEL ${difficulty === '초급' ? 1 : difficulty === '중급' ? 2 : 3}`,
        options: t.opts.map(o => ({ ...o })),
        progress: (i + 1) / count,
        current: i + 1,
        total: count
      });
    }
  }

  return generated;
};

const generateGeminiQuiz = async (
  topic: string,
  count: number,
  difficulty: string,
  apiKey: string
): Promise<QuizQuestion[]> => {
  const modelName = 'gemini-2.5-flash';
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

  const promptText = `
You are an expert financial and economic educator. Create a custom quiz set of ${count} multiple choice questions about "${topic}" in Korean.
The difficulty of the quiz is ${difficulty}.

Return ONLY a JSON array matching this TypeScript schema:
Array<{
  question: string; // The quiz question
  level: string; // "LEVEL 1", "LEVEL 2", or "LEVEL 3" depending on the difficulty
  options: Array<{
    text: string; // Option text
    correct?: boolean; // Set to true for the correct option. Exactly one option must have correct: true.
  }>
}>

Do not include any markdown formatting blocks like \`\`\`json or \`\`\`. Output ONLY the raw JSON string array.
`;

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      contents: [{
        parts: [{
          text: promptText
        }]
      }],
      generationConfig: {
        responseMimeType: "application/json"
      }
    })
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Gemini API Error (${response.status}): ${errText}`);
  }

  const result = await response.json();
  const rawText = result.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!rawText) {
    throw new Error('AI Response is empty');
  }

  let parsed = JSON.parse(rawText.trim());
  if (!Array.isArray(parsed)) {
    if (parsed.questions && Array.isArray(parsed.questions)) {
      parsed = parsed.questions;
    } else {
      throw new Error('Invalid JSON format received from Gemini');
    }
  }

  return parsed.map((item: any, i: number) => {
    return {
      question: item.question,
      level: item.level || `LEVEL ${difficulty === '초급' ? 1 : difficulty === '중급' ? 2 : 3}`,
      options: item.options.map((opt: any) => ({
        text: opt.text,
        correct: !!opt.correct
      })),
      progress: (i + 1) / count,
      current: i + 1,
      total: count
    };
  });
};

const getRank = (currentXp: number) => {
  if (currentXp < 100) return '개미 투자자';
  if (currentXp < 300) return '초보 투자자';
  if (currentXp < 600) return '중수 투자자';
  if (currentXp < 1000) return '고수 투자자';
  return '금융 마스터';
};

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedSet, setSelectedSet] = useState<string>('주식');
  const [selectedLevel, setSelectedLevel] = useState<number>(1);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizContext, setQuizContext] = useState<'concept' | 'challenge' | 'set'>('concept');
  const [newsKeyword, setNewsKeyword] = useState<string>('기준금리');
  const [xp, setXp] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('user_xp');
      return saved ? parseInt(saved, 10) : 50;
    } catch (e) {
      return 50;
    }
  });
  const [floatingXp, setFloatingXp] = useState<{ show: boolean; amount: number }>({ show: false, amount: 0 });
  const [bookmarks, setBookmarks] = useState<BookmarkedNews[]>(() => {
    try {
      const saved = localStorage.getItem('news_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [customQuizzes, setCustomQuizzes] = useState<CustomQuizSet[]>(() => {
    try {
      const saved = localStorage.getItem('custom_quizzes');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  const [pendingSharedQuiz, setPendingSharedQuiz] = useState<CustomQuizSet | null>(null);

  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const shareData = params.get('share');
      if (shareData) {
        // Decode UTF-8 string from Base64
        const decodedString = decodeURIComponent(escape(atob(shareData)));
        const quizSet = JSON.parse(decodedString) as CustomQuizSet;
        if (quizSet && quizSet.name && Array.isArray(quizSet.questions)) {
          setPendingSharedQuiz(quizSet);
        }
      }
    } catch (e) {
      console.error('Failed to import shared quiz:', e);
    }
  }, []);

  const toggleBookmark = (news: BookmarkedNews) => {
    setBookmarks((prev) => {
      const exists = prev.some((item) => item.link === news.link);
      let next;
      if (exists) {
        next = prev.filter((item) => item.link !== news.link);
      } else {
        next = [...prev, { ...news, memo: '' }];
      }
      localStorage.setItem('news_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const updateBookmarkMemo = (link: string, memo: string) => {
    setBookmarks((prev) => {
      const next = prev.map((item) =>
        item.link === link ? { ...item, memo } : item
      );
      localStorage.setItem('news_bookmarks', JSON.stringify(next));
      return next;
    });
  };

  const handleShareQuiz = (quizSet: CustomQuizSet) => {
    try {
      // Create a clean sharing copy (without runtime state modifications)
      const cleanQuizSet = {
        id: quizSet.id,
        name: quizSet.name,
        emoji: quizSet.emoji,
        questions: quizSet.questions.map((q, idx) => ({
          question: q.question,
          level: q.level || `LEVEL ${Math.floor(idx / 3) + 1}`,
          options: q.options,
          progress: (idx + 1) / quizSet.questions.length,
          current: idx + 1,
          total: quizSet.questions.length
        })),
        isCustom: true
      };
      
      const serialized = JSON.stringify(cleanQuizSet);
      const encoded = btoa(unescape(encodeURIComponent(serialized)));
      const shareUrl = `${window.location.origin}${window.location.pathname}?share=${encoded}`;
      
      navigator.clipboard.writeText(shareUrl);
      alert(`'${quizSet.name}' 학습세트 공유 링크가 클립보드에 복사되었습니다!\n친구에게 이 링크를 보내면 나만의 퀴즈가 공유됩니다. 🔗`);
    } catch (e) {
      console.error(e);
      alert('공유 링크 생성에 실패했습니다.');
    }
  };

  const handleDeleteQuiz = (id: string) => {
    setCustomQuizzes((prev) => {
      const next = prev.filter(c => c.id !== id);
      localStorage.setItem('custom_quizzes', JSON.stringify(next));
      return next;
    });
  };


  const handleTabChange = (tab: Tab) => {
    setActiveTab(tab);
    if (tab === 'home') setScreen('home');
    else if (tab === 'learn') {
      setSelectedSet('주식');
      setQuizIndex(0);
      setScreen('setPath');
    } else setScreen('home');
  };

  const goToSetPath = (setName: string) => {
    setSelectedSet(setName);
    setQuizContext('set');      // ← 학습세트 퀴즈임을 표시
    setQuizIndex(0);
    setSelectedAnswer(null);
    setScreen('setPath');
  };

  const goToSetQuiz = () => {
    setSelectedAnswer(null);
    setScreen('setQuiz');
  };

  const goToChallenge = () => {
    setQuizContext('challenge');
    setSelectedAnswer(null);
    setScreen('challenge');
  };

  const goToConceptQuiz = () => {
    setQuizContext('concept');
    setSelectedAnswer(null);
    setScreen('conceptQuiz');
  };

  const handleNextSetQuiz = () => {
    const customSet = customQuizzes.find(c => c.name === selectedSet);
    const quizzes = customSet
      ? customSet.questions
      : selectedSet === '투자자산운용사'
      ? INVEST_QUIZZES[selectedLevel] || []
      : SET_QUIZZES[selectedSet] || [];
    if (quizIndex + 1 < quizzes.length) {
      setQuizIndex(quizIndex + 1);
      setSelectedAnswer(null);
    } else {
      setScreen('quizSuccess');
    }
  };

  const customSet = customQuizzes.find(c => c.name === selectedSet);
  const currentSetQuiz = customSet
    ? customSet.questions[quizIndex] || customSet.questions[0]
    : selectedSet === '투자자산운용사'
    ? (INVEST_QUIZZES[selectedLevel] || [])[quizIndex] || (INVEST_QUIZZES[1] || [])[0]
    : (SET_QUIZZES[selectedSet] || [])[quizIndex] || SET_QUIZZES['주식'][0];

  // ─── Shared Quiz Component ─────────────────────────────────────────────────
  const QuizView = ({
    quiz,
    backScreen,
    onNext,
    backLabel,
  }: {
    quiz: QuizQuestion;
    backScreen: Screen;
    onNext: () => void;
    backLabel?: string;
  }) => (
    <div className="bg-[#f2f0eb] w-full flex flex-col" style={{ minHeight: 840 }}>
      {/* Header */}
      <div className="flex items-center justify-between pb-[24px] pt-[32px] px-[24px] bg-[#f2f0eb]">
        <div className="flex gap-[24px] items-center">
          <button onClick={() => setScreen(backScreen)} className="size-[44px] flex items-center justify-center">
            <span style={{ fontSize: 24, color: '#006241' }}>‹</span>
          </button>
          <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 20, color: '#006241' }}>
            {backLabel || "'기준 금리'"}
          </span>
        </div>
      </div>

      {/* Scrollable body */}
      <div className="flex-1 flex flex-col px-[24px] gap-[32px] pb-[32px]">
        {/* Progress bar */}
        <div className="bg-[rgba(255,255,255,0.5)] h-[6px] rounded-full w-full overflow-hidden">
          <div className="bg-[#006241] h-full rounded-full transition-all" style={{ width: `${quiz.progress * 100}%` }} />
        </div>

        {/* Level + Question */}
        <div className="flex flex-col gap-[20px]">
          <div className="bg-[#d4e9e2] px-[12px] py-[4px] rounded-full self-start">
            <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 14, color: '#006241' }}>{quiz.level}</span>
          </div>
          <div style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 350, fontSize: 22, color: '#212121', lineHeight: '34px' }}>
            {quiz.question}
          </div>
        </div>

        {/* Options */}
        <div className="flex flex-col gap-[16px]">
          {quiz.options.map((opt, i) => {
            const isSelected = selectedAnswer === i;
            const showResult = selectedAnswer !== null;
            const isCorrect = opt.correct;
            let borderColor = 'transparent';
            let bgColor = '#fff';
            if (showResult && isCorrect) { borderColor = '#006241'; }
            if (showResult && isSelected && !isCorrect) { borderColor = '#ef4444'; bgColor = '#fff5f5'; }

            return (
              <button
                key={i}
                onClick={() => {
                  if (selectedAnswer === null) {
                    setSelectedAnswer(i);
                    if (opt.correct) {
                      const amount = 5;
                      setXp((prev) => {
                        const next = prev + amount;
                        localStorage.setItem('user_xp', next.toString());
                        return next;
                      });
                      setFloatingXp({ show: true, amount });
                      setTimeout(() => {
                        setFloatingXp({ show: false, amount: 0 });
                      }, 1200);
                    }
                  }
                }}
                className="rounded-[12px] min-h-[72px] flex items-center p-[20px] text-left w-full"
                style={{ border: `2px solid ${borderColor}`, background: bgColor, boxShadow: '0px 4px 6px rgba(0,0,0,0.05)' }}
              >
                <div className="mr-[20px] shrink-0">
                  {showResult && isCorrect ? (
                    <div className="bg-[#006241] rounded-full size-[32px] flex items-center justify-center">
                      <span style={{ fontSize: 14, color: '#fff' }}>✓</span>
                    </div>
                  ) : showResult && isSelected && !isCorrect ? (
                    <div className="rounded-full size-[32px] flex items-center justify-center" style={{ border: '2px solid #ef4444' }}>
                      <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 14, color: '#ef4444' }}>{i + 1}</span>
                    </div>
                  ) : (
                    <div className="rounded-full size-[32px] flex items-center justify-center border-2 border-[#e5e7eb]">
                      <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 14, color: '#6b6b6b' }}>{i + 1}</span>
                    </div>
                  )}
                </div>
                <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: isCorrect && showResult ? 500 : 350, fontSize: 16, color: '#212121', lineHeight: '24px' }}>
                  {opt.text}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-[24px] pb-[40px] flex flex-col gap-[16px] items-center">
        <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 500, fontSize: 14, color: '#6b6b6b', letterSpacing: '1.4px' }}>
          {`< ${quiz.current} / ${quiz.total} >`}
        </span>
        <button
          onClick={onNext}
          disabled={selectedAnswer === null}
          className="rounded-full w-full py-[20px] flex items-center justify-center transition-all"
          style={{
            background: selectedAnswer !== null ? '#006241' : '#d1d5db',
            boxShadow: selectedAnswer !== null ? '0px 10px 15px -3px rgba(0,98,65,0.2)' : 'none',
          }}
        >
          <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 16, color: '#fff' }}>
            {selectedAnswer !== null ? '다음 문제 풀기' : '답을 선택해주세요'}
          </span>
        </button>
      </div>
    </div>
  );

  // ─── Dashboard ─────────────────────────────────────────────────────────────
  const DashboardScreen = () => (
    <div className="bg-[#f2f0eb] flex flex-col w-full" style={{ minHeight: 840, paddingBottom: 80 }}>
      {/* Header */}
      <div className="flex items-center justify-between pb-[16px] pt-[32px] px-[24px]">
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 24, color: '#006241', letterSpacing: '-0.16px', lineHeight: '30px' }}>
          안녕하세요 서연 님!
        </span>
        <div className="size-[48px] bg-[rgba(0,98,65,0.08)] rounded-full flex items-center justify-center">
          <span style={{ fontSize: 22 }}>🌱</span>
        </div>
      </div>

      {/* XP Card */}
      <div className="px-[24px]">
        <div className="bg-[#faf6ee] rounded-[12px] p-[20px] flex flex-col gap-[12px] border border-[#f3f4f6] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]">
          <div className="flex items-end justify-between">
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#000', letterSpacing: '-0.16px' }}>
              Lv.{Math.floor(xp / 100) + 1} · {xp % 100}/100 XP
            </span>
            <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 15, color: '#00754a', letterSpacing: '-0.16px' }}>
              {getRank(xp)}
            </span>
          </div>
          <div className="bg-white h-[12px] rounded-full overflow-hidden">
            <div className="bg-[#00754a] h-full rounded-full transition-all duration-500" style={{ width: `${xp % 100}%` }} />
          </div>
        </div>
      </div>

      {/* Today Cards */}
      <div className="flex flex-col gap-[16px] pt-[32px] px-[24px]">
        {/* 오늘의 챌린지 — 전날 개념 심화문제 */}
        <button
          onClick={goToChallenge}
          className="bg-white rounded-[12px] w-full text-left shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center justify-between p-[24px]">
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 28, color: '#006241', letterSpacing: '-0.16px', lineHeight: '35px' }}>오늘의</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 28, color: '#006241', letterSpacing: '-0.16px', lineHeight: '35px' }}>챌린지</div>
              <div className="mt-[8px] bg-[#d4e9e2] px-[10px] py-[2px] rounded-full self-start inline-block">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, color: '#006241' }}>전날 개념 심화문제</span>
              </div>
            </div>
            <div className="size-[52px] flex items-center justify-center">
              <span style={{ fontSize: 36 }}>🏆</span>
            </div>
          </div>
        </button>

        {/* 오늘의 개념 — 새 개념 */}
        <button
          onClick={() => setScreen('concept')}
          className="bg-white rounded-[12px] w-full text-left shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] active:scale-[0.98] transition-transform"
        >
          <div className="flex items-center justify-between p-[24px]">
            <div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 22, color: '#006241', letterSpacing: '-0.16px', lineHeight: '27.5px' }}>오늘의 개념</div>
              <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 24, color: '#006241', letterSpacing: '-0.16px', lineHeight: '30px' }}>'기준 금리'</div>
              <div className="mt-[8px] bg-[rgba(0,98,65,0.08)] px-[10px] py-[2px] rounded-full self-start inline-block">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 11, color: '#006241' }}>오늘의 새로운 개념 학습</span>
              </div>
            </div>
            <div className="size-[52px] flex items-center justify-center">
              <span style={{ fontSize: 36 }}>📖</span>
            </div>
          </div>
        </button>
      </div>

      {/* AI Quiz Creator Banner */}
      <div className="px-[24px] pt-[24px]">
        <button
          onClick={() => setScreen('createQuiz')}
          className="w-full bg-gradient-to-r from-[#006241] to-[#00754a] rounded-[16px] text-left p-[20px] shadow-[0px_10px_20px_rgba(0,98,65,0.15)] relative overflow-hidden transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
        >
          {/* Subtle background graphics */}
          <div className="absolute right-[-10px] bottom-[-10px] text-[80px] opacity-15 pointer-events-none select-none">⚡</div>
          
          <div className="flex justify-between items-center relative z-10">
            <div className="flex flex-col gap-[4px] max-w-[75%]">
              <span className="bg-[#d4e9e2] text-[#006241] text-[11px] font-bold px-[8px] py-[2px] rounded-full self-start">
                AI 신기능 ✨
              </span>
              <h3 style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff', marginTop: 4 }}>
                나만의 AI 퀴즈 만들기
              </h3>
              <p style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 400, fontSize: 13, color: 'rgba(255,255,255,0.85)', lineHeight: '18px' }}>
                주제만 입력하면 AI가 맞춤형 퀴즈를 출제하고 대시보드에 업로드해 드려요!
              </p>
            </div>
            <div className="size-[50px] bg-[rgba(255,255,255,0.2)] rounded-full flex items-center justify-center text-[28px] shadow-[inset_0px_1px_3px_rgba(255,255,255,0.3)]">
              🪄
            </div>
          </div>
        </button>
      </div>

      {/* 학습세트 */}
      <div className="flex flex-col gap-[24px] pt-[40px] pb-[16px] px-[24px]">
        <div>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 24, color: '#000', letterSpacing: '-0.16px', lineHeight: '36px' }}>학습세트</span>
          <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 13, color: '#9ca3af', marginTop: 2 }}>세트를 선택해 퀴즈 경로를 시작하세요</p>
        </div>
        <div className="flex flex-col gap-[12px]">
          {[
            { name: '주식', emoji: '📈', count: 8 },
            { name: '채권', emoji: '📜', count: 8 },
            { name: '미시경제', emoji: '🏛️', count: 6 },
            { name: '투자자산운용사', emoji: '🎖️', count: 300, isMultiLevel: true },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => {
                if (item.isMultiLevel) {
                  setSelectedSet(item.name);
                  setScreen('levelSelect');
                } else {
                  goToSetPath(item.name);
                }
              }}
              className="bg-white rounded-[16px] border-2 border-black flex items-center justify-between px-[24px] py-[18px] active:scale-[0.98] transition-transform cursor-pointer"
            >
              <div className="flex items-center gap-[12px]">
                <span style={{ fontSize: 24 }}>{item.emoji}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#000', letterSpacing: '-0.16px' }}>{item.name}</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 13, color: '#9ca3af' }}>
                  {item.isMultiLevel ? '30레벨 / 300문제' : `${item.count}문제`}
                </span>
                <span style={{ fontSize: 16, color: '#9ca3af' }}>›</span>
              </div>
            </button>
          ))}
        </div>

        {/* 나만의 학습세트 리스트 */}
        {customQuizzes.length > 0 && (
          <div className="flex flex-col gap-[16px] pt-[16px] border-t border-[rgba(0,0,0,0.05)]">
            <div className="flex items-center justify-between">
              <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#006241' }}>
                나만의 AI 학습세트 ({customQuizzes.length})
              </span>
            </div>
            <div className="flex flex-col gap-[12px]">
              {customQuizzes.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[16px] border-2 border-[#00754a] flex items-center justify-between px-[20px] py-[16px] relative shadow-[0px_4px_10px_rgba(0,98,65,0.03)] transition-all hover:scale-[1.01]"
                >
                  <button
                    onClick={() => {
                      goToSetPath(item.name);
                    }}
                    className="flex-1 flex items-center gap-[12px] text-left cursor-pointer"
                  >
                    <span style={{ fontSize: 24 }}>{item.emoji}</span>
                    <div className="flex flex-col">
                      <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#000' }}>
                        {item.name}
                      </span>
                      <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 500, fontSize: 12, color: '#00754a', marginTop: 2 }}>
                        문제 {item.questions.length}개 · AI 생성
                      </span>
                    </div>
                  </button>
                  
                  {/* Action buttons */}
                  <div className="flex items-center gap-[8px] ml-[8px]">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleShareQuiz(item);
                      }}
                      title="공유하기"
                      className="size-[36px] rounded-full bg-[#f2f0eb] flex items-center justify-center text-[#00754a] hover:bg-[#d4e9e2] active:scale-[0.9] transition-all cursor-pointer"
                    >
                      🔗
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (confirm(`'${item.name}' 학습세트를 삭제하시겠습니까?`)) {
                          handleDeleteQuiz(item.id);
                        }
                      }}
                      title="삭제하기"
                      className="size-[36px] rounded-full bg-[#fff5f5] flex items-center justify-center text-[#ef4444] hover:bg-[#ffe2e2] active:scale-[0.9] transition-all cursor-pointer"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // ─── 오늘의 개념 상세 ─────────────────────────────────────────────────────
  const ConceptScreen = () => (
    <div className="w-full flex flex-col" style={{ minHeight: 840, background: '#f2f0eb' }}>
      <div className="bg-white h-[72px] flex items-center justify-between px-[16px] sticky top-0 z-10 shadow-[0px_4px_10px_-2px_rgba(0,0,0,0.05)] shrink-0">
        <div className="flex gap-[16px] items-center">
          <button onClick={() => setScreen('home')} className="size-[30px] flex items-center justify-center">
            <span style={{ fontSize: 22 }}>‹</span>
          </button>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 24, color: '#006241' }}>기준 금리</span>
        </div>
        <div className="bg-[rgba(0,98,65,0.08)] px-[10px] py-[4px] rounded-full">
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: '#006241' }}>새 개념</span>
        </div>
      </div>

      <div className="flex flex-col gap-[24px] px-[16px] py-[32px] pb-[140px] flex-1">
        <div className="flex flex-col gap-[14px]">
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 22, color: '#006241', lineHeight: '33px' }}>기준 금리란 무엇일까요?</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 19, color: '#000', lineHeight: '30.88px' }}>
            한 나라의 금리를 세울 때 <span style={{ fontWeight: 700, color: '#00754a', textDecoration: 'underline' }}>표준이 되는 금리</span>를 말합니다. 한국은행의 금융통화위원회에서 결정하며, 경제 상황에 따라 올리거나 내립니다.
          </div>
        </div>
        <div className="bg-[#1e1e1e] rounded-[12px] p-[24px] flex flex-col gap-[11px]">
          <div className="flex gap-[8px] items-center">
            <span style={{ fontSize: 15 }}>📌</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 14, color: '#9ca3af', letterSpacing: '0.7px', textTransform: 'uppercase' }}>핵심 포인트</span>
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#fff', lineHeight: '27.5px' }}>기준금리가 오르면 시중 금리도 함께 올라 저축은 늘고 소비는 줄어듭니다.</div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#d1d5db', lineHeight: '22.5px' }}>물가를 잡기 위해 주로 금리를 인상하며, 경기를 부양할 때는 금리를 인하하는 정책을 펼칩니다.</div>
        </div>
        <div className="flex flex-col gap-[16px]">
          {[
            { icon: '📊', title: '영향을 받는 것들', desc: '대출 이자, 예금 이자, 환율, 그리고 물가 상승률(인플레이션)에 직접적인 영향을 미칩니다.' },
            { icon: '📅', title: '결정 주기', desc: '한국은행은 보통 1년에 8번, 약 6주 간격으로 기준금리를 결정하는 회의를 엽니다.' },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-[12px] border border-[#f3f4f6] drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] p-[20px] flex gap-[16px]">
              <div className="bg-[rgba(0,98,65,0.1)] rounded-full p-[12px] shrink-0 size-[48px] flex items-center justify-center">
                <span style={{ fontSize: 20 }}>{card.icon}</span>
              </div>
              <div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 17, color: '#000', lineHeight: '25.5px' }}>{card.title}</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 15, color: '#4b5563', lineHeight: '23px', marginTop: 4 }}>{card.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-[390px] mx-auto bg-gradient-to-t from-[#f2f0eb] via-[rgba(242,240,235,0.95)] to-[rgba(242,240,235,0)] p-[16px] pt-[40px]">
        <button
          onClick={goToConceptQuiz}
          className="bg-[#00754a] rounded-full w-full h-[56px] flex items-center justify-center gap-[8px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]"
        >
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff' }}>퀴즈 풀기</span>
          <span style={{ color: '#fff', fontSize: 18 }}>›</span>
        </button>
      </div>
    </div>
  );

  // ─── 오늘의 챌린지 (전날 개념 심화문제) ──────────────────────────────────
  const ChallengeScreen = () => (
    <div className="w-full" style={{ background: '#f2f0eb', minHeight: 840 }}>
      {/* 심화문제 intro card */}
      <div className="bg-[#006241] px-[24px] pt-[48px] pb-[32px]">
        <button onClick={() => setScreen('home')} className="flex items-center gap-[8px] mb-[24px]">
          <span style={{ fontSize: 22, color: 'rgba(255,255,255,0.8)' }}>‹</span>
          <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 15, color: 'rgba(255,255,255,0.8)' }}>홈으로</span>
        </button>
        <div className="flex items-start justify-between">
          <div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 13, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.8px', textTransform: 'uppercase', marginBottom: 8 }}>오늘의 챌린지</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 26, color: '#fff', lineHeight: '34px' }}>전날 개념<br />심화문제</div>
            <div className="mt-[12px] bg-[rgba(255,255,255,0.2)] px-[12px] py-[4px] rounded-full inline-block">
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12, color: '#fff' }}>기준 금리 · LEVEL 3</span>
            </div>
          </div>
          <span style={{ fontSize: 48 }}>🏆</span>
        </div>
      </div>

      <QuizView
        quiz={CHALLENGE_QUIZ}
        backScreen="home"
        onNext={() => setScreen('quizSuccess')}
        backLabel="전날 개념 심화"
      />
    </div>
  );

  const SetPathScreen = () => {
    const customSet = customQuizzes.find(c => c.name === selectedSet);
    const quizzes = customSet
      ? customSet.questions
      : selectedSet === '투자자산운용사'
      ? INVEST_QUIZZES[selectedLevel] || []
      : SET_QUIZZES[selectedSet] || [];
    const completedCount = quizIndex;

    return (
      <div className="w-full" style={{ background: '#f2f0eb', minHeight: 840 }}>
        {/* Header */}
        <div className="backdrop-blur-[2px] bg-[rgba(242,240,235,0.95)] flex items-center justify-between px-[24px] pb-[16px] pt-[48px]">
          <button onClick={() => {
            if (selectedSet === '투자자산운용사') {
              setScreen('levelSelect');
            } else {
              setScreen('home');
              setActiveTab('home');
            }
          }} className="bg-white drop-shadow-sm flex items-center justify-center rounded-full size-[44px]">
            <span style={{ fontSize: 20, color: '#00754a' }}>‹</span>
          </button>
          <div className="bg-[#00754a] px-[24px] py-[8px] rounded-full">
            <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', letterSpacing: '-0.35px' }}>
              {selectedSet === '투자자산운용사'
                ? `L${selectedLevel} ${LEVEL_THEMES[selectedLevel]}`
                : selectedSet}
            </span>
          </div>
          <div className="size-[44px]" />
        </div>

        {/* Path game area */}
        <div className="relative px-[24px] py-[16px]" style={{ minHeight: 600 }}>
          {/* Dotted path line */}
          <div className="absolute left-1/2 top-[24px] bottom-[24px] w-[4px] -translate-x-1/2" style={{
            background: 'repeating-linear-gradient(to bottom, #006241 0, #006241 8px, transparent 8px, transparent 20px)',
            opacity: 0.25,
          }} />

          <div className="flex flex-col gap-[48px] relative">
            {quizzes.map((q, i) => {
              const isDone = i < completedCount;
              const isCurrent = i === completedCount;
              const isLocked = i > completedCount;
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className={`flex ${isLeft ? 'justify-start pl-[40px]' : 'justify-end pr-[40px]'}`}>
                  <div className="flex flex-col items-center gap-[8px]">
                    {/* Chapter label */}
                    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] px-[12px] py-[4px] rounded-[8px] border border-[rgba(212,233,226,0.5)]">
                      <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 11, color: '#00754a', letterSpacing: '0.55px', textTransform: 'uppercase' }}>
                        Q {i + 1}
                      </span>
                    </div>
                    {/* Node */}
                    <button
                      onClick={() => { if (!isLocked) { setQuizIndex(i); goToSetQuiz(); } }}
                      disabled={isLocked}
                      className={`rounded-full flex items-center justify-center transition-all ${isCurrent ? 'size-[64px]' : 'size-[56px]'}`}
                      style={{
                        background: isDone ? '#00754a' : isCurrent ? '#00754a' : '#d4e9e2',
                        boxShadow: isCurrent
                          ? '0px 0px 0px 4px white, 0px 8px 24px 0px rgba(0,117,74,0.25)'
                          : isDone
                          ? '0px 0px 0px 4px white, 0px 4px 12px 0px rgba(0,117,74,0.15)'
                          : '0px 0px 0px 4px white, 0px 1px 2px 0px rgba(0,0,0,0.05)',
                      }}
                    >
                      {isDone ? (
                        <span style={{ fontSize: 22, color: '#fff' }}>✓</span>
                      ) : isCurrent ? (
                        <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 22, color: '#fff' }}>{i + 1}</span>
                      ) : (
                        <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#9ca3af' }}>🔒</span>
                      )}
                    </button>
                    {isCurrent && (
                      <div className="bg-[#00754a] px-[16px] py-[6px] rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1)]">
                        <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 12, color: '#fff' }}>START</span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

            {/* Final trophy node */}
            <div className={`flex ${quizzes.length % 2 === 0 ? 'justify-start pl-[40px]' : 'justify-end pr-[40px]'}`}>
              <div className="flex flex-col items-center gap-[8px]">
                <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] px-[12px] py-[4px] rounded-[8px] border border-[rgba(212,233,226,0.5)]">
                  <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 11, color: '#9ca3af', letterSpacing: '0.55px', textTransform: 'uppercase' }}>GOAL</span>
                </div>
                <div
                  className="size-[80px] rounded-full bg-white flex items-center justify-center z-[2]"
                  style={{
                    border: '2px dashed #00754a',
                    boxShadow: '0px 20px 25px -5px rgba(0,0,0,0.1)',
                  }}
                >
                  <span style={{ fontSize: 36 }}>🏆</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* XP Footer */}
        <div className="mx-[24px] mb-[32px] mt-[8px] bg-[#006241] rounded-tl-[40px] rounded-tr-[40px] overflow-hidden relative h-[120px] flex flex-col items-center justify-center gap-[12px]">
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,98,65,0.8)] to-transparent" />
          <div className="relative flex items-center gap-[8px]">
            <span style={{ fontSize: 18 }}>⭐</span>
            <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff' }}>{xp.toLocaleString()} XP</span>
          </div>
          <button className="relative bg-white rounded-full px-[32px] py-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
            <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 16, color: '#00754a' }}>내 자산 현황 보기</span>
          </button>
        </div>
      </div>
    );
  };

  // ─── 학습세트 퀴즈 ──────────────────────────────────────────────────────────
  const SetQuizScreen = () => {
    const customSet = customQuizzes.find(c => c.name === selectedSet);
    const totalQs = customSet 
      ? customSet.questions.length 
      : (SET_QUIZZES[selectedSet] || []).length;

    return (
      <QuizView
        quiz={currentSetQuiz}
        backScreen="setPath"
        onNext={handleNextSetQuiz}
        backLabel={
          selectedSet === '투자자산운용사'
            ? `${selectedSet} L${selectedLevel} ${quizIndex + 1}/10`
            : `${selectedSet} ${quizIndex + 1}/${totalQs}`
        }
      />
    );
  };

  // ─── 퀴즈 성공 ─────────────────────────────────────────────────────────────
  const QuizSuccess = () => (
    <div className="relative w-full" style={{ minHeight: 842, background: '#f2f0eb' }}>
      <div style={{ minHeight: 842 }}>
        <QuizSuccessScreen />
      </div>
      <div
        className="absolute left-0 right-0 bottom-0 pt-[16px] pb-[40px] px-[16px] flex flex-col gap-[12px]"
        style={{ background: 'linear-gradient(to top, #f2f0eb 70%, rgba(242,240,235,0))' }}
      >
        <button
          onClick={() => {
            // 퀴즈 컨텍스트에 따라 뉴스 키워드 결정
            let keyword: string;
            if (quizContext === 'set') {
              keyword = selectedSet;           // 주식 / 채권 / 미시경제
            } else if (quizContext === 'challenge') {
              keyword = '기준금리 부동산';     // 오늘의 챌린지
            } else {
              keyword = '기준금리';            // 오늘의 개념
            }
            setNewsKeyword(keyword);
            setScreen('news');
          }}
          className="bg-[#00754a] rounded-full h-[56px] flex items-center justify-center gap-[8px] drop-shadow-[0px_4px_5px_rgba(0,117,74,0.2)]"
        >
          <span style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 17, color: '#fff' }}>
            {quizContext === 'set'
              ? `${selectedSet} 관련 뉴스 찾아보기`
              : quizContext === 'challenge'
              ? '기준금리 심화 뉴스 찾아보기'
              : '기준금리 관련 뉴스 찾아보기'}
          </span>
          <span style={{ color: '#fff' }}>›</span>
        </button>
        <button
          onClick={() => { setScreen('home'); setActiveTab('home'); }}
          className="rounded-full h-[56px] flex items-center justify-center border border-[#1e1e1e]"
        >
          <span style={{ fontFamily: 'sans-serif', fontWeight: 700, fontSize: 18, color: '#1e1e1e' }}>홈으로 돌아가기</span>
        </button>
      </div>
      <div className="absolute top-0 left-0 right-0 h-[72px] flex items-center px-[16px] bg-[#f2f0eb]">
        <button onClick={() => setScreen('home')} className="flex gap-[12px] items-center">
          <span style={{ fontSize: 20 }}>‹</span>
          <span style={{ fontFamily: 'sans-serif', fontWeight: 600, fontSize: 24, color: '#006241' }}>퀴즈 결과</span>
        </button>
      </div>
    </div>
  );

  // ─── 뉴스 화면 ─────────────────────────────────────────────────────────────
  const NewsScreen = () => (
    <div className="relative w-full" style={{ background: '#f2f0eb', minHeight: 840 }}>
      <div style={{ minHeight: 840 }}>
        <NewsSearchResultsScreen
          keyword={newsKeyword}
          bookmarks={bookmarks}
          onToggleBookmark={toggleBookmark}
          onUpdateMemo={updateBookmarkMemo}
          onBack={() => setScreen('quizSuccess')}
        />
      </div>
    </div>
  );

  // ─── 레벨 선택 화면 (Level Select Screen) ───────────────────────────────────
  const LevelSelectScreen = () => (
    <div className="bg-[#f2f0eb] flex flex-col w-full" style={{ minHeight: 840, paddingBottom: 60 }}>
      {/* Header */}
      <div className="backdrop-blur-[8px] bg-[rgba(242,240,235,0.85)] flex items-center justify-between px-[24px] pb-[16px] pt-[48px] sticky top-0 z-10 border-b border-[rgba(0,0,0,0.05)]">
        <button
          onClick={() => setScreen('home')}
          className="bg-white drop-shadow-sm flex items-center justify-center rounded-full size-[44px] hover:scale-[1.05] transition-transform active:scale-[0.95]"
        >
          <span style={{ fontSize: 20, color: '#00754a' }}>‹</span>
        </button>
        <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#006241' }}>
          투자자산운용사 레벨 선택
        </span>
        <div className="size-[44px]" />
      </div>

      {/* Description Header */}
      <div className="px-[24px] pt-[24px] pb-[16px]">
        <h2 style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 22, color: '#212121', lineHeight: '30px' }}>
          총 30개 레벨 <br/>
          <span style={{ color: '#00754a' }}>금융 마스터 경로</span>를 시작하세요
        </h2>
        <p style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 400, fontSize: 14, color: '#6b6b6b', marginTop: 8 }}>
          각 레벨별 10개의 핵심 개념 문제를 풀고 XP를 획득하세요.
        </p>
      </div>

      {/* Level List */}
      <div className="px-[24px] flex flex-col gap-[14px]">
        {Array.from({ length: 30 }, (_, i) => {
          const levelNum = i + 1;
          const themeName = LEVEL_THEMES[levelNum] || `레벨 ${levelNum}`;

          return (
            <button
              key={levelNum}
              onClick={() => {
                setSelectedLevel(levelNum);
                setQuizIndex(0);
                setQuizContext('set');
                setSelectedAnswer(null);
                setScreen('setPath');
              }}
              className="bg-white rounded-[20px] p-[20px] text-left border border-[rgba(0,98,65,0.08)] shadow-[0px_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0px_8px_20px_rgba(0,98,65,0.06)] active:scale-[0.98] transition-all flex items-center justify-between"
            >
              <div className="flex flex-col gap-[6px] flex-1 pr-[12px]">
                <div className="flex items-center gap-[8px]">
                  <span className="bg-[#d4e9e2] text-[#006241] text-[11px] font-bold px-[8px] py-[2px] rounded-full">
                    LEVEL {levelNum.toString().padStart(2, '0')}
                  </span>
                  <span className="text-[12px] text-gray-400 font-medium">10문제</span>
                </div>
                <h3 style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#1e1e1e', letterSpacing: '-0.3px' }}>
                  {themeName}
                </h3>
              </div>
              <div className="size-[40px] rounded-full bg-[#f2f0eb] flex items-center justify-center text-[#00754a] font-bold text-[18px]">
                ›
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );

  // ─── AI Quiz Builder Screen ────────────────────────────────────────────────
  const CreateQuizScreen = () => {
    const [topic, setTopic] = useState('');
    const [qCount, setQCount] = useState(5);
    const [diff, setDiff] = useState('초급');
    const [apiKeyVal, setApiKeyVal] = useState(() => localStorage.getItem('gemini_api_key') || '');
    const [showApiKey, setShowApiKey] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [previewSet, setPreviewSet] = useState<CustomQuizSet | null>(null);
    const [loadingMessageIdx, setLoadingMessageIdx] = useState(0);

    const loadingMessages = [
      "AI가 입력하신 주제에 관한 금융 데이터베이스를 조회하고 있습니다... 🔍",
      "투자 트렌드와 핵심 개념들을 매핑하는 중입니다... 📊",
      "난이도에 맞춘 문제 난이도 밸런싱을 진행하고 있습니다... ⚖️",
      "매력적인 오답 보기와 정답 해설을 구성하고 있습니다... ✍️",
      "퀴즈 출제가 마무리 단계에 접어들었습니다. 커피 한 잔만 기다려주세요... ☕"
    ];

    useEffect(() => {
      let interval: any;
      if (isGenerating) {
        setLoadingMessageIdx(0);
        interval = setInterval(() => {
          setLoadingMessageIdx((prev) => (prev + 1) % loadingMessages.length);
        }, 2500);
      }
      return () => clearInterval(interval);
    }, [isGenerating]);

    const handleCreate = async () => {
      if (!topic.trim()) {
        alert('주제를 입력해주세요!');
        return;
      }
      
      setIsGenerating(true);
      setError(null);
      setPreviewSet(null);

      if (apiKeyVal.trim()) {
        localStorage.setItem('gemini_api_key', apiKeyVal.trim());
      } else {
        localStorage.removeItem('gemini_api_key');
      }

      try {
        let qs: QuizQuestion[] = [];
        if (apiKeyVal.trim()) {
          qs = await generateGeminiQuiz(topic.trim(), qCount, diff, apiKeyVal.trim());
        } else {
          await new Promise((resolve) => setTimeout(resolve, 3500));
          qs = generateSimulatedQuiz(topic.trim(), qCount, diff);
        }

        const emojis = ['💵', '💳', '📊', '📈', '📉', '🏛️', '🪙', '💎', '🔑', '🚀'];
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];

        const newSet: CustomQuizSet = {
          id: Date.now().toString(),
          name: topic.trim(),
          emoji: randomEmoji,
          questions: qs,
          isCustom: true
        };

        setPreviewSet(newSet);
      } catch (err: any) {
        console.error(err);
        setError(err.message || '퀴즈 생성 중 오류가 발생했습니다.');
      } finally {
        setIsGenerating(false);
      }
    };

    const handleSave = () => {
      if (!previewSet) return;

      if (customQuizzes.some((q) => q.name.toLowerCase() === previewSet.name.toLowerCase())) {
        alert('이미 같은 이름의 퀴즈 세트가 존재합니다! 다른 주제를 입력하시거나 기존 세트를 삭제해주세요.');
        return;
      }

      setCustomQuizzes((prev) => {
        const next = [...prev, previewSet];
        localStorage.setItem('custom_quizzes', JSON.stringify(next));
        return next;
      });

      alert(`'${previewSet.name}' 퀴즈 세트가 성공적으로 대시보드에 업로드되었습니다! 🎉`);
      setScreen('home');
      setActiveTab('home');
    };

    return (
      <div className="bg-[#f2f0eb] flex flex-col w-full min-h-screen pb-[60px]" style={{ minHeight: 840 }}>
        {/* Header */}
        <div className="backdrop-blur-[8px] bg-[rgba(242,240,235,0.85)] flex items-center justify-between px-[24px] pb-[16px] pt-[48px] sticky top-0 z-10 border-b border-[rgba(0,0,0,0.05)]">
          <button
            onClick={() => setScreen('home')}
            className="bg-white drop-shadow-sm flex items-center justify-center rounded-full size-[44px] hover:scale-[1.05] transition-transform active:scale-[0.95]"
          >
            <span style={{ fontSize: 20, color: '#00754a' }}>‹</span>
          </button>
          <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#006241' }}>
            나만의 AI 퀴즈 제작소
          </span>
          <div className="size-[44px]" />
        </div>

        {isGenerating ? (
          <div className="flex-1 flex flex-col items-center justify-center px-[32px] gap-[32px] py-[80px]">
            <div className="relative">
              <div className="size-[100px] rounded-full border-4 border-[#d4e9e2] border-t-[#00754a] animate-spin" />
              <div className="absolute inset-0 flex items-center justify-center text-[36px] animate-pulse">
                ☕
              </div>
            </div>
            <div className="text-center flex flex-col gap-[12px]">
              <h3 style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 22, color: '#006241' }}>
                AI가 문제를 출제하는 중
              </h3>
              <p 
                key={loadingMessageIdx}
                className="text-[15px] text-gray-500 font-medium leading-[22px] min-h-[44px] max-w-[280px] mx-auto"
                style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
              >
                {loadingMessages[loadingMessageIdx]}
              </p>
            </div>
          </div>
        ) : previewSet ? (
          <div className="px-[24px] pt-[24px] flex flex-col gap-[24px]">
            <div className="bg-white rounded-[20px] p-[24px] border border-[rgba(0,98,65,0.08)] shadow-[0px_10px_25px_rgba(0,0,0,0.03)] flex flex-col gap-[16px]">
              <div className="flex items-center gap-[12px]">
                <span className="text-[40px]">{previewSet.emoji}</span>
                <div>
                  <h2 className="text-[22px] font-bold text-[#1e1e1e]">{previewSet.name}</h2>
                  <span className="text-[12px] text-[#00754a] font-bold bg-[#d4e9e2] px-[8px] py-[2px] rounded-full mt-[4px] inline-block">
                    총 {previewSet.questions.length}문제 · {diff} 난이도
                  </span>
                </div>
              </div>
              
              <div className="border-t border-[rgba(0,0,0,0.05)] pt-[16px]">
                <h4 className="text-gray-400 font-bold text-[13px] tracking-[0.5px] uppercase mb-[12px]">출제 문제 미리보기</h4>
                <div className="flex flex-col gap-[12px] max-h-[300px] overflow-y-auto pr-[4px]">
                  {previewSet.questions.map((q, idx) => (
                    <div key={idx} className="bg-[#f9fafb] border border-gray-100 rounded-[12px] p-[16px] flex flex-col gap-[8px]">
                      <div className="flex items-center gap-[8px]">
                        <span className="text-[#00754a] font-bold text-[13px]">Q{idx + 1}</span>
                        <span className="text-gray-400 text-[11px] font-bold bg-white border border-gray-200 px-[6px] py-[1px] rounded">
                          {q.level}
                        </span>
                      </div>
                      <p className="text-[#1e1e1e] font-medium text-[15px] leading-[22px]">{q.question}</p>
                      <div className="mt-[4px] pl-[8px] border-l-2 border-[#00754a]">
                        <span className="text-[12px] text-gray-400">정답: </span>
                        <span className="text-[13px] text-[#00754a] font-bold">{q.options.find(o => o.correct)?.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-[12px] mt-[12px]">
              <button
                onClick={handleSave}
                className="w-full bg-[#00754a] text-white py-[18px] rounded-full font-bold text-[16px] shadow-[0px_8px_16px_rgba(0,117,74,0.25)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-[8px]"
              >
                📥 대시보드에 업로드하고 공유하기
              </button>
              <button
                onClick={() => setPreviewSet(null)}
                className="w-full bg-white text-gray-700 border border-gray-300 py-[18px] rounded-full font-bold text-[16px] hover:bg-gray-50 active:scale-[0.99] transition-all cursor-pointer"
              >
                🔄 다시 만들기
              </button>
            </div>
          </div>
        ) : (
          <div className="px-[24px] pt-[24px] flex flex-col gap-[24px]">
            <div className="bg-white rounded-[20px] p-[24px] border border-[rgba(0,98,65,0.08)] shadow-[0px_10px_25px_rgba(0,0,0,0.03)] flex flex-col gap-[20px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[15px] font-bold text-[#1e1e1e] flex items-center gap-[6px]">
                  <span>💡</span> 어떤 주제로 퀴즈를 만들까요?
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="예: 부동산 대출 기초, 비트코인 이해, 세금 꿀팁"
                  className="w-full px-[18px] py-[16px] border border-gray-200 rounded-[12px] focus:outline-none focus:border-[#00754a] text-[16px] bg-[#f9fafb]"
                />
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[15px] font-bold text-[#1e1e1e]">
                  📝 문제 개수 선택
                </label>
                <div className="grid grid-cols-3 gap-[10px]">
                  {[5, 8, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setQCount(num)}
                      className={`py-[14px] rounded-[12px] font-bold text-[15px] border transition-all cursor-pointer ${
                        qCount === num
                          ? 'bg-[#d4e9e2] text-[#006241] border-[#00754a]'
                          : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {num}문제
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <label className="text-[15px] font-bold text-[#1e1e1e]">
                  📊 난이도 설정
                </label>
                <div className="grid grid-cols-3 gap-[10px]">
                  {['초급', '중급', '고급'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setDiff(lvl)}
                      className={`py-[14px] rounded-[12px] font-bold text-[15px] border transition-all cursor-pointer ${
                        diff === lvl
                          ? 'bg-[#d4e9e2] text-[#006241] border-[#00754a]'
                          : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
                      }`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-[rgba(0,0,0,0.05)] pt-[16px] flex flex-col gap-[12px]">
                <button
                  type="button"
                  onClick={() => setShowApiKey(!showApiKey)}
                  className="flex items-center justify-between text-[14px] text-gray-500 font-semibold cursor-pointer"
                >
                  <span className="flex items-center gap-[6px]">
                    ⚙️ Gemini API 키 설정 {apiKeyVal ? '🟢' : '⚪'}
                  </span>
                  <span>{showApiKey ? '▼' : '▶'}</span>
                </button>

                {showApiKey && (
                  <div className="flex flex-col gap-[8px] bg-[#f9fafb] border border-gray-100 rounded-[12px] p-[16px]">
                    <p className="text-[12px] text-gray-500 leading-[18px]">
                      본인의 Gemini API 키를 입력하시면 실시간 AI로 커스텀 문제를 제작합니다. 입력하지 않으시면 고품질 내장 시뮬레이션 모드로 즉시 자동 생성됩니다.
                    </p>
                    <input
                      type="password"
                      value={apiKeyVal}
                      onChange={(e) => setApiKeyVal(e.target.value)}
                      placeholder="AI_KEY_abc123..."
                      className="w-full px-[14px] py-[12px] border border-gray-200 rounded-[8px] focus:outline-none focus:border-[#00754a] text-[14px] bg-white mt-[4px]"
                    />
                  </div>
                )}
              </div>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 rounded-[12px] p-[16px] text-[14px] font-medium leading-[20px]">
                ⚠️ {error}
              </div>
            )}

            <button
              onClick={handleCreate}
              className="w-full bg-[#006241] hover:bg-[#00754a] text-white py-[18px] rounded-full font-bold text-[17px] shadow-[0px_10px_20px_rgba(0,98,65,0.2)] hover:scale-[1.01] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-[8px] mt-[12px]"
            >
              🪄 AI로 문제 만들기 시작
            </button>
          </div>
        )}
      </div>
    );
  };

  // ─── Render ────────────────────────────────────────────────────────────────
  const renderScreen = () => {
    switch (screen) {
      case 'home':        return <DashboardScreen />;
      case 'concept':     return <ConceptScreen />;
      case 'conceptQuiz': return <QuizView quiz={CONCEPT_QUIZ} backScreen="concept" onNext={() => setScreen('quizSuccess')} backLabel="'기준 금리' 1/10" />;
      case 'challenge':   return <ChallengeScreen />;
      case 'setPath':     return <SetPathScreen />;
      case 'setQuiz':     return <SetQuizScreen />;
      case 'quizSuccess': return <QuizSuccess />;
      case 'news':        return <NewsScreen />;
      case 'levelSelect': return <LevelSelectScreen />;
      case 'createQuiz':  return <CreateQuizScreen />;
      default:            return <DashboardScreen />;
    }
  };

  return (
    <div className="bg-[#f2f0eb] w-full min-h-screen overflow-y-auto">
      <div className="max-w-[390px] mx-auto relative">
        {renderScreen()}

        {/* Floating XP Animation Overlay */}
        {floatingXp.show && (
          <div className="fixed top-[120px] left-1/2 -translate-x-1/2 bg-[#00754a] text-white px-[20px] py-[10px] rounded-full shadow-[0px_10px_25px_rgba(0,117,74,0.35)] flex items-center gap-[8px] z-[9999] animate-bounce border border-[rgba(255,255,255,0.2)]">
            <span style={{ fontSize: 20 }}>⭐</span>
            <span className="font-bold text-[15px]" style={{ fontFamily: 'Pretendard, Noto Sans KR, sans-serif' }}>
              +{floatingXp.amount} XP 획득!
            </span>
          </div>
        )}

        {/* Shared Quiz Import Modal */}
        {pendingSharedQuiz && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[10000] flex items-center justify-center p-[24px]">
            <div className="bg-[#faf6ee] rounded-[24px] border border-[rgba(0,98,65,0.1)] p-[28px] max-w-[340px] w-full flex flex-col gap-[20px] shadow-[0px_20px_50px_rgba(0,0,0,0.3)] text-center animate-pulse">
              <div className="size-[70px] bg-[#d4e9e2] rounded-full flex items-center justify-center text-[36px] mx-auto shadow-[0px_4px_10px_rgba(0,98,65,0.1)]">
                {pendingSharedQuiz.emoji || '🎁'}
              </div>
              
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-bold text-[20px] text-[#006241]" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                  공유받은 학습세트 도착!
                </h3>
                <p className="text-[14px] text-gray-500 font-medium leading-[20px]" style={{ fontFamily: 'Noto Sans KR, sans-serif' }}>
                  친구로부터 <span className="font-bold text-[#1e1e1e]">'{pendingSharedQuiz.name}'</span> 퀴즈 세트 (총 {pendingSharedQuiz.questions?.length}문제)를 공유받았습니다.
                </p>
              </div>

              <div className="flex flex-col gap-[10px] mt-[8px]">
                <button
                  onClick={() => {
                    setCustomQuizzes((prev) => {
                      if (prev.some((q) => q.name.toLowerCase() === pendingSharedQuiz.name.toLowerCase())) {
                        alert('이미 동일한 이름의 학습 세트가 존재합니다.');
                        return prev;
                      }
                      const next = [...prev, pendingSharedQuiz];
                      localStorage.setItem('custom_quizzes', JSON.stringify(next));
                      return next;
                    });
                    
                    alert(`'${pendingSharedQuiz.name}' 세트가 추가되었습니다! 🎉`);
                    setPendingSharedQuiz(null);
                    
                    const newUrl = window.location.origin + window.location.pathname;
                    window.history.replaceState({}, document.title, newUrl);
                    
                    setScreen('home');
                    setActiveTab('home');
                  }}
                  className="w-full bg-[#00754a] text-white py-[16px] rounded-full font-bold text-[15px] shadow-[0px_6px_12px_rgba(0,117,74,0.2)] cursor-pointer"
                  style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                >
                  대시보드에 추가하기
                </button>
                <button
                  onClick={() => {
                    setPendingSharedQuiz(null);
                    const newUrl = window.location.origin + window.location.pathname;
                    window.history.replaceState({}, document.title, newUrl);
                  }}
                  className="w-full bg-white text-gray-500 border border-gray-200 py-[16px] rounded-full font-semibold text-[15px] cursor-pointer"
                  style={{ fontFamily: 'Noto Sans KR, sans-serif' }}
                >
                  거절하기
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
