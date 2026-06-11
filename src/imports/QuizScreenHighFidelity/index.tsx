import svgPaths from "./svg-banxtyu7x2";

function Overlay() {
  return (
    <div className="bg-[rgba(255,255,255,0.5)] h-[6px] overflow-clip relative rounded-[9999px] shrink-0 w-full" data-name="Overlay">
      <div className="absolute bg-[#006241] inset-[0_70%_0_0] rounded-[9999px]" data-name="Background" />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#d4e9e2] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[9999px] shrink-0" data-name="Background">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006241] text-[14px] tracking-[0.0684px] whitespace-nowrap">
        <p className="leading-[20px]">LEVEL 2</p>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Heading 2">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#212121] text-[24px] w-full">
        <p className="leading-[34px] mb-0">기준금리에 대한 설명으로 옳은</p>
        <p className="leading-[34px]">것은?</p>
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Section">
      <Background />
      <Heading1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[6.9863px] whitespace-nowrap">
        <p className="leading-[20px]">1</p>
      </div>
    </div>
  );
}

function Border() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Border">
      <div aria-hidden className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container1 />
    </div>
  );
}

function Margin() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[24px] relative shrink-0 w-[56px]" data-name="Margin">
      <Border />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[10.16px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] tracking-[0.0781px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">중앙은행이 시중은행과 거래할 때</p>
        <p className="leading-[24px]">기준이 되는 금리이다.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] p-[20px] relative size-full">
          <Margin />
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Img() {
  return (
    <div className="h-[12px] relative shrink-0 w-[10.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.5018 12">
        <g id="Img">
          <path d={svgPaths.p8dde00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#006241] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Background">
      <Img />
    </div>
  );
}

function Margin1() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[24px] relative shrink-0 w-[56px]" data-name="Margin">
      <Background1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[6.52px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] tracking-[0.0313px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">물가 안정을 위해 시장의 통화량을</p>
        <p className="leading-[24px]">조절하는 수단이다.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow1() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border-2 border-[#006241] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] p-[20px] relative size-full">
          <Margin1 />
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[6.9863px] whitespace-nowrap">
        <p className="leading-[20px]">3</p>
      </div>
    </div>
  );
}

function Border1() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Border">
      <div aria-hidden className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container4 />
    </div>
  );
}

function Margin2() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[24px] relative shrink-0 w-[56px]" data-name="Margin">
      <Border1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[6.58px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] tracking-[0.0313px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">개인이 은행에 저축할 때 적용되는</p>
        <p className="leading-[24px]">가장 높은 금리이다.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow2() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] p-[20px] relative size-full">
          <Margin2 />
          <Container5 />
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[6.9863px] whitespace-nowrap">
        <p className="leading-[20px]">4</p>
      </div>
    </div>
  );
}

function Border2() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[32px]" data-name="Border">
      <div aria-hidden className="absolute border-2 border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container6 />
    </div>
  );
}

function Margin3() {
  return (
    <div className="content-stretch flex flex-col h-[32px] items-start pr-[24px] relative shrink-0 w-[56px]" data-name="Margin">
      <Border2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pr-[6.58px] relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:DemiLight',sans-serif] font-[350] justify-center leading-[0] relative shrink-0 text-[#212121] text-[16px] tracking-[0.0313px] whitespace-nowrap">
        <p className="leading-[24px] mb-0">주식 시장의 변동성에 따라 실시간</p>
        <p className="leading-[24px]">으로 변하는 금리이다.</p>
      </div>
    </div>
  );
}

function BackgroundBorderShadow3() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] min-h-[72px] relative rounded-[12px] shrink-0 w-full" data-name="Background+Border+Shadow">
      <div aria-hidden className="absolute border-2 border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="flex flex-row items-center min-h-[inherit] size-full">
        <div className="content-stretch flex items-center min-h-[inherit] p-[20px] relative size-full">
          <Margin3 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full" data-name="Container">
      <BackgroundBorderShadow />
      <BackgroundBorderShadow1 />
      <BackgroundBorderShadow2 />
      <BackgroundBorderShadow3 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[40px] items-start left-0 p-[24px] right-0 top-[100px]" data-name="Main">
      <Overlay />
      <Section />
      <Container />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6b6b6b] text-[14px] tracking-[1.4px] w-[72.082px]">
        <p className="leading-[20px]">{`< 3 / 10 >`}</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#006241] content-stretch flex flex-col items-center justify-center py-[24px] relative rounded-[9999px] shrink-0 w-full" data-name="Button">
      <div className="absolute bg-[rgba(255,255,255,0)] inset-0 rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,98,65,0.2),0px_4px_6px_-4px_rgba(0,98,65,0.2)]" data-name="Button:shadow" />
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white tracking-[0.0625px] whitespace-nowrap">
        <p className="leading-[24px]">다음 문제 풀기</p>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[24px] items-center left-0 px-[24px] py-[32px] right-0" data-name="Footer">
      <Container8 />
      <Button />
    </div>
  );
}

function Img1() {
  return (
    <div className="relative shrink-0 size-[200px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 200 200">
        <g id="Img">
          <path d={svgPaths.p1b687900} fill="var(--fill-0, #006241)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bottom-[94px] content-stretch flex flex-col items-start opacity-5 right-[-40px]" data-name="Container">
      <Img1 />
    </div>
  );
}

function Img2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[17.5px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
        <g id="Img">
          <path d={svgPaths.p5d8a900} fill="var(--fill-0, #006241)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-name="Container">
      <Img2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Noto_Sans_KR:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#006241] text-[24px] tracking-[0.0234px] whitespace-nowrap">
        <p className="leading-[32px]">{`'기준 금리' 6/24`}</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0" data-name="Container">
      <Container11 />
      <Heading />
    </div>
  );
}

function Img3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Img">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Img">
          <path d={svgPaths.p27322900} fill="var(--fill-0, #006241)" fillOpacity="0.4" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[44px]" data-name="Container">
      <Img3 />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f2f0eb] content-stretch flex items-center justify-between left-0 pb-[24px] pt-[32px] px-[24px] right-0 top-0" data-name="Header">
      <Container10 />
      <Container12 />
    </div>
  );
}

export default function QuizScreenHighFidelity() {
  return (
    <div className="bg-[#f2f0eb] relative size-full" data-name="Quiz Screen High-Fidelity">
      <Main />
      <Footer />
      <Container9 />
      <Header />
    </div>
  );
}