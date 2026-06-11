import React, { useState } from "react";
import { Bookmark, Search, ChevronLeft, ExternalLink, TrendingUp, PenLine, Check, X } from "lucide-react";
import { BookmarkedNews } from "../../app/App";

// ─── 이미지 임포트 (북마크 썸네일용 유지) ────────────────────────────────────
import img1 from "./8522850b86a7b4798eb65e51fd9b36c97cb0f86f.png";
import img2 from "./11b9ce52ab3157a62a0b9ad73d376820536e594f.png";
import img3 from "./e490c550f46297c4fdd4594ff2b211c541b9ac59.png";
import img4 from "./f6ed8a2a30c78b3829fcfdf2810b160c673b170a.png";
const IMAGES = [img1, img2, img3, img4];

// ─── 키워드별 검색어 칩 데이터 ───────────────────────────────────────────────
interface SearchChip {
  label: string;
  query: string;
  emoji: string;
  description: string;
}

const KEYWORD_CHIPS: Record<string, SearchChip[]> = {
  "기준금리": [
    { label: "기준금리 인하", query: "기준금리 인하", emoji: "📉", description: "금리 인하 결정 및 배경" },
    { label: "기준금리 인상", query: "기준금리 인상", emoji: "📈", description: "금리 인상이 경제에 미치는 영향" },
    { label: "기준금리 동결", query: "기준금리 동결 한국은행", emoji: "⏸️", description: "한국은행의 동결 결정 배경" },
    { label: "기준금리 전망", query: "기준금리 전망 2025", emoji: "🔭", description: "향후 금리 방향 전문가 예측" },
    { label: "기준금리 부동산", query: "기준금리 부동산 영향", emoji: "🏠", description: "금리가 집값에 미치는 영향" },
    { label: "기준금리 대출", query: "기준금리 대출이자 변동", emoji: "💳", description: "대출이자 변동 계산법" },
    { label: "한국은행 금통위", query: "한국은행 금융통화위원회", emoji: "🏦", description: "금통위 회의 결과 및 일정" },
    { label: "미국 연준 금리", query: "미 연준 기준금리 결정", emoji: "🇺🇸", description: "연준 금리 결정의 국내 파급효과" },
  ],
  "기준금리 부동산": [
    { label: "기준금리 부동산", query: "기준금리 부동산 영향", emoji: "🏠", description: "금리와 집값의 상관관계" },
    { label: "아파트 대출금리", query: "아파트 주택담보대출 금리", emoji: "🏢", description: "주담대 금리 현황 및 비교" },
    { label: "부동산 전망", query: "부동산 시장 전망 2025", emoji: "📊", description: "하반기 부동산 시장 예측" },
    { label: "고금리 내집마련", query: "고금리 내집마련 전략", emoji: "🔑", description: "금리 인상기 내 집 마련 전략" },
    { label: "DSR 규제", query: "DSR 대출규제 부동산", emoji: "📋", description: "대출 규제가 거래에 미치는 영향" },
    { label: "전세 월세 금리", query: "전세 월세 금리 영향", emoji: "📝", description: "금리 변동과 전·월세 시장" },
  ],
  "주식": [
    { label: "코스피 현황", query: "코스피 오늘 시황", emoji: "📊", description: "오늘 코스피 지수 동향" },
    { label: "코스닥 현황", query: "코스닥 오늘 시황", emoji: "📈", description: "코스닥 장 마감 현황" },
    { label: "주식 배당금", query: "주식 고배당주 투자", emoji: "💰", description: "고배당주 선별 투자 전략" },
    { label: "PER PBR 분석", query: "주식 PER PBR 저평가", emoji: "🔍", description: "저평가 주식 발굴 지표" },
    { label: "ETF 투자", query: "ETF 투자 방법 추천", emoji: "🗂️", description: "ETF로 분산 투자하는 방법" },
    { label: "삼성전자 주가", query: "삼성전자 주가 전망", emoji: "📱", description: "삼성전자 주가 분석과 전망" },
    { label: "외국인 순매수", query: "외국인 기관 주식 순매수", emoji: "🌐", description: "외국인·기관 수급 분석" },
    { label: "공모주 청약", query: "공모주 청약 일정", emoji: "🎯", description: "이번 달 공모주 청약 일정" },
  ],
  "채권": [
    { label: "국고채 금리", query: "국고채 금리 오늘", emoji: "📜", description: "오늘 국고채 금리 현황" },
    { label: "채권 ETF", query: "채권 ETF 투자 방법", emoji: "🗂️", description: "채권 ETF 상품 비교" },
    { label: "채권 금리 관계", query: "채권 금리 하락 가격 상승", emoji: "📉", description: "금리와 채권 가격 역관계" },
    { label: "만기수익률 YTM", query: "채권 만기수익률 YTM 뜻", emoji: "📅", description: "YTM 계산 방법과 의미" },
    { label: "회사채 투자", query: "회사채 투자 위험 수익", emoji: "🏭", description: "회사채 신용등급과 수익률" },
    { label: "채권 vs 예금", query: "채권 예금 비교 투자", emoji: "⚖️", description: "채권과 예금 수익률 비교" },
  ],
  "미시경제": [
    { label: "인플레이션 원인", query: "인플레이션 물가상승 원인", emoji: "🛒", description: "물가 상승의 원인과 대책" },
    { label: "수요 공급 법칙", query: "수요 공급 법칙 예시", emoji: "⚖️", description: "수요·공급 법칙 실생활 사례" },
    { label: "가격 탄력성", query: "수요 가격탄력성 의미", emoji: "🎯", description: "탄력성이 높은 상품과 낮은 상품" },
    { label: "독점 과점 시장", query: "독점 과점 시장 문제점", emoji: "🏭", description: "독점 시장의 폐해와 규제" },
    { label: "소비자물가지수", query: "소비자물가지수 CPI 발표", emoji: "📊", description: "최신 CPI 발표 및 분석" },
    { label: "공정거래 규제", query: "공정거래위원회 규제 뉴스", emoji: "⚖️", description: "공정거래위 최신 규제 동향" },
  ],
};

