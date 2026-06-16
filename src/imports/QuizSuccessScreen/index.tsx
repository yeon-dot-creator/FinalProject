import svgPaths from "./svg-of0a31gfdy";
import imgContainer from "./6bce8ccac0ddcb77281b222102097332765a00ed.png";

function Container2() {
  return (
    <div className="relative shrink-0 size-[240px]" data-name="Container">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgContainer} />
    </div>
  );
}

function Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[67.5px] pb-[32px] top-[40px]" data-name="Margin">
      <Container2 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Heading 1">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[32px] text-center w-[170.793px]">
        <p className="leading-[40px]">축하합니다!</p>
      </div>
    </div>
  );
}

function Heading1Margin() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[102.17px] pb-[12px] top-[312px]" data-name="Heading 1:margin">
      <Heading />
    </div>
  );
}

function Container3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-center left-[calc(50%-0.51px)] top-[calc(50%+97.7px)]" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#4b5563] text-[18px] text-center w-[136.02px]">
        <p className="leading-[28.8px] mb-0">퀴즈를</p>
        <p className="leading-[28.8px]">모두 맞히셨어요.</p>
      </div>
    </div>
  );
}

function Svg() {
  return (
    <div className="h-[24px] relative shrink-0 w-[20px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 24">
        <g clipPath="url(#clip0_1_533)" id="SVG">
          <path d={svgPaths.p5145780} fill="var(--fill-0, #00754A)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_533">
            <rect fill="white" height="24" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Overlay() {
  return (
    <div className="bg-[rgba(0,117,74,0.1)] content-stretch flex items-center justify-center relative rounded-[9999px] shrink-0 size-[48px]" data-name="Overlay">
      <Svg />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#9ca3af] text-[14px] w-[60.077px]">
        <p className="leading-[21px]">학습 완료</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[16px] w-[226.847px]">
        <p className="leading-[24px]">금융 지식 레벨이 상승했습니다!</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[226.847px]" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function BackgroundShadow() {
  return (
    <div className="bg-white drop-shadow-[0px_4px_6px_rgba(0,0,0,0.05)] relative rounded-[16px] shrink-0 w-full" data-name="Background+Shadow">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[12px] items-center justify-center p-[20px] relative size-full">
          <Overlay />
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function Margin1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[24px] pt-[40px] right-[24px] top-[421.59px]" data-name="Margin">
      <BackgroundShadow />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[589.59px] left-0 right-0 top-[72px]" data-name="Container">
      <Margin />
      <Heading1Margin />
      <Container3 />
      <Margin1 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-center text-white w-[231.2px]">
        <p className="leading-[27px]">관련 뉴스 찾아보기</p>
      </div>
    </div>
  );
}

function Svg2() {
  return (
    <div className="flex-[1_0_0] min-h-px overflow-clip relative w-[7px]" data-name="SVG">
      <div className="absolute inset-[0_3.83%_5.74%_3.85%]" data-name="Vector">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.4628 11.3115">
          <path d={svgPaths.pb1f4e00} fill="var(--fill-0, white)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Svg1() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-center justify-center overflow-clip relative shrink-0 w-[7px]" data-name="SVG">
      <Svg2 />
    </div>
  );
}

function SvgMargin() {
  return (
    <div className="content-stretch flex flex-col h-[12px] items-start pl-[8px] relative shrink-0 w-[15px]" data-name="SVG:margin">
      <Svg1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#00754a] content-stretch drop-shadow-[0px_4px_5px_rgba(0,117,74,0.2)] flex h-[56px] items-center justify-center pl-[48.48px] pr-[48.5px] relative rounded-[9999px] shrink-0" data-name="Button">
      <Container8 />
      <SvgMargin />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e1e1e] text-[18px] text-center w-[131.122px]">
        <p className="leading-[27px]">홈으로 돌아가기</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-center pl-[104.98px] pr-[105px] relative rounded-[9999px] shrink-0" data-name="Button">
      <div aria-hidden className="absolute border border-[#1e1e1e] border-solid inset-0 pointer-events-none rounded-[9999px]" />
      <Container9 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-gradient-to-t content-stretch flex flex-col from-[#f2f0eb] items-start left-0 pb-[40px] pt-[16px] px-[16px] right-0 to-[rgba(242,240,235,0)] top-[661.59px] via-1/2 via-[#f2f0eb]" data-name="Background">
      <Container7 />
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Container">
      <div className="[word-break:break-word] flex flex-col font-['Pretendard:SemiBold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#006241] text-[24px] w-[102.83px]">
        <p className="leading-[30px]">퀴즈 결과</p>
      </div>
    </div>
  );
}

function Container10() {
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
      <Container11 />
    </div>
  );
}

function Svg3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="SVG">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g clipPath="url(#clip0_1_530)" id="SVG">
          <path d={svgPaths.p1199c300} fill="var(--fill-0, white)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_530">
            <rect fill="white" height="32" width="32" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 size-[32px]" data-name="Container">
      <Svg3 />
    </div>
  );
}

function BackgroundShadow1() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_2px_2px_rgba(0,0,0,0.05)] flex h-[72px] items-center justify-between left-0 px-[16px] right-0 top-0" data-name="Background+Shadow">
      <Container10 />
      <Container12 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[841.59px] min-h-[840px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Background />
      <BackgroundShadow1 />
    </div>
  );
}

export default function QuizSuccessScreen() {
  return (
    <div className="bg-[#f2f0eb] content-stretch flex flex-col items-start relative size-full" data-name="Quiz Success Screen">
      <Container />
    </div>
  );
}