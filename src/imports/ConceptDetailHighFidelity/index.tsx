import svgPaths from "./svg-tcok02e32g";

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[24px] w-[102.209px]">
        <p className="leading-[30px]">기준 금리</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Container">
      <div className="relative shrink-0 size-[30px]" data-name="뒤로가기">
        <div className="absolute flex inset-0 items-center justify-center" style={{ containerType: "size" }}>
          <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute bottom-1/4 left-[14%] right-[14%] top-[10%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21.5974 19.5">
                  <path d={svgPaths.pf77a7f0} fill="var(--fill-0, black)" id="Polygon 4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Heading />
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_469)" id="SVG">
          <path d={svgPaths.p1199c300} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_469">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[40px]" data-name="Container">
      <Svg />
    </div>
  );
}

function Header() {
  return (
    <div className="bg-white h-[72px] relative shrink-0 w-full z-[3]" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between px-[16px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] h-[72px] left-0 right-0 shadow-[0px_-4px_10px_-2px_rgba(0,0,0,0.05)] top-0" data-name="Header:shadow" />
          <Container1 />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[14px] relative shrink-0 w-[8.75px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.75 14">
        <g id="Img">
          <path d={svgPaths.p167dbc00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00754a] content-stretch flex gap-[8px] h-[56px] items-center justify-center relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] h-[56px] left-0 right-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[76.389px]">
        <p className="leading-[27px]">퀴즈 풀기</p>
      </div>
      <Container3 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-gradient-to-t bottom-0 content-stretch flex flex-col from-[#f2f0eb] items-start left-0 p-[16px] right-0 to-[rgba(242,240,235,0)] via-1/2 via-[rgba(242,240,235,0.95)] z-[2]" data-name="Background">
      <Button />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[22px] w-full">
        <p className="leading-[33px]">기준 금리란 무엇일까요?</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[0.685px] relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Bold','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[19px] text-black w-full">
        <p className="mb-0">
          <span className="leading-[30.88px]">{`한 나라의 금리를 세울 때 `}</span>
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Bold','Noto_Sans_KR:Bold','Noto_Sans_KR:Regular',sans-serif] font-bold leading-[30.88px] not-italic text-[#00754a] underline">표준이 되는 금</span>
        </p>
        <p className="mb-0">
          <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] [word-break:break-word] decoration-from-font decoration-solid font-['Inter:Bold','Noto_Sans_KR:Bold','Noto_Sans_KR:Regular',sans-serif] font-bold leading-[30.88px] not-italic text-[#00754a] underline">리</span>
          <span className="leading-[30.88px]">를 말합니다. 한국은행의 금융통화위</span>
        </p>
        <p className="leading-[30.88px] mb-0">원회에서 결정하며, 경제 상황에 따라 올</p>
        <p className="leading-[30.88px]">리거나 내립니다.</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[14.815px] items-start relative shrink-0 w-full" data-name="Section">
      <Heading1 />
      <Container4 />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[15px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 20">
        <g id="Img">
          <path d={svgPaths.p594b480} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Img1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] tracking-[0.7px] uppercase w-[77.641px]">
        <p className="leading-[21px]">핵심 포인트</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 3">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white w-full">
        <p className="leading-[27.5px] mb-0">기준금리가 오르면 시중 금리도</p>
        <p className="leading-[27.5px] mb-0">함께 올라 저축은 늘고 소비는 줄</p>
        <p className="leading-[27.5px]">어듭니다.</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#d1d5db] text-[15px] w-full">
        <p className="leading-[22.5px] mb-0">물가를 잡기 위해 주로 금리를 인상하며, 경</p>
        <p className="leading-[22.5px] mb-0">기를 부양할 때는 금리를 인하하는 정책을</p>
        <p className="leading-[22.5px]">펼칩니다.</p>
      </div>
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-[#1e1e1e] relative rounded-[12px] shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[11px] items-start p-[24px] relative size-full">
        <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1)]" data-name="Section:shadow" />
        <Container5 />
        <Heading2 />
        <Container8 />
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_457)" id="SVG">
          <path d={svgPaths.p323d1800} fill="var(--fill-0, #00754A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_457">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,98,65,0.1)] content-stretch flex flex-col items-start p-[12px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg1 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black w-[127.259px]">
        <p className="leading-[25.5px]">영향을 받는 것들</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[29.5px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[233.17px]">
        <p className="leading-[24px] mb-0">대출 이자, 예금 이자, 환율, 그리</p>
        <p className="leading-[24px] mb-0">고 물가 상승률(인플레이션)에 직</p>
        <p className="leading-[24px]">접적인 영향을 미칩니다.</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[101.5px] relative shrink-0 w-[237px]" data-name="Container">
      <Heading3 />
      <Container10 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
        <Overlay />
        <Container9 />
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_463)" id="SVG">
          <path d={svgPaths.p753dd80} fill="var(--fill-0, #00754A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_463">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Overlay1() {
  return (
    <div className="bg-[rgba(0,98,65,0.1)] content-stretch flex flex-col items-start p-[12px] relative rounded-[9999px] shrink-0" data-name="Overlay">
      <Svg2 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Heading 4">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black w-[72.143px]">
        <p className="leading-[25.5px]">결정 주기</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[29.5px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[16px] w-[229.44px]">
        <p className="leading-[24px] mb-0">한국은행은 보통 1년에 8번, 약 6</p>
        <p className="leading-[24px] mb-0">주 간격으로 기준금리를 결정하</p>
        <p className="leading-[24px]">는 회의를 엽니다.</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[101.5px] relative shrink-0 w-[237px]" data-name="Container">
      <Heading4 />
      <Container12 />
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white drop-shadow-[0px_1px_1px_rgba(0,0,0,0.05)] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex gap-[16px] items-start p-[20px] relative size-full">
        <Overlay1 />
        <Container11 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start pb-[96px] relative shrink-0 w-full" data-name="Section">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
    </div>
  );
}

function Main() {
  return (
    <div className="relative shrink-0 w-full z-[1]" data-name="Main">
      <div className="content-stretch flex flex-col gap-[24px] items-start px-[16px] py-[32px] relative size-full">
        <Section />
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col isolate items-start min-h-[840px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <Background />
      <Main />
    </div>
  );
}

export default function ConceptDetailHighFidelity() {
  return (
    <div className="bg-[#f2f0eb] content-stretch flex flex-col items-start relative size-full" data-name="Concept Detail High-Fidelity">
      <Container />
    </div>
  );
}