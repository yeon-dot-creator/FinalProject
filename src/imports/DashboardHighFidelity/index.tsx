import svgPaths from "./svg-sunnvy0181";

function Img() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
        <g id="Img">
          <path d={svgPaths.p34558000} fill="var(--fill-0, #00754A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Img />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#00754a] text-[10px] tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[15px]">홈</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Margin />
      <Container1 />
    </div>
  );
}

function Img1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
        <g id="Img">
          <path d={svgPaths.p11cc9f00} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Img1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[-0.16px] w-[19.813px]">
        <p className="leading-[15px]">학습</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Margin1 />
      <Container3 />
    </div>
  );
}

function Img2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p359f3c00} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Img2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[-0.16px] w-[19.813px]">
        <p className="leading-[15px]">통계</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Margin2 />
      <Container5 />
    </div>
  );
}

function Img3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <g id="Img">
          <path d={svgPaths.p3fbba500} fill="var(--fill-0, #9CA3AF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[4px] relative shrink-0" data-name="Margin">
      <Img3 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[10px] tracking-[-0.16px] w-[29.715px]">
        <p className="leading-[15px]">프로필</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-name="Container">
      <Margin3 />
      <Container7 />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white bottom-[0.5px] content-stretch flex gap-[62.1px] h-[72px] items-center left-0 pl-[47.05px] pr-[47.06px] right-0" data-name="Nav">
      <div aria-hidden className="absolute border-[#f3f4f6] border-solid border-t inset-0 pointer-events-none" />
      <div className="absolute bg-[rgba(255,255,255,0)] bottom-0 h-[72px] left-0 right-0 shadow-[0px_-4px_10px_-2px_rgba(0,0,0,0.05)]" data-name="Nav:shadow" />
      <Container />
      <Container2 />
      <Container4 />
      <Container6 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold','Noto_Sans_KR:Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[24px] tracking-[-0.16px] w-[210.214px]">
        <p className="leading-[30px]">안녕하세요 서연 님!</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g clipPath="url(#clip0_1_442)" id="SVG">
          <path d={svgPaths.p1a1b900} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_442">
            <rect fill="white" height="48" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <Svg />
    </div>
  );
}

function Header() {
  return (
    <div className="relative shrink-0 w-full" data-name="Header">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between pb-[16px] pt-[32px] px-[24px] relative size-full">
          <Heading />
          <Container9 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-black tracking-[-0.16px] whitespace-nowrap">
        <p className="leading-[27px]">Xp. 50/100</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Medium','Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-black tracking-[-0.16px] w-[83.681px]">
        <p className="leading-[24px]">개미 투자자</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex items-end justify-between relative shrink-0 w-full" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-white h-[12px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Background">
      <div className="absolute bg-[#00754a] bottom-0 left-0 right-1/2 rounded-[9999px] top-0" data-name="Background" />
    </div>
  );
}

function BackgroundBorder() {
  return (
    <div className="bg-[#faf6ee] content-stretch flex flex-col gap-[12px] items-start p-[20px] relative rounded-[12px] shrink-0 w-[327px]" data-name="Background+Border">
      <div aria-hidden className="absolute border border-[#f3f4f6] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
      <Container10 />
      <Background />
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[28px] tracking-[-0.16px] w-[83.661px]">
        <p className="leading-[35px]">오늘의</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[28px] tracking-[-0.16px] w-[83.661px]">
        <p className="leading-[35px]">챌린지</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[83.661px]" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="relative size-[48px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g clipPath="url(#clip0_1_436)" id="SVG">
          <path d={svgPaths.p58cb500} fill="var(--fill-0, #00754A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_436">
            <rect fill="white" height="48" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[48px]">
        <div className="-rotate-90 flex-none">
          <Svg1 />
        </div>
      </div>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Container14 />
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[-1px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[22px] tracking-[-0.16px] w-[114.449px]">
        <p className="leading-[27.5px]">오늘의 개념</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 top-[27.5px]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[24px] tracking-[-0.16px] w-[115.66px]">
        <p className="leading-[30px]">‘기준 금리’</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[57.5px] relative shrink-0 w-[115.48px]" data-name="Container">
      <Container19 />
      <Container20 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="relative size-[48px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g clipPath="url(#clip0_1_433)" id="SVG">
          <path d={svgPaths.p1726f600} fill="var(--fill-0, #00754A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_433">
            <rect fill="white" height="48" width="48" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0 size-[48px]">
        <div className="-rotate-90 flex-none">
          <Svg2 />
        </div>
      </div>
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full" data-name="Background">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-between p-[24px] relative size-full">
          <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[12px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)]" data-name="Overlay+Shadow" />
          <Container18 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[16px] items-start pt-[32px] px-[24px] relative size-full">
        <Background1 />
        <Background2 />
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular','Noto_Sans_KR:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black tracking-[-0.16px] w-full">
        <p className="leading-[36px]">학습세트</p>
      </div>
    </div>
  );
}

function BackgroundBorder1() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.16px] w-[39.814px]">
            <p className="leading-[30px]">주식</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder2() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.16px] w-[39.814px]">
            <p className="leading-[30px]">채권</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BackgroundBorder3() {
  return (
    <div className="bg-white relative rounded-[9999px] shrink-0 w-full" data-name="Background+Border">
      <div aria-hidden className="absolute border-2 border-black border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <div className="[word-break:break-word] flex flex-col font-['Inter:Bold','Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-black text-center tracking-[-0.16px] w-[79.504px]">
            <p className="leading-[30px]">미시경제</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorder1 />
      <BackgroundBorder2 />
      <BackgroundBorder3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-[16px] pt-[40px] px-[24px] relative size-full">
        <Heading1 />
        <Container23 />
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center min-h-[840px] pb-[96px] relative shrink-0 w-full" data-name="Container">
      <Header />
      <BackgroundBorder />
      <Container13 />
      <Container22 />
    </div>
  );
}

export default function DashboardHighFidelity() {
  return (
    <div className="bg-[#f2f0eb] content-stretch flex flex-col items-start relative size-full" data-name="Dashboard High-Fidelity">
      <Nav />
      <Container8 />
    </div>
  );
}