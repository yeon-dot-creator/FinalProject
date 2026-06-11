import { useState } from "react";
import PathScreenHighFidelity from "../imports/PathScreenHighFidelity/index";
import QuizSuccessScreen from "../imports/QuizSuccessScreen/index";
import NewsSearchResultsScreen from "../imports/NewsSearchResultsScreen/index";
type Screen =
  | 'home'
  | 'concept'          // 오늘의 개념 (새 개념 학습)
  | 'conceptQuiz'      // 오늘의 개념 → 퀴즈
  | 'challenge'        // 오늘의 챌린지 (전날 개념 심화문제)
  | 'setPath'          // 학습세트 → 게임 경로
  | 'setQuiz'          // 학습세트 → 퀴즈 풀기
  | 'quizSuccess'
  | 'news';

export interface BookmarkedNews {
  title: string;
  link: string;
  description: string;
  source: string;
  pubDate: string;
  image?: string;
  memo?: string;
}


type Tab = 'home' | 'learn' | 'stats' | 'profile';

interface QuizQuestion {
  question: string;
  level: string;
  options: { text: string; correct?: boolean }[];
  progress: number; // 0~1
  current: number;
  total: number;
}

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

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [selectedSet, setSelectedSet] = useState<string>('주식');
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [quizContext, setQuizContext] = useState<'concept' | 'challenge' | 'set'>('concept');
  const [newsKeyword, setNewsKeyword] = useState<string>('기준금리');
  const [bookmarks, setBookmarks] = useState<BookmarkedNews[]>(() => {
    try {
      const saved = localStorage.getItem('news_bookmarks');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

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
    const quizzes = SET_QUIZZES[selectedSet] || [];
    if (quizIndex + 1 < quizzes.length) {
      setQuizIndex(quizIndex + 1);
      setSelectedAnswer(null);
    } else {
      setScreen('quizSuccess');
    }
  };

  const currentSetQuiz = (SET_QUIZZES[selectedSet] || [])[quizIndex] || SET_QUIZZES['주식'][0];

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
                onClick={() => { if (selectedAnswer === null) setSelectedAnswer(i); }}
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
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 18, color: '#000', letterSpacing: '-0.16px' }}>Xp. 50/100</span>
            <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16, color: '#000', letterSpacing: '-0.16px' }}>개미 투자자</span>
          </div>
          <div className="bg-white h-[12px] rounded-full overflow-hidden">
            <div className="bg-[#00754a] h-full w-1/2 rounded-full" />
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
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => goToSetPath(item.name)}
              className="bg-white rounded-[16px] border-2 border-black flex items-center justify-between px-[24px] py-[18px] active:scale-[0.98] transition-transform"
            >
              <div className="flex items-center gap-[12px]">
                <span style={{ fontSize: 24 }}>{item.emoji}</span>
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 20, color: '#000', letterSpacing: '-0.16px' }}>{item.name}</span>
              </div>
              <div className="flex items-center gap-[8px]">
                <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: 13, color: '#9ca3af' }}>{item.count}문제</span>
                <span style={{ fontSize: 16, color: '#9ca3af' }}>›</span>
              </div>
            </button>
          ))}
        </div>
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

  // ─── 학습세트 Path Screen ─────────────────────────────────────────────────
  const SetPathScreen = () => {
    const quizzes = SET_QUIZZES[selectedSet] || [];
    const completedCount = quizIndex;

    return (
      <div className="w-full" style={{ background: '#f2f0eb', minHeight: 840 }}>
        {/* Header */}
        <div className="backdrop-blur-[2px] bg-[rgba(242,240,235,0.95)] flex items-center justify-between px-[24px] pb-[16px] pt-[48px]">
          <button onClick={() => { setScreen('home'); setActiveTab('home'); }} className="bg-white drop-shadow-sm flex items-center justify-center rounded-full size-[44px]">
            <span style={{ fontSize: 20, color: '#00754a' }}>‹</span>
          </button>
          <div className="bg-[#00754a] px-[24px] py-[8px] rounded-full">
            <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 14, color: '#fff', letterSpacing: '-0.35px' }}>{selectedSet}</span>
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
            <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 18, color: '#fff' }}>2,450 XP</span>
          </div>
          <button className="relative bg-white rounded-full px-[32px] py-[12px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1)]">
            <span style={{ fontFamily: 'Noto Sans KR, sans-serif', fontWeight: 700, fontSize: 16, color: '#00754a' }}>내 자산 현황 보기</span>
          </button>
        </div>
      </div>
    );
  };

  // ─── 학습세트 퀴즈 ──────────────────────────────────────────────────────────
  const SetQuizScreen = () => (
    <QuizView
      quiz={currentSetQuiz}
      backScreen="setPath"
      onNext={handleNextSetQuiz}
      backLabel={`${selectedSet} ${quizIndex + 1}/${(SET_QUIZZES[selectedSet] || []).length}`}
    />
  );

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
      default:            return <DashboardScreen />;
    }
  };

  return (
    <div className="bg-[#f2f0eb] w-full min-h-screen overflow-y-auto">
      <div className="max-w-[390px] mx-auto relative">
        {renderScreen()}
      </div>
    </div>
  );
}