function resolveKeywordGroup(keyword: string): string {
  const k = keyword.trim();
  if (KEYWORD_CHIPS[k]) return k;
  for (const key of Object.keys(KEYWORD_CHIPS)) {
    if (k.includes(key) || key.includes(k)) return key;
  }
  return "기준금리";
}

function naverNewsUrl(query: string) {
  return `https://search.naver.com/search.naver?where=news&query=${encodeURIComponent(query)}`;
}

// ─── 메모 편집 컴포넌트 ───────────────────────────────────────────────────────
function MemoEditor({
  initialMemo,
  onSave,
}: {
  initialMemo: string;
  onSave: (memo: string) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(initialMemo);

  const handleSave = () => {
    onSave(draft);
    setEditing(false);
  };

  const handleCancel = () => {
    setDraft(initialMemo);
    setEditing(false);
  };

  if (!editing) {
    return (
      <button
        onClick={() => setEditing(true)}
        className="w-full text-left mt-[8px] flex items-start gap-[8px] group"
      >
        <div
          className={`flex-1 rounded-[10px] px-[12px] py-[10px] border border-dashed transition-colors ${
            draft
              ? "bg-[#f9f9f7] border-[#d4e9e2] text-[#1e1e1e]"
              : "bg-[#f9f9f7] border-[#e5e7eb] text-[#9ca3af]"
          }`}
        >
          <div className="flex items-center gap-[6px] mb-[4px]">
            <PenLine className="size-3 text-[#00754a]" />
            <span className="text-[11px] font-bold text-[#00754a] tracking-wide">내 메모</span>
          </div>
          <p className="text-[13px] leading-relaxed whitespace-pre-wrap">
            {draft || "여기에 메모를 남겨보세요... (탭하여 편집)"}
          </p>
        </div>
      </button>
    );
  }

  return (
    <div className="mt-[8px] flex flex-col gap-[6px]">
      <div className="flex items-center gap-[6px] px-[2px]">
        <PenLine className="size-3 text-[#00754a]" />
        <span className="text-[11px] font-bold text-[#00754a] tracking-wide">내 메모 편집 중</span>
      </div>
      <textarea
        autoFocus
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        placeholder="이 뉴스 키워드에 대한 생각이나 중요 내용을 메모하세요..."
        rows={4}
        className="w-full rounded-[10px] px-[12px] py-[10px] border-2 border-[#006241] bg-white text-[13px] leading-relaxed text-[#1e1e1e] resize-none outline-none placeholder:text-[#9ca3af]"
      />
      <div className="flex gap-[8px]">
        <button
          onClick={handleSave}
          className="flex items-center gap-[6px] bg-[#006241] text-white rounded-full px-[16px] py-[8px] text-[13px] font-bold"
        >
          <Check className="size-3.5" />
          저장
        </button>
        <button
          onClick={handleCancel}
          className="flex items-center gap-[6px] bg-[#f3f4f6] text-[#6b6b6b] rounded-full px-[16px] py-[8px] text-[13px] font-medium"
        >
          <X className="size-3.5" />
          취소
        </button>
      </div>
    </div>
  );
}

// ─── Props ───────────────────────────────────────────────────────────────────
interface NewsSearchResultsScreenProps {
  keyword: string;
  bookmarks: BookmarkedNews[];
  onToggleBookmark: (news: BookmarkedNews) => void;
  onUpdateMemo: (link: string, memo: string) => void;
  onBack: () => void;
}

// ─── 메인 컴포넌트 ────────────────────────────────────────────────────────────
export default function NewsSearchResultsScreen({
  keyword,
  bookmarks,
  onToggleBookmark,
  onUpdateMemo,
  onBack,
}: NewsSearchResultsScreenProps) {
  const [showBookmarksOnly, setShowBookmarksOnly] = useState(false);

  const groupKey = resolveKeywordGroup(keyword);
  const chips = KEYWORD_CHIPS[groupKey] || KEYWORD_CHIPS["기준금리"];

  // 칩을 북마크 데이터로 변환하는 헬퍼
  function chipToNews(chip: SearchChip, idx: number): BookmarkedNews {
    return {
      title: chip.label,
      link: naverNewsUrl(chip.query),
      description: chip.description,
      source: `네이버 뉴스 · ${chip.query}`,
      pubDate: new Date().toLocaleDateString("ko-KR"),
      image: IMAGES[idx % IMAGES.length],
      memo: "",
    };
  }

  return (
    <div className="w-full bg-[#f2f0eb] flex flex-col" style={{ minHeight: 840, paddingBottom: 100 }}>

      {/* ─── 상단 헤더 ─── */}
      <div className="bg-white sticky top-0 z-20 flex flex-col gap-[14px] items-start pb-[14px] pt-[48px] px-[16px] drop-shadow-[0px_2px_4px_rgba(0,0,0,0.06)] shrink-0 w-full">
        <div className="flex gap-[12px] items-center w-full">
          <button
            onClick={onBack}
            className="size-[30px] flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <ChevronLeft className="size-6 text-black" />
          </button>
          <div className="bg-[#f2f0eb] flex-1 h-[44px] rounded-full border border-[#f3f4f6] flex items-center px-[16px] gap-[8px]">
            <Search className="size-4 text-[#9ca3af]" />
            <span className="text-[#1e1e1e] text-[15px] font-medium truncate">
              {keyword} 관련 뉴스 탐색
            </span>
          </div>
        </div>

        {/* 탭 */}
        <div className="flex gap-[20px] items-center w-full">
          <button
            onClick={() => setShowBookmarksOnly(false)}
            className={`pb-[4px] text-[14px] font-bold transition-all ${
              !showBookmarksOnly
                ? "text-[#006241] border-b-2 border-[#006241]"
                : "text-[#9ca3af] hover:text-[#006241]"
            }`}
          >
            검색어 탐색
          </button>
          <button
            onClick={() => setShowBookmarksOnly(true)}
            className={`pb-[4px] text-[14px] font-bold transition-all flex items-center gap-[6px] ${
              showBookmarksOnly
                ? "text-[#006241] border-b-2 border-[#006241]"
                : "text-[#9ca3af] hover:text-[#006241]"
            }`}
          >
            북마크
            {bookmarks.length > 0 && (
              <span
                className={`text-[11px] rounded-full px-[7px] py-[1px] font-bold ${
                  showBookmarksOnly ? "bg-[#006241] text-white" : "bg-[#f3f4f6] text-[#6b6b6b]"
                }`}
              >
                {bookmarks.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ─── 검색어 탐색 탭 ─── */}
      {!showBookmarksOnly && (
        <div className="flex flex-col gap-[20px] px-[16px] pt-[20px]">
          {/* 안내 배너 */}
          <div className="bg-[#006241] rounded-[16px] p-[20px] relative overflow-hidden text-white flex justify-between items-center shadow-md">
            <div className="flex flex-col gap-[4px] z-10 max-w-[75%]">
              <span className="text-[11px] opacity-75 font-semibold tracking-wide uppercase">네이버 뉴스 바로가기</span>
              <h4 className="text-[16px] font-bold leading-[24px]">'{keyword}' 관련 검색어</h4>
              <p className="text-[12px] opacity-85 leading-relaxed">탭하면 실시간 뉴스로 이동 · 🔖 누르면 북마크 저장</p>
            </div>
            <div className="bg-[rgba(255,255,255,0.2)] rounded-full size-[48px] flex items-center justify-center z-10 shrink-0">
              <TrendingUp className="size-6 text-white" />
            </div>
            <div className="absolute bg-[rgba(255,255,255,0.06)] blur-[20px] bottom-[-16px] right-[-16px] rounded-full size-[128px]" />
          </div>

          {/* 키워드 칩 목록 */}
          <div className="flex flex-col gap-[8px]">
            <span className="text-[13px] font-semibold text-[#9ca3af] tracking-wide px-[2px]">
              관련 검색어 {chips.length}개
            </span>
            {chips.map((chip, i) => {
              const newsItem = chipToNews(chip, i);
              const isBookmarked = bookmarks.some((b) => b.link === newsItem.link);

              return (
                <div
                  key={chip.query}
                  className={`bg-white rounded-[14px] border shadow-[0px_2px_6px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-150 ${
                    isBookmarked ? "border-[#d4e9e2]" : "border-[#f3f4f6]"
                  }`}
                >
                  <div className="flex items-center gap-[14px] px-[16px] py-[14px]">
                    {/* 이모지 */}
                    <div className="bg-[#f2f0eb] rounded-[10px] size-[40px] flex items-center justify-center shrink-0 text-[20px]">
                      {chip.emoji}
                    </div>

                    {/* 텍스트 — 클릭 시 네이버 뉴스 이동 */}
                    <a
                      href={naverNewsUrl(chip.query)}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                      className="flex-1 min-w-0"
                    >
                      <div className="flex items-center gap-[6px]">
                        <span className="text-[15px] font-bold text-[#1e1e1e]">{chip.label}</span>
                        <ExternalLink className="size-3 text-[#9ca3af]" />
                      </div>
                      <p className="text-[12px] text-[#9ca3af] mt-[1px] truncate">{chip.description}</p>
                    </a>

                    {/* 북마크 버튼 */}
                    <button
                      onClick={() => onToggleBookmark(newsItem)}
                      className={`shrink-0 size-[36px] rounded-full flex items-center justify-center border transition-all duration-200 ${
                        isBookmarked
                          ? "bg-[#006241] border-[#006241] scale-110"
                          : "bg-white border-[#e5e7eb] hover:border-[#006241] hover:text-[#006241]"
                      }`}
                      title={isBookmarked ? "북마크 해제" : "북마크 추가"}
                    >
                      <Bookmark
                        className={`size-4 ${isBookmarked ? "text-white" : "text-[#9ca3af]"}`}
                        fill={isBookmarked ? "currentColor" : "none"}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 전체 검색 버튼 */}
          <a
            href={naverNewsUrl(keyword)}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
            className="flex items-center justify-center gap-[8px] bg-[#f2f0eb] border-2 border-dashed border-[#d4e9e2] rounded-[14px] py-[16px] hover:bg-[#e8f4ef] transition-colors"
          >
            <Search className="size-4 text-[#006241]" />
            <span className="text-[14px] font-bold text-[#006241]">'{keyword}' 전체 뉴스 보기</span>
            <ExternalLink className="size-3.5 text-[#006241]" />
          </a>
        </div>
      )}

      {/* ─── 북마크 탭 ─── */}
      {showBookmarksOnly && (
        <div className="flex flex-col gap-[12px] px-[16px] pt-[20px]">
          {bookmarks.length === 0 ? (
            <div className="bg-white rounded-[16px] py-[80px] px-[24px] flex flex-col items-center justify-center gap-4 text-center border border-[#e5e7eb] shadow-sm">
              <div className="size-[64px] bg-[#f3f4f6] rounded-full flex items-center justify-center text-3xl">
                🔖
              </div>
              <div>
                <p className="text-[#1e1e1e] font-bold text-[16px] mb-2">저장된 북마크가 없어요</p>
                <p className="text-[#9ca3af] text-[13px] leading-relaxed">
                  검색어 탐색 탭에서 🔖 버튼을 눌러{"\n"}관심 키워드를 저장해보세요!
                </p>
              </div>
              <button
                onClick={() => setShowBookmarksOnly(false)}
                className="mt-[4px] bg-[#006241] text-white rounded-full px-[24px] py-[10px] text-[14px] font-bold"
              >
                검색어 탐색하러 가기
              </button>
            </div>
          ) : (
            <>
              <p className="text-[13px] font-semibold text-[#9ca3af] tracking-wide px-[2px]">
                저장된 키워드 {bookmarks.length}개 · 메모를 탭해서 편집하세요
              </p>
              {bookmarks.map((news, idx) => (
                <div
                  key={news.link + idx}
                  className="bg-white rounded-[16px] border border-[#d4e9e2] shadow-[0px_2px_8px_rgba(0,98,65,0.06)] overflow-hidden"
                >
                  <div className="p-[16px]">
                    {/* 헤더 행 */}
                    <div className="flex items-start gap-[12px]">
                      {/* 썸네일 */}
                      {news.image && (
                        <div className="size-[48px] rounded-[10px] overflow-hidden bg-gray-100 shrink-0">
                          <img src={news.image} alt="썸네일" className="size-full object-cover" />
                        </div>
                      )}

                      {/* 제목 및 출처 */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-[6px]">
                          <span className="text-[16px]">
                            {/* 이모지 찾기 */}
                            {chips.find((c) => c.label === news.title)?.emoji || "🔖"}
                          </span>
                          <h3 className="font-bold text-[#1e1e1e] text-[15px] leading-[21px] truncate">
                            {news.title}
                          </h3>
                        </div>
                        <p className="text-[12px] text-[#9ca3af] mt-[2px] truncate">{news.description}</p>
                      </div>

                      {/* 액션 버튼들 */}
                      <div className="flex items-center gap-[6px] shrink-0">
                        <a
                          href={news.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ textDecoration: "none" }}
                          className="size-[32px] rounded-full bg-[#006241] flex items-center justify-center"
                          title="뉴스 보기"
                        >
                          <ExternalLink className="size-3.5 text-white" />
                        </a>
                        <button
                          onClick={() => onToggleBookmark(news)}
                          className="size-[32px] rounded-full bg-[#fff0f0] border border-[#fecaca] flex items-center justify-center hover:bg-red-100 transition-colors"
                          title="북마크 해제"
                        >
                          <X className="size-3.5 text-red-400" />
                        </button>
                      </div>
                    </div>

                    {/* 메모 편집 영역 */}
                    <MemoEditor
                      initialMemo={news.memo || ""}
                      onSave={(memo) => onUpdateMemo(news.link, memo)}
                    />
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}