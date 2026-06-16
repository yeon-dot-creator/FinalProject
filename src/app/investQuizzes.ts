export interface QuizQuestion {
  question: string;
  level: string;
  options: { text: string; correct?: boolean }[];
  progress: number; // 0~1
  current: number;
  total: number;
}

export const LEVEL_THEMES: Record<number, string> = {
  1: "조세기초",
  2: "소득세 기본",
  3: "이자소득",
  4: "배당소득",
  5: "양도소득세",
  6: "증권거래세",
  7: "은행구조",
  8: "ISA",
  9: "예금상품",
  10: "ELS · ELD · ELF",
  11: "ELB · ELW",
  12: "보험상품",
  13: "신탁",
  14: "펀드 기초",
  15: "펀드 분류",
  16: "MMF",
  17: "ETF",
  18: "특수형펀드",
  19: "ABS",
  20: "퇴직연금",
  21: "부동산 기초",
  22: "부동산 공부",
  23: "리츠(REITs)",
  24: "PF",
  25: "PEF",
  26: "헤지펀드 전략",
  27: "파생신용상품",
  28: "해외투자",
  29: "기업가치평가",
  30: "직무윤리 · 자본시장법"
};

export const INVEST_QUIZZES: Record<number, QuizQuestion[]> = {
  1: [
    {
      question: "납세의무자의 주소지가 불분명하거나 서류를 송달할 장소를 알 수 없는 경우, 관보나 세무서 게시판 등에 공고한 날로부터 14일이 지나면 서류가 도달한 것으로 간주하는 송달 방식은?",
      level: "LEVEL 1",
      options: [
        { text: "공시송달", correct: true },
        { text: "교부송달" },
        { text: "우편송달" },
        { text: "유치송달" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "세법이 규정하는 과세요건(납세의무자, 과세대상, 과세표준, 세율)이 모두 충족됨으로써, 별도의 절차 없이 법률상 조세 채무가 추상적으로 발생하는 단계를 무엇이라 하는가?",
      level: "LEVEL 1",
      options: [
        { text: "납세의무 성립", correct: true },
        { text: "납세의무 확정" },
        { text: "납세의무 소멸" },
        { text: "납세의무 면제" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "소득세나 부가가치세처럼 납세의무자가 세법에 따라 자신의 과세표준과 세액을 과세관청에 스스로 신고함으로써 납세의무가 최종적으로 확정되는 방식을 무엇이라 하는가?",
      level: "LEVEL 1",
      options: [
        { text: "신고확정", correct: true },
        { text: "부과확정" },
        { text: "자동확정" },
        { text: "수시확정" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "상속세나 증여세처럼 납세의무자의 신고와 상관없이, 과세관청이 세액을 결정하여 고지함으로써 세액을 최종 확정하는 방식을 무엇이라 하는가?",
      level: "LEVEL 1",
      options: [
        { text: "부과확정", correct: true },
        { text: "신고확정" },
        { text: "자동확정" },
        { text: "원천확정" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "인지세나 원천징수하는 소득세처럼, 특별한 확정 절차를 거치지 않고 납세의무가 성립하는 즉시 세액이 자동으로 확정되는 세액 확정 방식은?",
      level: "LEVEL 1",
      options: [
        { text: "자동확정", correct: true },
        { text: "신고확정" },
        { text: "부과확정" },
        { text: "경정확정" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "국가가 납세의무자에게 세금을 부과할 수 있는 법적 권리인 '부과권'의 제약 기간을 의미하며, 원칙적으로 일반 국세의 경우 5년(무신고 7년, 부정행위 10년/15년)으로 제한되는 이 기간은?",
      level: "LEVEL 1",
      options: [
        { text: "제척기간", correct: true },
        { text: "소멸시효" },
        { text: "청구기간" },
        { text: "징수기간" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "이미 확정된 세금을 징수할 수 있는 국가의 권리인 '징수권'이 일정 기간 동안 행사되지 않아 세금 징수 권리가 완전히 소멸되는 제도로서, 5억 미만 국세의 경우 5년이 적용되는 것은?",
      level: "LEVEL 1",
      options: [
        { text: "소멸시효", correct: true },
        { text: "제척기간" },
        { text: "법정기간" },
        { text: "유예시효" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "법정신고기한 내에 신고서를 제출한 자가 과세표준 및 세액을 누락하거나 적게 신고한 경우, 과세관청이 경정하여 통지하기 전까지 자발적으로 바로잡아 증액하여 다시 신고하는 제도는?",
      level: "LEVEL 1",
      options: [
        { text: "수정신고", correct: true },
        { text: "경정청구" },
        { text: "기한후신고" },
        { text: "이의신청" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "법정신고기한 내에 신고서를 제출한 자가 세금을 원래 내야 할 금액보다 더 많이 신고했거나 환급을 덜 신청한 경우, 신고일로부터 5년 이내에 세무서장에게 세금을 돌려달라고 요구하는 제도는?",
      level: "LEVEL 1",
      options: [
        { text: "경정청구", correct: true },
        { text: "수정신고" },
        { text: "조세불복" },
        { text: "기한후신고" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "위법하거나 부당한 국세 처분으로 인해 권리나 이익을 침해당한 납세자가 세무서나 행정법원에 이의신청, 심사청구, 심판청구 등을 제기하여 구제를 요청하는 권리 구제 절차는?",
      level: "LEVEL 1",
      options: [
        { text: "조세불복", correct: true },
        { text: "경정청구" },
        { text: "수정신고" },
        { text: "세액공제" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  2: [
    {
      question: "소득세법상 국내에 주소를 두거나 183일 이상의 거소를 둔 개인을 의미하며, 전 세계에서 발생한 모든 소득(국내외 소득)에 대해 납세의무를 지는 개인은?",
      level: "LEVEL 2",
      options: [
        { text: "거주자", correct: true },
        { text: "비거주자" },
        { text: "영주권자" },
        { text: "외국법인" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "소득세법상 거주자가 아닌 개인을 뜻하며, 국내에서 발생한 소득인 '국내원천소득'에 대해서만 제한적으로 납세의무를 지는 개인은?",
      level: "LEVEL 2",
      options: [
        { text: "비거주자", correct: true },
        { text: "거주자" },
        { text: "시민권자" },
        { text: "다국적법인" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "소득세 계산의 기준이 되는 세법상의 기간을 말하며, 특별한 예외(사망, 출국)가 없는 한 매년 1월 1일부터 12월 31일까지의 1년으로 고정되어 있는 기간은?",
      level: "LEVEL 2",
      options: [
        { text: "과세기간", correct: true },
        { text: "사업연도" },
        { text: "신고기한" },
        { text: "보존기간" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "거주자의 소득세 납세지를 판정할 때, 소득의 발생지가 아니라 거주자의 주택 주소지 관할 세무서로 정하는 원칙을 무엇이라 하는가?",
      level: "LEVEL 2",
      options: [
        { text: "주소지과세", correct: true },
        { text: "원천지과세" },
        { text: "실질과세" },
        { text: "수익지과세" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "개인의 소득을 이자·배당·사업·근로·연금·기타소득 등으로 나누어 모두 합산한 후, 단일한 누진세율(6%~45%)을 적용하여 일괄 과세하는 소득세 과세 방식은?",
      level: "LEVEL 2",
      options: [
        { text: "종합과세", correct: true },
        { text: "분류과세" },
        { text: "분리과세" },
        { text: "단일과세" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "소득세법상 종합소득에 합산하지 않고, 소득을 지급하는 자가 일정 세액을 원천징수함으로써 해당 소득에 대한 납세의무를 완전히 종결시키는 과세 방식은?",
      level: "LEVEL 2",
      options: [
        { text: "분리과세", correct: true },
        { text: "종합과세" },
        { text: "분류과세" },
        { text: "비과세" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "퇴직소득이나 양도소득처럼 오랜 기간에 걸쳐 형성된 소득이 한꺼번에 실현될 때, 종합소득과 합산하지 않고 세원을 구분하여 별도로 소득세를 과세하는 방식은?",
      level: "LEVEL 2",
      options: [
        { text: "분류과세", correct: true },
        { text: "분리과세" },
        { text: "종합과세" },
        { text: "누진과세" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "비거주자가 국내에 원천을 두고 발생시킨 소득으로서, 국내 소득세법 또는 조세조약에 따라 대한민국 정부가 과세권을 행사할 수 있는 소득은?",
      level: "LEVEL 2",
      options: [
        { text: "국내원천소득", correct: true },
        { text: "국외원천소득" },
        { text: "비과세소득" },
        { text: "일시취득소득" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "개인의 소득 중 자본의 제공이나 금융 거래의 대가로 획득하는 소득으로, '이자소득'과 '배당소득'을 통틀어 이르는 조세 용어는?",
      level: "LEVEL 2",
      options: [
        { text: "금융소득", correct: true },
        { text: "사업소득" },
        { text: "기타소득" },
        { text: "양도소득" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "이자소득, 배당소득, 사업소득, 근로소득, 연금소득, 기타소득의 6가지 소득을 전부 합산하여 소득세의 과세표준을 구성하는 연간 소득의 총칭은?",
      level: "LEVEL 2",
      options: [
        { text: "종합소득", correct: true },
        { text: "분류소득" },
        { text: "실질소득" },
        { text: "과세대상액" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  3: [
    {
      question: "환매조건부채권(RP)을 만기 전에 매도하거나 만기 시 환수하는 과정에서 발생하는 매매차익은 세법상 어떤 소득으로 분류되는가?",
      level: "LEVEL 3",
      options: [
        { text: "이자소득", correct: true },
        { text: "배당소득" },
        { text: "양도소득" },
        { text: "사업소득" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "저축성 보험 계약의 만기 또는 중도 해지로 인해 계약자가 지급받는 환급금이 납입한 보험료 총액을 초과할 때 발생하는 보험 차익은 어떤 소득에 해당하는가?",
      level: "LEVEL 3",
      options: [
        { text: "이자소득", correct: true },
        { text: "배당소득" },
        { text: "연금소득" },
        { text: "기타소득" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "금융업(대부업)을 전문으로 하지 않는 자가 일시적 혹은 비업무적으로 다른 사람에게 자금을 대여해주고 대가로 취득하는 이자소득을 뜻하는 명칭은?",
      level: "LEVEL 3",
      options: [
        { text: "비영업대금의 이익", correct: true },
        { text: "영업성대금이자" },
        { text: "사업상대여이자" },
        { text: "금융대출수익" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "법적 분쟁이나 경매 등 소송 관련 법원에 임시로 예치한 보관금에서 발생하는 이자는 소득세법상 어떤 유형의 소득으로 과세되는가?",
      level: "LEVEL 3",
      options: [
        { text: "이자소득", correct: true },
        { text: "배당소득" },
        { text: "기타소득" },
        { text: "비과세소득" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "소득을 지급하는 자가 그 지급액에서 세금을 계산해 미리 징수한 뒤 정부에 납부하는 조세 행정적 제도는?",
      level: "LEVEL 3",
      options: [
        { text: "원천징수", correct: true },
        { text: "부과징수" },
        { text: "신고납부" },
        { text: "수시징수" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "원천징수 세액을 공제하여 납부하는 것만으로 해당 소득에 대한 납세의무가 다른 종합소득 합산 없이 법적으로 완전히 끝나는 원천징수 유형은?",
      level: "LEVEL 3",
      options: [
        { text: "완납적 원천징수", correct: true },
        { text: "예납적 원천징수" },
        { text: "임시적 원천징수" },
        { text: "경정적 원천징수" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "소득 지급 시 일단 세금을 떼어 납부한 뒤, 다음 해 5월 종합소득세 신고 시 기납부세액으로 차감하여 최종 정산하는 방식의 원천징수는?",
      level: "LEVEL 3",
      options: [
        { text: "예납적 원천징수", correct: true },
        { text: "완납적 원천징수" },
        { text: "종결적 원천징수" },
        { text: "단일적 원천징수" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "소득세법상 일반적인 이자소득 및 배당소득에 적용되는 법정 원천징수세율은 몇 %인가? (지방소득세 10% 별도 가산 제외 기준)",
      level: "LEVEL 3",
      options: [
        { text: "14%", correct: true },
        { text: "15.4%" },
        { text: "20%" },
        { text: "25%" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "원천징수의무자가 소득자로부터 세금을 징수한 뒤 이를 과세관청에 납부해야 하는 기한은 원천징수한 달의 다음 달 몇 일까지인가?",
      level: "LEVEL 3",
      options: [
        { text: "10일", correct: true },
        { text: "15일" },
        { text: "25일" },
        { text: "말일" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "개인별 연간 금융소득(이자소득 + 배당소득) 합계액이 얼마를 초과할 때 분리과세를 적용받지 않고 종합소득세율로 누진과세(종합과세)하는가?",
      level: "LEVEL 3",
      options: [
        { text: "2,000만 원", correct: true },
        { text: "1,000만 원" },
        { text: "3,000만 원" },
        { text: "4,000만 원" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  4: [
    {
      question: "자본시장법상 펀드(집합투자기구)에 투자하여 분배받은 분배금 및 이익은 소득세법상 어떤 세원으로 분류하여 과세하는가?",
      level: "LEVEL 4",
      options: [
        { text: "배당소득", correct: true },
        { text: "이자소득" },
        { text: "양도소득" },
        { text: "사업소득" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "법인의 감자, 퇴사, 해산, 합병 등으로 주주가 법인으로부터 실질적인 이익을 얻는 경우, 법적인 배당금이 아니더라도 배당소득으로 보아 과세하는 제도는?",
      level: "LEVEL 4",
      options: [
        { text: "의제배당", correct: true },
        { text: "인정배당" },
        { text: "유사배당" },
        { text: "간주이자" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "법인세법 세무조정 등에 의해 법인의 잉여금 처분결의나 부당행위계산부인 등으로 소득귀속자인 주주에게 배당된 것으로 세법상 간주 처분되는 소득은?",
      level: "LEVEL 4",
      options: [
        { text: "인정배당", correct: true },
        { text: "의제배당" },
        { text: "주식배당" },
        { text: "상여배당" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "주주의 배당소득에 대해 법인 단계의 법인세와 주주 단계의 소득세 이중과세를 조정하기 위해, 배당액의 11%를 먼저 가산하는 제도를 무엇이라 하는가?",
      level: "LEVEL 4",
      options: [
        { text: "배당가산 (Gross-up)", correct: true },
        { text: "배당감면" },
        { text: "세액이월" },
        { text: "원천공제" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "배당가산(Gross-up)이 적용된 배당소득에 대하여 이중과세를 최종 조정하기 위해, 산출된 세액에서 배당가산액만큼 공제해주는 조세 혜택은?",
      level: "LEVEL 4",
      options: [
        { text: "배당세액공제", correct: true },
        { text: "배당소득공제" },
        { text: "이자소득공제" },
        { text: "원천세액공제" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "공동사업에 자본만 출자하고 경영에는 참여하지 않는 비활동 공동사업자가 분배받는 사업 이익은 소득세법상 어떤 소득으로 분류되는가?",
      level: "LEVEL 4",
      options: [
        { text: "배당소득", correct: true },
        { text: "사업소득" },
        { text: "기타소득" },
        { text: "이자소득" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "기명주식의 소득세법상 배당금 수입시기는 주주총회 등에서 법인의 잉여금 처분 결정이 이루어지는 날인 언제인가?",
      level: "LEVEL 4",
      options: [
        { text: "잉여금처분결의일", correct: true },
        { text: "배당금지급일" },
        { text: "주총개최통지일" },
        { text: "사업연도말일" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "두 개 이상의 법인이 합쳐질 때 피합병법인의 주주가 합병법인으로부터 받는 합병대가(주식가치 등)가 피합병주식의 취득가액을 초과할 때 발생하는 의제배당 유형은?",
      level: "LEVEL 4",
      options: [
        { text: "합병의제배당", correct: true },
        { text: "분할의제배당" },
        { text: "감자의제배당" },
        { text: "해산의제배당" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "법인이 자본금을 감소(감자)시키면서 주주들에게 주식 소각의 대가로 지급한 금액이 주식의 원래 취득원가를 초과할 때 발생하는 의제배당 유형은?",
      level: "LEVEL 4",
      options: [
        { text: "자본감소(감자) 의제배당", correct: true },
        { text: "해산의제배당" },
        { text: "합병의제배당" },
        { text: "분할의제배당" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "법인이 해산함에 따라 법인 자산을 청산한 후 주주들에게 잔여재산을 분배할 때, 주주가 받은 자산가액이 기존 주식 취득원가를 초과하는 의제배당 유형은?",
      level: "LEVEL 4",
      options: [
        { text: "해산의제배당", correct: true },
        { text: "분할의제배당" },
        { text: "감자의제배당" },
        { text: "합병의제배당" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  5: [
    {
      question: "소득세법상 과세대상 소득을 법률에 열거된 것에 한하여 한정적으로 과세하는 방식으로, 양도소득세 과세 판정에 적용되는 과세 원칙은?",
      level: "LEVEL 5",
      options: [
        { text: "열거주의", correct: true },
        { text: "유형별 포괄주의" },
        { text: "완전 포괄주의" },
        { text: "총액주의" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "양도소득세법상 등기나 등록에 관계없이, 자산에 대한 권리가 매도, 교환, 현물출자 등으로 인하여 사실상 유상으로 이전되는 행위를 무엇이라 하는가?",
      level: "LEVEL 5",
      options: [
        { text: "양도", correct: true },
        { text: "증여" },
        { text: "신탁" },
        { text: "임대" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "양도소득세 과세대상 자산 중 가장 대표적인 성격의 자산으로, 등기 여부와 상관없이 세법상 과세대상이 되는 토지와 건물은 어떤 카테고리에 속하는가?",
      level: "LEVEL 5",
      options: [
        { text: "부동산", correct: true },
        { text: "부동산에 관한 권리" },
        { text: "기타자산" },
        { text: "파생상품" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "법인의 소유 지분으로서 상장법인 대주주가 거래하거나 소액주주가 장외에서 거래하는 경우, 양도소득세 과세대상이 되는 대표적인 금융 투자 자산은?",
      level: "LEVEL 5",
      options: [
        { text: "주식 또는 지분", correct: true },
        { text: "채권" },
        { text: "수익증권" },
        { text: "신탁수익권" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "골프회원권, 콘도회원권처럼 특정 시설물을 배타적으로 이용할 수 있는 권리를 부여받은 회원권은 양도소득세 계산 시 어떤 자산으로 분류되어 과세하는가?",
      level: "LEVEL 5",
      options: [
        { text: "기타자산", correct: true },
        { text: "부동산에 관한 권리" },
        { text: "무형고정자산" },
        { text: "부동산" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "점포임차권이나 토지·건물 등 부동산과 함께 유상으로 양도하는 영업상의 권리를 의미하며, 세법상 양도세 과세대상이 되는 무형의 권리는?",
      level: "LEVEL 5",
      options: [
        { text: "영업권", correct: true },
        { text: "지상권" },
        { text: "전세권" },
        { text: "특허권" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "양도소득세를 산출할 때 가공된 기준시가가 아닌, 매도자와 매수자가 실제로 거래하고 주고받은 매매가액을 기준으로 과세금액을 결정하는 원칙은?",
      level: "LEVEL 5",
      options: [
        { text: "실지거래가액 원칙", correct: true },
        { text: "기준시가 원칙" },
        { text: "시가표준액 원칙" },
        { text: "공시지가 원칙" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "양도소득세 계산 시, 토지나 건물을 3년 이상 장기 보유한 경우 보유 기간에 따라 양도차익의 일정 비율을 공제해 주어 세부담을 경감시켜주는 공제 제도는?",
      level: "LEVEL 5",
      options: [
        { text: "장기보유특별공제", correct: true },
        { text: "양도소득기본공제" },
        { text: "필요경비공제" },
        { text: "종합소득공제" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "양도소득이 있는 거주자에게 자산 그룹별(부동산등, 주식등, 파생상품등)로 각각 연간 250만 원씩 인적 공제 형식으로 세액 계산 전 일괄 차감해주는 공제 제도는?",
      level: "LEVEL 5",
      options: [
        { text: "양도소득기본공제", correct: true },
        { text: "장기보유특별공제" },
        { text: "표준공제" },
        { text: "특별세액공제" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "양도소득세를 계산할 때 취득가액, 취득 후 납부한 설비비·개량비, 중개수수료 및 신고서 작성 비용 등 양도차익에서 제외해주는 실제 발생 비용을 무엇이라 하는가?",
      level: "LEVEL 5",
      options: [
        { text: "필요경비", correct: true },
        { text: "기본비용" },
        { text: "사업소득경비" },
        { text: "매몰비용" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  6: [
    {
      question: "증권거래세법에 따라 부과되는 세금으로, 주식이나 지분을 유상으로 이전하는 매매거래에 대하여 양도가액을 기준으로 과세하는 조세는?",
      level: "LEVEL 6",
      options: [
        { text: "증권거래세", correct: true },
        { text: "양도소득세" },
        { text: "종합소득세" },
        { text: "취득세" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "증권거래세법상 과세대상이 되는 권리는 기업의 지분을 나타내는 무엇인가?",
      level: "LEVEL 6",
      options: [
        { text: "주식 또는 지분", correct: true },
        { text: "회사채" },
        { text: "국공채" },
        { text: "수익증권" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "거래의 형태에 따라 예탁결제원 또는 금융투자회사가 대행 납부하지 않고 개인이 사적으로 장외 거래를 하는 경우, 증권거래세를 스스로 신고 납부해야 하는 본래의 주체는?",
      level: "LEVEL 6",
      options: [
        { text: "양도인 (주식을 파는 사람)", correct: true },
        { text: "양수인 (주식을 사는 사람)" },
        { text: "발행법인" },
        { text: "중개 세무사" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "자본시장법에 따른 증권 시장 내의 장내 거래에서 매매결제 거래의 증권거래세를 일괄 원천징수하여 과세관청에 납부할 의무를 지는 국가 중앙 결제 기관은?",
      level: "LEVEL 6",
      options: [
        { text: "한국예탁결제원", correct: true },
        { text: "한국거래소" },
        { text: "금융결제원" },
        { text: "금융감독원" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "고객이 투자중개업자(증권사)를 통하여 장외에서 주식을 양도하는 거래를 한 경우, 해당 증권거래세를 매월 원천징수하여 세무서에 납부할 의무를 지는 기관은?",
      level: "LEVEL 6",
      options: [
        { text: "금융투자회사 (증권사)", correct: true },
        { text: "한국예탁결제원" },
        { text: "발행회사" },
        { text: "상업은행" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "일반적으로 개인이 증권사를 통하지 않고 비상장 주식을 서로 직접 매매하는 장외거래 시, 세법상 증권거래세를 자진 신고하고 실제 납부해야 하는 자는?",
      level: "LEVEL 6",
      options: [
        { text: "양도인", correct: true },
        { text: "양수인" },
        { text: "발행법인의 대표" },
        { text: "관할 세무서장" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "비거주자 또는 외국법인이 국내 주식을 매각했으나 국내에 지점이 없어 원천징수가 곤란한 예외적인 경우, 증권거래세법상 원천징수의무자가 되는 거래 주체는?",
      level: "LEVEL 6",
      options: [
        { text: "양수인", correct: true },
        { text: "양도인" },
        { text: "수탁은행" },
        { text: "예탁결제원" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "국내 법인이 발행한 주식을 뉴욕증권거래소나 런던증권거래소 등 해외거래소에 상장하여 양도하는 거래의 경우에도 증권거래세가 과세되는가?",
      level: "LEVEL 6",
      options: [
        { text: "과세 대상에 해당한다", correct: true },
        { text: "전적으로 면제된다" },
        { text: "해외 국가에만 세금을 낸다" },
        { text: "양도소득세만 내고 거래세는 없다" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "주식을 빌린 후 만기 시 동일 종목과 수량으로 반환하는 주식대차거래(소비대차)에 따른 주식의 반환 및 인도는 유상 이전이 아니므로 증권거래세 과세 대상인가?",
      level: "LEVEL 6",
      options: [
        { text: "유상 이전이 아니므로 비과세 대상이다", correct: true },
        { text: "반환 시에도 정상 거래세율로 과세된다" },
        { text: "이자소득으로 과세된다" },
        { text: "양도가액의 0.1%가 과세된다" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "한국거래소의 유가증권시장(KOSPI)이나 코스닥(KOSDAQ) 시장에 등록되어 상시 거래되는 주식을 총칭하는 표현은?",
      level: "LEVEL 6",
      options: [
        { text: "상장주식", correct: true },
        { text: "비상장주식" },
        { text: "유통증권" },
        { text: "장외주식" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  7: [
    {
      question: "전국적인 지점망을 가지고 불특정 다수의 일반 고객을 상대로 예금 및 대출 업무 등 상업적 금융 업무를 전문 수행하는 시중의 금융 기관은?",
      level: "LEVEL 7",
      options: [
        { text: "시중은행", correct: true },
        { text: "특수은행" },
        { text: "상호저축은행" },
        { text: "지방은행" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "정부의 특수 정책 목적(중소기업 지원, 국가 기간산업 육성, 수출입 금융 등)을 위해 특별법에 의해 설립되어 운영되는 예금 은행들을 통틀어 무엇이라 하는가?",
      level: "LEVEL 7",
      options: [
        { text: "특수은행", correct: true },
        { text: "시중은행" },
        { text: "인터넷전문은행" },
        { text: "투자은행" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "중소기업의 자금난 해소와 경영 지도를 위한 목적으로 중소기업은행법에 의해 설립된 대표적인 특수은행은?",
      level: "LEVEL 7",
      options: [
        { text: "IBK기업은행", correct: true },
        { text: "KDB산업은행" },
        { text: "한국수출입은행" },
        { text: "NH농협은행" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "국가의 대형 기간산업 개발 및 구조조정, 사회간접자본(SOC) 확충 자금 지원 등을 전담하는 목적으로 한국산업은행법에 따라 운영되는 국책 특수은행은?",
      level: "LEVEL 7",
      options: [
        { text: "KDB산업은행", correct: true },
        { text: "IBK기업은행" },
        { text: "한국수출입은행" },
        { text: "신한은행" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "국내 기업의 중장기 수출입 거래, 해외 투자 및 해외 자원 개발에 필요한 금융 자금 지원을 목적으로 설립된 수출입 전문 금융기관(특수은행)은?",
      level: "LEVEL 7",
      options: [
        { text: "한국수출입은행", correct: true },
        { text: "KDB산업은행" },
        { text: "IBK기업은행" },
        { text: "한국은행" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "농민에 대한 적정한 신용 공급과 농업 경쟁력 강화 및 농촌 경제 지원을 위해 농업협동조합법에 의거하여 신용사업 부문이 분리 설립된 특수은행 성격의 예금은행은?",
      level: "LEVEL 7",
      options: [
        { text: "NH농협은행", correct: true },
        { text: "Sh수협은행" },
        { text: "우체국예금" },
        { text: "신용협동조합" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "어민들의 권익 향상과 수산업 금융 지원을 위해 수산업협동조합법에 따라 설립되어 운영 중인 해양·수산 전문 특수은행은?",
      level: "LEVEL 7",
      options: [
        { text: "Sh수협은행", correct: true },
        { text: "NH농협은행" },
        { text: "새마을금고" },
        { text: "상호저축은행" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "지역 서민과 소상공인 및 중소기업의 금융 편의를 도모하고 저축을 증대하기 위해 상호저축은행법에 의해 인가 설립된 서민 금융기관은?",
      level: "LEVEL 7",
      options: [
        { text: "상호저축은행", correct: true },
        { text: "신용협동조합" },
        { text: "시중은행" },
        { text: "우체국" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "조합원들의 저축 증대와 금융 편의를 도모하기 위해 공동 유대를 기반으로 상호부조 성격으로 운영되는 비영리 협동조합 금융기관은?",
      level: "LEVEL 7",
      options: [
        { text: "신용협동조합 (신협)", correct: true },
        { text: "상호저축은행" },
        { text: "산업은행" },
        { text: "우체국예금" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "정부 기관인 과학기술정보통신부 우정사업본부가 직접 운영하며, 일반 시중은행과 달리 국가가 원리금의 전액 지급을 보장하는 공적 예금 제도는?",
      level: "LEVEL 7",
      options: [
        { text: "우체국예금", correct: true },
        { text: "상호저축은행" },
        { text: "특수은행" },
        { text: "지방은행" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  8: [
    {
      question: "만 19세 이상 거주자(또는 근로소득이 있는 만 15세~18세)라면 소득 유무와 상관없이 가입 가능한 표준형 개인종합자산관리계좌(ISA)의 명칭은?",
      level: "LEVEL 8",
      options: [
        { text: "일반형 ISA", correct: true },
        { text: "서민형 ISA" },
        { text: "농어민형 ISA" },
        { text: "청년형 ISA" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "근로소득 5,000만 원 이하 또는 종합소득 3,800만 원 이하 거주자가 가입할 수 있으며, 일반형보다 비과세 한도 혜택이 2배(400만 원 한도) 큰 ISA 유형은?",
      level: "LEVEL 8",
      options: [
        { text: "서민형 ISA", correct: true },
        { text: "일반형 ISA" },
        { text: "종합형 ISA" },
        { text: "농어민형 ISA" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "ISA 계좌를 개설하기 위한 기본 자격 요건으로, 1인 1계좌만 가능하며 가입 직전 3개년 동안 최소 1회 이상 어떤 대상자에 해당하지 않아야 하는가?",
      level: "LEVEL 8",
      options: [
        { text: "금융소득종합과세 대상자", correct: true },
        { text: "종합소득세 신고자" },
        { text: "근로소득 세액공제자" },
        { text: "비과세 저축 가입자" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "최근 3년 이내에 이자 및 배당소득의 합계액이 연간 2,000만 원을 초과하여 세법상 이 대상자로 지정된 이력이 있는 개인은 ISA 신규 가입이 제한되는데, 이 제도는?",
      level: "LEVEL 8",
      options: [
        { text: "금융소득종합과세", correct: true },
        { text: "분리과세종결" },
        { text: "원천징수단일화" },
        { text: "분류과세예외" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "서민형 ISA의 가입 요건을 판단할 때 기준이 되는 직전 과세기간 근로자의 비과세 소득을 제외한 총 급여액 한도는 얼마 이하인가?",
      level: "LEVEL 8",
      options: [
        { text: "5,000만 원", correct: true },
        { text: "3,000만 원" },
        { text: "6,000만 원" },
        { text: "7,000만 원" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "사업소득 등이 있는 자가 서민형 ISA에 가입하기 위해 충족해야 하는 직전 과세기간 종합소득금액 기준은 얼마 이하인가?",
      level: "LEVEL 8",
      options: [
        { text: "3,800만 원", correct: true },
        { text: "3,000만 원" },
        { text: "4,000만 원" },
        { text: "5,000만 원" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "ISA 계좌의 대표적인 혜택으로, 만기 해지 시 계좌 전체 순이익 중 일부(일반형 200만 원, 서민형 400만 원)에 대해 세금을 전혀 물리지 않는 효과는?",
      level: "LEVEL 8",
      options: [
        { text: "비과세 절세효과", correct: true },
        { text: "소득공제효과" },
        { text: "세액 감면효과" },
        { text: "이월과세효과" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "비과세 한도를 초과하여 발생한 ISA 내 금융 순이익에 대하여 종합소득세에 합산하지 않고 적용하는 저율의 원천분리과세율은 몇 %인가?",
      level: "LEVEL 8",
      options: [
        { text: "9.9% (지방세 포함)", correct: true },
        { text: "15.4% (지방세 포함)" },
        { text: "5.5% (지방세 포함)" },
        { text: "14% (지방세 포함)" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "ISA 계좌에 납입할 수 있는 자금의 연간 납입 한도와 5년간의 총 납입 한도는 각각 얼마인가?",
      level: "LEVEL 8",
      options: [
        { text: "연간 2,000만 원 / 총 1억 원", correct: true },
        { text: "연간 1,000만 원 / 총 5,000만 원" },
        { text: "연간 3,000만 원 / 총 1.5억 원" },
        { text: "연간 2,000만 원 / 총 5,000만 원" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "가입자가 금융기관에 자산 운용을 완전히 일임하여 전문가가 포트폴리오를 짜서 굴려주는 ISA의 운용 모델은?",
      level: "LEVEL 8",
      options: [
        { text: "일임형 ISA", correct: true },
        { text: "신탁형 ISA" },
        { text: "투자중개형 ISA" },
        { text: "자율방임형 ISA" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  9: [
    {
      question: "예금주가 인출을 요구하면 은행이 언제든지 즉시 이자를 정산하여 지급해야 하는 예금으로, 결제 및 자금 임시 보관 수단으로 주로 쓰이는 예금군은?",
      level: "LEVEL 9",
      options: [
        { text: "요구불예금", correct: true },
        { text: "저축성예금" },
        { text: "정기예약예금" },
        { text: "거치식예금" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "입출금이 자유로우며 가입대상이나 예치 금액, 기간에 아무런 제한이 없어 일반 대중이 급여 통장 등으로 가장 널리 이용하는 대표적인 요구불예금은?",
      level: "LEVEL 9",
      options: [
        { text: "보통예금", correct: true },
        { text: "당좌예금" },
        { text: "정기적금" },
        { text: "MMDA" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "기업이나 상인이 은행과 약정을 체결하여 수표나 어음을 발행하고, 이에 필요한 자금을 결제하기 위해 예치하는 기업 전용 요구불예금은?",
      level: "LEVEL 9",
      options: [
        { text: "당좌예금", correct: true },
        { text: "보통예금" },
        { text: "저축예금" },
        { text: "정기예금" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "가계 저축 활성화를 목적으로 법인이 아닌 개인에 한하여 가입할 수 있도록 고안되었으며, 일반 보통예금보다 다소 높은 금리를 제공하는 자유입출식 저축성 예금은?",
      level: "LEVEL 9",
      options: [
        { text: "저축예금", correct: true },
        { text: "보통예금" },
        { text: "당좌예금" },
        { text: "MMDA" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "은행이 취급하는 시장금리부 수시입출금식 예금으로, 예치 금액이 많을수록 시중의 실세 금리를 적용해 차등적으로 고금리를 지급하는 수시입출식 저축 상품은?",
      level: "LEVEL 9",
      options: [
        { text: "MMDA", correct: true },
        { text: "MMF" },
        { text: "CMA" },
        { text: "CD" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "은행이 발행하여 무기명으로 유통되는 정기예금증서로서, 배서 없이 자유롭게 제3자에게 양도 및 매매할 수 있는 시장성 단기 금융상품은?",
      level: "LEVEL 9",
      options: [
        { text: "CD (양도성예금증서)", correct: true },
        { text: "RP (환매조건부채권)" },
        { text: "CP (기업어음)" },
        { text: "표지어음" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "목돈을 마련한 고객이 이를 일정 기간(예: 1년) 동안 은행에 거치하여 보관하고 만기 시 약정한 높은 금리의 이자를 일시에 수령하는 가장 표준적인 저축성 예금은?",
      level: "LEVEL 9",
      options: [
        { text: "정기예금", correct: true },
        { text: "보통예금" },
        { text: "정기적금" },
        { text: "당좌예금" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "매월 일정한 날짜에 정기적(또는 수시)으로 일정 금액을 저축하여 만기 시 목돈을 수령하는 예금 상품으로, 적립식 저축의 대표 주자는?",
      level: "LEVEL 9",
      options: [
        { text: "적금", correct: true },
        { text: "예금" },
        { text: "신탁" },
        { text: "당좌" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "원금에 대하여 지급되는 이자의 비율로, 일반적으로 예금의 만기가 길고 예치 조건이 까다로워 유동성이 낮을수록 예금주에게 적용되는 수준이 높아지는 것은?",
      level: "LEVEL 9",
      options: [
        { text: "금리 (이자율)", correct: true },
        { text: "수익률" },
        { text: "보수율" },
        { text: "할인율" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "자산을 보유하고 있을 때 이를 손실 없이 현금으로 즉시 전환할 수 있는 용이성 혹은 안전성을 가리키는 금융 용어는?",
      level: "LEVEL 9",
      options: [
        { text: "유동성", correct: true },
        { text: "수익성" },
        { text: "안정성" },
        { text: "환금성" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  10: [
    {
      question: "기초자산인 주가지수(KOSPI200, S&P500 등)나 개별주식의 가격 변동에 연계하여 사전에 약정된 조건 충족 시 수익을 지급하는 증권회사 발행 파생결합증권은?",
      level: "LEVEL 10",
      options: [
        { text: "ELS", correct: true },
        { text: "ELD" },
        { text: "ELF" },
        { text: "ELB" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "고객이 예치한 원금은 정기예금에 넣어 안전하게 보장하고, 여기서 발생하는 이자 재원만을 활용하여 주가연계 옵션 파생상품에 투자하는 은행 취급 주가연계예금은?",
      level: "LEVEL 10",
      options: [
        { text: "ELD", correct: true },
        { text: "ELS" },
        { text: "ELF" },
        { text: "ELW" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "자산운용사가 다수의 ELS나 ELB 등 주가연계 파생상품을 포트폴리오로 편입하여 펀드 형태로 운용하며, 은행이나 증권사 창구에서 가입하는 주가연계펀드는?",
      level: "LEVEL 10",
      options: [
        { text: "ELF", correct: true },
        { text: "ELS" },
        { text: "ELD" },
        { text: "ETF" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "원금 보장성 여부를 판정할 때, 예금자보호법이 적용되고 은행이 100% 원금 지급 책임을 지는 구조로 설계되는 상품은?",
      level: "LEVEL 10",
      options: [
        { text: "ELD", correct: true },
        { text: "ELS" },
        { text: "ELF" },
        { text: "MBS" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "ELS나 ELF 상품의 보편적인 구조로서, 투자 기간 도중 기초자산이 약정 수준(Knock-in 배리어) 이하로 하락하여 하락 조건이 활성화될 경우 원금 손실을 입을 수 있는 특성은?",
      level: "LEVEL 10",
      options: [
        { text: "원금비보장형", correct: true },
        { text: "원금보장형" },
        { text: "예금자보호형" },
        { text: "정액지급형" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "ELD, ELS, ELF 중 예가원 예금자보호법에 의하여 금융기관별로 1인당 최대 5,000만 원까지 원리금이 유일하게 보호되는 상품은?",
      level: "LEVEL 10",
      options: [
        { text: "ELD", correct: true },
        { text: "ELS" },
        { text: "ELF" },
        { text: "모두 보호됨" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "50인 이상의 불특정 다수 대중을 대상으로 투자설명서를 금융위원회에 공시하여 신규 자금을 모집하는 청약 및 발행 방식은?",
      level: "LEVEL 10",
      options: [
        { text: "공모", correct: true },
        { text: "사모" },
        { text: "매출" },
        { text: "배정" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "투자설명서 공시 의무를 면제받고, 50인 미만의 특정 적격 투자자나 소수 연기금 등으로부터 비공개로 자금을 모집하여 신속히 발행하는 방식은?",
      level: "LEVEL 10",
      options: [
        { text: "사모", correct: true },
        { text: "공모" },
        { text: "상장" },
        { text: "공매" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "자본시장법에 따라 파생결합증권인 ELS를 직접 자기 신용과 책임 하에 구조화하여 발행하고 매도할 수 있는 주된 금융기관은?",
      level: "LEVEL 10",
      options: [
        { text: "증권사 (투자매매업 인가자)", correct: true },
        { text: "자산운용사" },
        { text: "상업은행" },
        { text: "신탁회사" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "채권, 주식, 옵션 등 여러 금융 요소를 수학적으로 결합하여 하락 방어 장치나 조건부 고수익 장치를 정교하게 설계한 인위적 금융 상품을 일컫는 말은?",
      level: "LEVEL 10",
      options: [
        { text: "구조화상품", correct: true },
        { text: "기초자산" },
        { text: "인덱스상품" },
        { text: "직접투자자산" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  11: [
    {
      question: "증권사가 발행하는 주가연계파생결합사채로, ELS와 구조가 유사하나 원금이 법적으로 보장되도록 설계된 사채 형태의 상품은? (단, 발행사 신용 위험 존재)",
      level: "LEVEL 11",
      options: [
        { text: "ELB", correct: true },
        { text: "ELS" },
        { text: "ELW" },
        { text: "DLB" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "특정 개별주식이나 주가지수를 만기 시점에 미리 정해진 가격(행사가격)으로 사거나 팔 수 있는 권리가 부여된 증권으로, 한국거래소 장내 상장 거래되는 상품은?",
      level: "LEVEL 11",
      options: [
        { text: "ELW (주식워런트증권)", correct: true },
        { text: "ELB" },
        { text: "ELS" },
        { text: "ETF" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "기초자산의 가격이 상승할 때 가치가 동반 상승하도록 설계되어, 만기에 기초자산을 행사가격으로 살 수 있는 매수 권리가 부여된 ELW는?",
      level: "LEVEL 11",
      options: [
        { text: "콜 ELW", correct: true },
        { text: "풋 ELW" },
        { text: "스트래들 ELW" },
        { text: "배리어 ELW" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "기초자산의 가격이 하락할 때 가치가 상승하도록 설계되어, 만기에 기초자산을 행사가격으로 팔 수 있는 매도 권리가 부여된 ELW는?",
      level: "LEVEL 11",
      options: [
        { text: "풋 ELW", correct: true },
        { text: "콜 ELW" },
        { text: "스왑 ELW" },
        { text: "낙아웃 ELW" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "투자자가 보유 중인 주식 포트폴리오의 가격 하락 위험을 상쇄하기 위해 반대 성격의 파생상품(예: 풋 ELW 매수 등)을 매수하는 위험 회피 거래는?",
      level: "LEVEL 11",
      options: [
        { text: "헤지 (Hedge)", correct: true },
        { text: "차익거래" },
        { text: "투기거래" },
        { text: "스프레드" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "소액의 프리미엄(증권 가치)만으로 고액의 기초자산을 통제함으로써 기초자산 가격 변동에 비해 펀드 가치 변동 비율이 극대화되는 파생상품 고유의 특성은?",
      level: "LEVEL 11",
      options: [
        { text: "레버리지 효과", correct: true },
        { text: "컨버전스 효과" },
        { text: "분산투자 효과" },
        { text: "롤오버 효과" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "ELW나 ELS 등 파생결합증권의 가치 변동을 결정하는 뼈대가 되는 대상 자산(예: 코스피 200, 삼성전자 주식 등)을 지칭하는 금융 용어는?",
      level: "LEVEL 11",
      options: [
        { text: "기초자산", correct: true },
        { text: "지배자산" },
        { text: "담보자산" },
        { text: "가치 기준원" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "ELW의 권리를 행사할 수 있는 마지막 최종일 또는 상품의 수명이 다하는 최종 기한을 무엇이라 하는가?",
      level: "LEVEL 11",
      options: [
        { text: "만기 (Expiry)", correct: true },
        { text: "행사기초일" },
        { text: "결정고지일" },
        { text: "청산거래일" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "ELW의 가격(프리미엄)을 산출할 때 핵심이 되는 요소로서, 기초자산과 행사가격의 차이로 표현되는 '내재가치'와 만기까지의 잔여 기간 동안 가격이 변동할 가능성에 대한 가치인 '이 가치'의 합으로 산정되는데, 이 가치는?",
      level: "LEVEL 11",
      options: [
        { text: "시간가치", correct: true },
        { text: "외재가치" },
        { text: "청산가치" },
        { text: "장부가치" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "투자자가 실제 주식을 빌려 매도하는 번거로운 공매도 절차를 거치지 않고도, 주가 하락 시 이익을 얻을 수 있는 ELW 매수 전략의 효과는?",
      level: "LEVEL 11",
      options: [
        { text: "공매도 대체 효과 (풋 ELW 매수)", correct: true },
        { text: "공매도 헤지 효과" },
        { text: "증액 자금 조달 효과" },
        { text: "유동성 제고 효과" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  12: [
    {
      question: "사람의 생명, 신체의 손상 또는 사망을 보험사고로 삼아, 사고 발생 시 미리 정해진 정액의 보험금을 지급하는 보험업법상의 대분류는?",
      level: "LEVEL 12",
      options: [
        { text: "생명보험", correct: true },
        { text: "손해보험" },
        { text: "제3보험" },
        { text: "재보험" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "우연한 사고로 생기는 실제 재산상의 손해(실손해)를 평가 및 보상하는 것을 목적으로 삼는 보험업법상 대분류는?",
      level: "LEVEL 12",
      options: [
        { text: "손해보험", correct: true },
        { text: "생명보험" },
        { text: "연금보험" },
        { text: "정액보험" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "피보험자가 언제 사망하더라도 기한 제한 없이 평생 동안 사망 위험을 보장하여 유가족에게 사망보험금을 확실히 지급하도록 설계된 보장성 생명보험 상품은?",
      level: "LEVEL 12",
      options: [
        { text: "종신보험", correct: true },
        { text: "정기보험" },
        { text: "교육보험" },
        { text: "변액유니버설보험" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "피보험자가 1인이 아니라 부부 등 2인 이상으로 지정되어, 피보험자 전원이 사망하거나 혹은 최초 사망자가 발생했을 때 보험금을 지급하는 연계형 보험은?",
      level: "LEVEL 12",
      options: [
        { text: "연생보험 (Joint Life Insurance)", correct: true },
        { text: "단생보험" },
        { text: "생존보험" },
        { text: "단체보험" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "인플레이션(물가상승)으로 인한 사망보험금의 실질가치 하락을 방어하기 위해, 매년 혹은 일정 주기마다 사망 보장 금액이 점진적으로 상승하도록 설계된 보험은?",
      level: "LEVEL 12",
      options: [
        { text: "체증형 보험", correct: true },
        { text: "체감형 보험" },
        { text: "평준형 보험" },
        { text: "정액형 보험" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "손해보험의 근간 원칙으로서, 피보험자에게 실제 발생한 재산상의 물질적 손해액만을 한도로 보상하여 보험을 통해 초과 이익을 얻지 못하게 차단하는 보상 원칙은?",
      level: "LEVEL 12",
      options: [
        { text: "실손보상의 원칙 (이득금지의 원칙)", correct: true },
        { text: "정액보상의 원칙" },
        { text: "상계처분의 원칙" },
        { text: "신의성실의 원칙" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "보험계약자가 납입하는 전체 보험료 중, 향후 발생할 보험사고 시 보험금 지급의 재원이 되는 위험보험료와 만기 환급의 재원이 되는 저축보험료의 합을 무엇이라 하는가?",
      level: "LEVEL 12",
      options: [
        { text: "순보험료", correct: true },
        { text: "부가보험료" },
        { text: "영업보험료" },
        { text: "적립보험료" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "보험회사가 보험 계약을 유지 및 운용하기 위해 사용하는 마케팅비, 수수료, 임직원 인건비 등 사업경비 조달용으로 순보험료에 추가 부과하는 보험료는?",
      level: "LEVEL 12",
      options: [
        { text: "부가보험료", correct: true },
        { text: "순보험료" },
        { text: "위험보험료" },
        { text: "해약보험료" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "보험회사가 고객의 보험료를 받아 만기나 사고 시까지 운용하여 낼 수 있을 것으로 상정하는 예상 할인율(예측 수익률)로, 이것이 오르면 보험료는 저렴해지는데, 이율 명칭은?",
      level: "LEVEL 12",
      options: [
        { text: "예정이율", correct: true },
        { text: "예정위험률" },
        { text: "공시이율" },
        { text: "최저보증이율" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "특정 집단의 성별, 연령별 통계를 바탕으로 향후 피보험자 군에서 발생할 사망률 또는 사고 확률을 예측한 비율로, 위험보험료 산정에 기초가 되는 지표는?",
      level: "LEVEL 12",
      options: [
        { text: "예정위험률", correct: true },
        { text: "예정이율" },
        { text: "예정사업비율" },
        { text: "기대생존율" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  13: [
    {
      question: "신탁 계약을 맺을 때 신탁재산을 수탁자에게 이전하고, 신탁 목적을 설정하여 재산의 운용을 의뢰하는 최초의 소유자(재산 설정자)는?",
      level: "LEVEL 13",
      options: [
        { text: "위탁자 (Settlor)", correct: true },
        { text: "수탁자" },
        { text: "수익자" },
        { text: "신탁 대리인" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "위탁자로부터 신탁재산을 법적으로 소유권 이전 받아 신탁 목적에 맞추어 선량한 관리자의 주의의무를 다해 신탁재산을 직접 관리·운용·처분하는 금융기관(신탁회사)은?",
      level: "LEVEL 13",
      options: [
        { text: "수탁자 (Trustee)", correct: true },
        { text: "위탁자" },
        { text: "수익자" },
        { text: "대주단" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "신탁재산의 관리 및 운용 결과로 발생하는 원리금 또는 이익을 수령할 법적 권리를 부여받은 자로, 계약 설정 시 위탁자 자신일 수도 있고 제3자일 수도 있는 대상은?",
      level: "LEVEL 13",
      options: [
        { text: "수익자 (Beneficiary)", correct: true },
        { text: "위탁자" },
        { text: "수탁자" },
        { text: "피보험자" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "위탁자가 신탁재산인 금전(현금)의 자산 운용 방법을 매우 구체적으로 지정하고, 수탁자는 오직 그 범위 내에서만 운용하도록 구속받는 대표적 신탁 상품 유형은?",
      level: "LEVEL 13",
      options: [
        { text: "특정금전신탁", correct: true },
        { text: "불특정금전신탁" },
        { text: "재산신탁" },
        { text: "관리신탁" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "위탁자와 수탁자 간에 신탁 목적, 신탁재산의 규모, 운용 방법 및 보수 등을 명확히 정하여 법적으로 체결하는 합의 계약서는?",
      level: "LEVEL 13",
      options: [
        { text: "신탁계약", correct: true },
        { text: "위임계약" },
        { text: "예약계약" },
        { text: "근저당계약" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "위탁자가 사망 전에 유언의 형식을 빌려 수탁자에게 자산 이전을 계약하고, 사후에 유가족 보호나 재산 분배를 수탁자가 이행하도록 하는 신탁 제도는?",
      level: "LEVEL 13",
      options: [
        { text: "유언신탁 (Will Trust)", correct: true },
        { text: "유가족신탁" },
        { text: "생전신탁" },
        { text: "복지신탁" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "특정금전신탁에서 위탁자가 수탁자인 신탁은행에게 '이 자금으로 특정 일자의 단기 CP를 얼마의 금리로 매입하라'고 구체적으로 내리는 행정 명령은?",
      level: "LEVEL 13",
      options: [
        { text: "운용지시", correct: true },
        { text: "위탁명령" },
        { text: "예탁요청" },
        { text: "처분결정" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "수탁자가 인수하여 소유권을 가지는 자산으로서, 수탁자의 고유 재산 및 타 신탁 자산과 철저히 격리(파산격리)되어 안전하게 보관되는 이 신탁 대상 자산은?",
      level: "LEVEL 13",
      options: [
        { text: "신탁재산", correct: true },
        { text: "고유재산" },
        { text: "압류재산" },
        { text: "영업자산" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "신탁재산의 실적 운용을 통해 얻은 수익금 및 이자 소득을 계약 조건에 따라 수익자에게 실제로 이전 배분해주는 행위를 무엇이라 하는가?",
      level: "LEVEL 13",
      options: [
        { text: "수익배당", correct: true },
        { text: "이자지급" },
        { text: "청산가산" },
        { text: "이익상환" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "위탁자가 부동산이나 증권이 아닌 오직 '현금(금전)'을 신탁재산으로 수탁회사에 이전하고 향후 금전으로 환산해 수령하는 보편적 신탁 유형은?",
      level: "LEVEL 13",
      options: [
        { text: "금전신탁", correct: true },
        { text: "금전외재산신탁" },
        { text: "부동산신탁" },
        { text: "지식재산권신탁" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  14: [
    {
      question: "자본시장법상 2인 이상의 투자자로부터 모은 자금 등을 투자자로부터 일상의 운용지시를 받지 아니하고 재산적 가치가 있는 자산을 취득·처분하여 배분하는 행위는?",
      level: "LEVEL 14",
      options: [
        { text: "집합투자 (펀드)", correct: true },
        { text: "개인자산임대" },
        { text: "일대일자산일임" },
        { text: "상호금융대차" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "자산운용사와 신탁업자 간의 신탁계약서에 기초하여 설립되는 계약형 펀드로서, 대한민국 일반 공모 펀드의 대다수(99%)를 차지하는 형태는?",
      level: "LEVEL 14",
      options: [
        { text: "투자신탁", correct: true },
        { text: "투자회사" },
        { text: "투자합자조합" },
        { text: "투자익명조합" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "주식회사 형태로 설립된 펀드로, 투자자가 주주로서 펀드 주식을 소유하며 주주총회와 이사회를 거치는 구조의 펀드(뮤추얼 펀드)는?",
      level: "LEVEL 14",
      options: [
        { text: "투자회사", correct: true },
        { text: "투자신탁" },
        { text: "투자유한회사" },
        { text: "투자합자회사" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "유한회사 형태로 설립되어 유한책임 사원으로만 구성된 자본시장법상의 집합투자기구 형태는?",
      level: "LEVEL 14",
      options: [
        { text: "투자유한회사", correct: true },
        { text: "투자회사" },
        { text: "투자신탁" },
        { text: "투자합자회사" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "무한책임사원(GP, 자산운용역)과 유한책임사원(LP, 투자자)으로 내부 지분이 구성된 합자회사 형태의 집합투자기구는?",
      level: "LEVEL 14",
      options: [
        { text: "투자합자회사", correct: true },
        { text: "투자익명조합" },
        { text: "투자신탁" },
        { text: "투자유한회사" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "영업자(운용사)와 익명조합원(투자자) 간의 상법상 익명조합 계약을 기초로 결성되어 이익을 분배하는 형태의 집합투자기구는?",
      level: "LEVEL 14",
      options: [
        { text: "투자익명조합", correct: true },
        { text: "투자합자회사" },
        { text: "투자유한책임회사" },
        { text: "투자신탁" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "투자신탁(계약형 펀드)에 가입한 투자자(수익자)의 분량 지분 권리를 표창하기 위해 신탁업자와 운용사가 발행하여 주는 유가증권은?",
      level: "LEVEL 14",
      options: [
        { text: "수익증권", correct: true },
        { text: "주식" },
        { text: "사채권" },
        { text: "출자배정서" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "자본시장법상 펀드(집합투자기구) 자산의 실제 운용과 매매 지시를 내리는 실무 주체인 자산운용회사의 정식 조세/법률 명칭은?",
      level: "LEVEL 14",
      options: [
        { text: "집합투자업자", correct: true },
        { text: "신탁업자" },
        { text: "투자매매업자" },
        { text: "자산관리회사" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "펀드 재산을 자신의 고유 재산과 격리하여 안전하게 금고에 보관하고 관리하며, 운용사의 매매 지시가 법규에 위배되는지 감시·감독하는 역할을 수행하는 신탁은행은?",
      level: "LEVEL 14",
      options: [
        { text: "신탁업자 (수탁회사)", correct: true },
        { text: "집합투자업자" },
        { text: "투자중개업자" },
        { text: "종합금융사" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "투자자들을 상대로 펀드 가입을 유치 및 설명하고 청약 업무를 실무 대행하여 수수료와 판매 보수를 취득하는 증권사나 은행 등의 금융기관 명칭은?",
      level: "LEVEL 14",
      options: [
        { text: "판매회사", correct: true },
        { text: "집합투자업자" },
        { text: "신탁업자" },
        { text: "일임업자" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  15: [
    {
      question: "펀드 재산의 50%를 초과하여 주식, 채권, 파생상품 등의 유가증권에 집중 투자하는 가장 대중적인 형태의 펀드는?",
      level: "LEVEL 15",
      options: [
        { text: "증권형 펀드", correct: true },
        { text: "부동산형 펀드" },
        { text: "특별자산형 펀드" },
        { text: "혼합자산형 펀드" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "펀드 재산의 50%를 초과하여 실제 부동산의 매입, 부동산 개발 사업 대출(PF), 부동산 관련 지분 증권 등에 투자하는 펀드는?",
      level: "LEVEL 15",
      options: [
        { text: "부동산형 펀드", correct: true },
        { text: "증권형 펀드" },
        { text: "특별자산형 펀드" },
        { text: "단기금융형 펀드" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "펀드 재산의 50%를 초과하여 원자재, 선박, 항공기, 탄소배출권, 지식재산권 등 유가증권과 부동산을 제외한 특수 실물 자산에 투자하는 펀드는?",
      level: "LEVEL 15",
      options: [
        { text: "특별자산형 펀드", correct: true },
        { text: "부동산형 펀드" },
        { text: "혼합자산형 펀드" },
        { text: "단기금융형 펀드" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "자본시장법상 편입 자산 종류에 제한 없이 증권, 부동산, 특별자산 등에 자유로운 비율로 교차 구성할 수 있도록 규제가 완화된 펀드는?",
      level: "LEVEL 15",
      options: [
        { text: "혼합자산형 펀드", correct: true },
        { text: "증권형 펀드" },
        { text: "부동산형 펀드" },
        { text: "특별자산형 펀드" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "펀드 재산 전부를 초단기 국공채, CD, RP 등 초저위험 단기 금융상품으로 운용하며, 수시 입출금이 가능하도록 설계된 MMF의 법정 분류 명칭은?",
      level: "LEVEL 15",
      options: [
        { text: "단기금융형 펀드 (MMF)", correct: true },
        { text: "증권형 펀드" },
        { text: "혼합자산형 펀드" },
        { text: "특별자산형 펀드" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "50인 이상의 불특정 다수 일반 투자자들을 상대로 청약을 받아 설립하며, 엄격한 공시 및 자산운용 비율 제약을 적용받는 펀드는?",
      level: "LEVEL 15",
      options: [
        { text: "공모펀드", correct: true },
        { text: "사모펀드" },
        { text: "전문조합" },
        { text: "구조화펀드" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "50인 미만의 특정 적격 고액자산가나 기관투자자들로부터만 비공개로 자금을 모아 자유롭게 고수익 고위험 자산에 운용하는 펀드는?",
      level: "LEVEL 15",
      options: [
        { text: "사모펀드", correct: true },
        { text: "공모펀드" },
        { text: "일반투자신탁" },
        { text: "상장지수펀드" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "투자신탁처럼 위탁자인 운용회사와 수탁자인 신탁업자 간의 3자 계약 관계에 따라 설정되는 계약형 펀드 분류는?",
      level: "LEVEL 15",
      options: [
        { text: "신탁형 펀드", correct: true },
        { text: "회사형 펀드" },
        { text: "조합형 펀드" },
        { text: "유한책임형 펀드" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "펀드 자체가 주식회사(투자회사)나 유한회사 등 별도의 법인격을 지니고 이사회 및 주주 자격을 기반으로 운영되는 펀드 형태는?",
      level: "LEVEL 15",
      options: [
        { text: "회사형 펀드", correct: true },
        { text: "신탁형 펀드" },
        { text: "조합형 펀드" },
        { text: "계약형 펀드" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "상법상 합자조합 계약이나 민법상 조합 계약에 기초하여 무한책임 조합원과 유한책임 조합원 간의 관계로 운영되는 펀드 형태는?",
      level: "LEVEL 15",
      options: [
        { text: "조합형 펀드", correct: true },
        { text: "신탁형 펀드" },
        { text: "회사형 펀드" },
        { text: "폐쇄형 펀드" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  16: [
    {
      question: "고객들의 단기 여유 자금을 모아 고금리 단기 어음(CP), 양도성예금증서(CD), 환매조건부채권(RP) 등에 투자하여 원금 손실을 최소화하면서 은행 예금처럼 수시 입출금을 보장하는 실적배당 펀드는?",
      level: "LEVEL 16",
      options: [
        { text: "MMF (Money Market Fund)", correct: true },
        { text: "ETF" },
        { text: "ELS" },
        { text: "REITs" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "MMF의 초단기 유동성을 보장하고 금리 급변동 리스크를 막기 위해, MMF가 편입한 전체 채무증권 자산의 가중평균 잔존만기(듀레이션)를 며칠 이내로 제약하는 법적 규제는?",
      level: "LEVEL 16",
      options: [
        { text: "75일 규정", correct: true },
        { text: "90일 규정" },
        { text: "30일 규정" },
        { text: "180일 규정" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "MMF의 포트폴리오 다변화를 위해, 단일 법인이 발행한 신용등급 AAA 이상 채무증권(회사채 등)을 MMF 전체 자산총액의 최대 몇 % 까지만 편입할 수 있도록 제약하는가?",
      level: "LEVEL 16",
      options: [
        { text: "40%", correct: true },
        { text: "10%" },
        { text: "20%" },
        { text: "30%" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "정부(국가)가 세입 부족 등을 메우거나 대형 국책 사업 예산 마련을 위해 법률에 의거하여 발행하며, MMF에서 신용 위험 제로의 초우량 안전자산으로 우선 편입하는 채권은?",
      level: "LEVEL 16",
      options: [
        { text: "국채", correct: true },
        { text: "회사채" },
        { text: "금융채" },
        { text: "수익증권" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "지방자치단체가 특별 시설 건설이나 지방 재원 조달을 위해 발행하는 우량 채권으로 MMF에 적극 편입 가능한 단기 채무증권은?",
      level: "LEVEL 16",
      options: [
        { text: "지방채", correct: true },
        { text: "국채" },
        { text: "회사채" },
        { text: "수익권증권" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "시중 예금은행이 정기예금에 기초하여 발행한 무기명의 단기 유통 금융증서로 MMF 자금의 단기 운용에 가장 많이 활용되는 상품은?",
      level: "LEVEL 16",
      options: [
        { text: "CD (양도성예금증서)", correct: true },
        { text: "CP (기업어음)" },
        { text: "사채권" },
        { text: "상업어음" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "매수자가 매도자에게 채권을 사고 일정한 단기 약정 기간(대개 하루) 후에 이자를 붙여 동일한 채권을 다시 파는 조건의 거래로, MMF의 초단기(익일물) 현금 운용 수단은?",
      level: "LEVEL 16",
      options: [
        { text: "RP (환매조건부채권)", correct: true },
        { text: "CD" },
        { text: "CP" },
        { text: "회사채" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "MMF의 매일의 기준가격 변동을 지나치게 요동치지 않게 하기 위해, 보유 자산의 남은 만기가 일정 기간 이내인 경우 회계상 시가가 아닌 최초 취득원가로 평가하는 기법은?",
      level: "LEVEL 16",
      options: [
        { text: "장부가 평가", correct: true },
        { text: "시가 평가" },
        { text: "공정가치 평가" },
        { text: "대체원가 평가" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "MMF의 단기 결제성 자산 안전성을 위해 자본시장법상 MMF 포트폴리오 편입을 철저히 금지하고 있는 자산군은?",
      level: "LEVEL 16",
      options: [
        { text: "주식 및 주식 관련 파생상품", correct: true },
        { text: "AAA 등급 은행채" },
        { text: "익일물 RP" },
        { text: "3개월 만기 국공채" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "투자자가 보유 중인 MMF 지분을 즉시 처분하여 현금화하는 과정으로, 대규모 뱅크런(환매 사태) 발생 시 펀드 붕괴를 막기 위해 환매 대금 지급이 정지 및 연기될 수 있는 절차는?",
      level: "LEVEL 16",
      options: [
        { text: "환매 (Redemption)", correct: true },
        { text: "설정" },
        { text: "배당" },
        { text: "양도" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  17: [
    {
      question: "특정 주가지수나 원자재 가격 등의 기초 인덱스 변동률을 그대로 추종하도록 설계되어, 거래소 주식 시장에 상장되어 실시간 주가로 상시 매매되는 펀드는?",
      level: "LEVEL 17",
      options: [
        { text: "ETF (상장지수펀드)", correct: true },
        { text: "MMF" },
        { text: "ELS" },
        { text: "헤지펀드" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "주식형 ETF가 특정 지수를 대표하고 종목 쏠림 리스크를 방지하기 위해, 법률상 포트폴리오 내에 최소 몇 종목 이상의 주식을 의무 편입해야 하는가?",
      level: "LEVEL 17",
      options: [
        { text: "10종목", correct: true },
        { text: "5종목" },
        { text: "20종목" },
        { text: "30종목" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "신규로 설정된 ETF는 자산 유동성과 시장 신뢰를 확보하기 위해, 최초 설정일로부터 며칠 이내에 거래소 시장에 의무적으로 상장되어야 하는가?",
      level: "LEVEL 17",
      options: [
        { text: "30일", correct: true },
        { text: "60일" },
        { text: "90일" },
        { text: "10일" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "특정 개별 주식 한 종목에 ETF 자산이 과도하게 쏠리지 않도록, 지수 구성 종목 중 단일 동일 종목이 차지하는 최대 비율을 몇 % 이내로 법정 제한하는가?",
      level: "LEVEL 17",
      options: [
        { text: "30%", correct: true },
        { text: "10%" },
        { text: "20%" },
        { text: "50%" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "ETF가 편입 가능한 한 법인(기업)이 발행한 주식의 총보유 비율을 ETF 전체 자산의 몇 % 이내로 제한하여 분산투자를 보장하는가?",
      level: "LEVEL 17",
      options: [
        { text: "20%", correct: true },
        { text: "10%" },
        { text: "30%" },
        { text: "40%" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "ETF의 순자산가치(NAV) 증가율과 ETF가 원래 추종하려는 복제 지수(벤치마크 인덱스) 변동률 간의 차이가 얼마나 벌어졌는가를 나타내는 추적 정밀도 지표는?",
      level: "LEVEL 17",
      options: [
        { text: "추적오차 (Tracking Error)", correct: true },
        { text: "괴리율" },
        { text: "샤프지수" },
        { text: "베타계수" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "ETF 시장에서 거래 유동성을 상시 공급하기 위해 거래소와 계약을 맺고 매도·매수 호가를 지속적으로 촘촘하게 제시하는 증권회사는?",
      level: "LEVEL 17",
      options: [
        { text: "시장조성자 (LP)", correct: true },
        { text: "지정참가회사 (AP)" },
        { text: "자산운용사" },
        { text: "중앙수탁원" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "기관투자자나 대형 자산가가 주식 시장 밖(장외)에서 지정참가회사(AP)를 매개로 현물 주식 바스켓과 ETF 지분을 직접 일대일 상호 교환하는 절차는?",
      level: "LEVEL 17",
      options: [
        { text: "설정 및 환매", correct: true },
        { text: "실시간 장내매매" },
        { text: "수익분배정산" },
        { text: "대체결제양도" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "ETF의 가치 척도가 되며 운용사가 복제하여 따라가고자 약정한 기초 주가지수나 원자재 복합 변수를 무엇이라 하는가?",
      level: "LEVEL 17",
      options: [
        { text: "인덱스 (기초지수)", correct: true },
        { text: "레버리지" },
        { text: "내재가치" },
        { text: "옵션프리미엄" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "추적오차가 너무 커 복제 능력을 유실했거나, 신탁 자산 규모가 50억 미만으로 장기 축소되어 원활한 거래가 어렵다고 판단될 때 거래소에서 상장을 취소하는 조치는?",
      level: "LEVEL 17",
      options: [
        { text: "상장폐지", correct: true },
        { text: "거래정지" },
        { text: "관리종목지정" },
        { text: "강제환매" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  18: [
    {
      question: "동일한 하나의 펀드 포트폴리오를 공유하면서 판매수수료 결제나 판매 보수의 비율 및 대상체계만 상이하게 구분하여 여러 개의 지분 종류로 나눈 클래스 펀드는?",
      level: "LEVEL 18",
      options: [
        { text: "종류형 펀드 (Class Fund)", correct: true },
        { text: "전환형 펀드" },
        { text: "모자형 펀드" },
        { text: "재간접형 펀드" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "가입자가 별도의 해지 수수료를 물지 않고 시장 변동에 따라 동일한 우산 아래 묶인 다른 하위 펀드로 적시에 갈아탈 수 있는 구조를 가진 펀드군은?",
      level: "LEVEL 18",
      options: [
        { text: "전환형 펀드 (Umbrella Fund)", correct: true },
        { text: "종류형 펀드" },
        { text: "모자형 펀드" },
        { text: "환매금지형 펀드" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "다수의 개별 펀드(자펀드)가 투자자로부터 모은 자금의 전부를 직접 투자하지 않고, 하나의 핵심적인 펀드(모펀드)에 투자해 운용 일원화를 기하는 펀드 구조는?",
      level: "LEVEL 18",
      options: [
        { text: "모자형 펀드 (Master-Feeder Fund)", correct: true },
        { text: "전환형 펀드" },
        { text: "종류형 펀드" },
        { text: "상장지수펀드" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "투자 기간 중 환매 청구에 즉각 응할 수 없도록 사전에 만기를 정해둔 폐쇄형 펀드로, 법률상 비유동성 자산(부동산, 특별자산 등)에 투자하는 펀드의 의무적 구조 형태는?",
      level: "LEVEL 18",
      options: [
        { text: "환매금지형 펀드 (폐쇄형 펀드)", correct: true },
        { text: "환매청구형 펀드" },
        { text: "개방형 펀드" },
        { text: "추가형 펀드" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "대량 환매 요청으로 펀드 유동성이 일시 고갈되거나 거래 정지 등으로 펀드 자산 평가가 불가할 때, 자산운용사가 임시 수익자총회를 소집하여 일정 기간 환매 대금 지급을 연기하는 조치는?",
      level: "LEVEL 18",
      options: [
        { text: "환매연기", correct: true },
        { text: "환매거부" },
        { text: "펀드청산" },
        { text: "이익유보" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "주식시장에서 일반 주식처럼 HTS/MTS를 통해 즉시 실시간으로 지분을 매매할 수 있도록 거래소 상장 의무가 부과된 상장지수 펀드의 정식 한글 표현은?",
      level: "LEVEL 18",
      options: [
        { text: "상장지수집합투자기구 (ETF)", correct: true },
        { text: "단기금융집합투자기구" },
        { text: "부동산전문펀드" },
        { text: "사모투자합자회사" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "모자형 펀드 구조에서, 일반 투자자가 창구에서 실제로 상품 설명을 듣고 직접 매수하여 돈을 입금하는 접점이 되는 하위 펀드는?",
      level: "LEVEL 18",
      options: [
        { text: "자펀드 (Feeder Fund)", correct: true },
        { text: "모펀드 (Master Fund)" },
        { text: "재간접펀드" },
        { text: "클래스펀드" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "자펀드들로부터 위금된 투자금을 모두 모아 실제로 국내외 주식이나 채권, 실물 자산 등을 장중 직접 매매하고 최종 포트폴리오를 관리 및 집행하는 모자형의 핵심 상위 펀드는?",
      level: "LEVEL 18",
      options: [
        { text: "모펀드 (Master Fund)", correct: true },
        { text: "자펀드 (Feeder Fund)" },
        { text: "우산형펀드" },
        { text: "클래스 A 펀드" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "전환형(우산형) 펀드에 소속된 투자자가 현 증시가 고점이라고 판단하여 기존 주식형 펀드 지분을 청산하고 동일 그룹 내 채권형 펀드로 이전을 공식 신청하는 행위는?",
      level: "LEVEL 18",
      options: [
        { text: "전환청구", correct: true },
        { text: "임의환매" },
        { text: "계약해지" },
        { text: "명의개서" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "자본시장법상 환매금지형 펀드는 투자자의 환금성을 지원하기 위하여 설정일로부터 최장 몇 일 이내에 증권시장에 상장되어 거래되도록 하여야 하는가?",
      level: "LEVEL 18",
      options: [
        { text: "90일", correct: true },
        { text: "30일" },
        { text: "60일" },
        { text: "180일" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  19: [
    {
      question: "기업이나 금융기관이 보유한 매출채권, 부동산 대출채권 등 비유동성 자산을 담보로 이를 자산관리 명목회사에 이전하고, 이를 기초로 유동화증권을 발행하여 자금을 조달하는 금융 기법은?",
      level: "LEVEL 19",
      options: [
        { text: "자산유동화 (ABS)", correct: true },
        { text: "부채유동화 (CDO)" },
        { text: "프로젝트 파이낸싱 (PF)" },
        { text: "자사주 매입 유동화" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "자산유동화(ABS) 과정에서 자산보유자의 도산(파산) 리스크가 담보 자산에 미치지 못하도록 법적으로 소유권을 안전하게 이전받아 격리(파산격리)시키는 특수목적 명목회사(페이퍼컴퍼니)는?",
      level: "LEVEL 19",
      options: [
        { text: "SPC (Special Purpose Company)", correct: true },
        { text: "AMC" },
        { text: "GP" },
        { text: "LP" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "ABS 발행의 담보가 되어 원리금 상환 재원인 미래 현금흐름을 유발하는 원천 자산들(예: 주택담보대출채권, 신용카드 대출채권 등)을 뜻하는 용어는?",
      level: "LEVEL 19",
      options: [
        { text: "기초자산 (Underlying Asset)", correct: true },
        { text: "위험자산" },
        { text: "담보물권" },
        { text: "신용보증물" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "ABS 담보 자산 풀(Pool)을 형성할 때 개별 자산들의 만기 구조, 대출이율, 연체율 등의 속성이 통계적으로 유사하여 미래 현금흐름을 예측하기 수월하도록 갖추어야 하는 특성은?",
      level: "LEVEL 19",
      options: [
        { text: "동질성 (Homogeneity)", correct: true },
        { text: "이질성" },
        { text: "독립성" },
        { text: "비체계성" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "ABS 증권의 최종 신용 등급을 자산보유자의 원래 자체 신용등급보다 대폭 높이기 위해, 발행 구조를 변경하거나 금융기관 보증을 추가하는 제반 절차는?",
      level: "LEVEL 19",
      options: [
        { text: "신용보강 (Credit Enhancement)", correct: true },
        { text: "채권구조조정" },
        { text: "대체결제" },
        { text: "지급유예" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "자산유동화 증권 발행 구조 자체를 선순위(Senior)와 후순위(Subordinated) 트랜치로 조립하고, 후순위 투자자가 먼저 손실을 감내하게 하는 자체 신용보강 방식은?",
      level: "LEVEL 19",
      options: [
        { text: "내부 신용보강", correct: true },
        { text: "외부 신용보강" },
        { text: "신용보험 보강" },
        { text: "지급보증 보강" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "제3의 은행이나 보증보험회사 등 우량 금융기관이 수수료를 받고 SPC가 발행하는 ABS에 대해 지급보증이나 신용공여를 제공해주는 신용보강 방식은?",
      level: "LEVEL 19",
      options: [
        { text: "외부 신용보강", correct: true },
        { text: "내부 신용보강" },
        { text: "자체 초과담보" },
        { text: "선후순위 구조" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "자산보유자가 넘긴 유동화 자산을 기초로 하여 증권회사나 SPC가 발행하는 자산유동화 기업어음(어음 형태로 발행하여 조달 기간 단축)의 정식 약어는?",
      level: "LEVEL 19",
      options: [
        { text: "ABCP", correct: true },
        { text: "MBS" },
        { text: "CDS" },
        { text: "CLN" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "신용카드 대금 매출채권처럼 잔존만기가 매우 짧은 채권들을 담보로 ABS를 발행할 때, 조기 상환 없이 만기 시까지 회수된 자금으로 새로운 카드 매출채권을 계속 반복 재매입해 편입하는 구조는?",
      level: "LEVEL 19",
      options: [
        { text: "리볼빙 구조 (Revolving structure)", correct: true },
        { text: "페이쓰루 구조 (Pass-through)" },
        { text: "페이아웃 구조" },
        { text: "원리금 자동상환 구조" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "자산보유자가 자산을 SPC에 진정양도(True Sale)하고, SPC는 이를 담보로 증권을 발행하여 투자자에게 매각하고 자금을 회수하는 일련의 자금 조달 메커니즘을 무엇이라 하는가?",
      level: "LEVEL 19",
      options: [
        { text: "유동화구조", correct: true },
        { text: "사업주신용대출" },
        { text: "주식연계구조" },
        { text: "상계거래구조" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  20: [
    {
      question: "퇴직연금제도 중 하나로, 근로자가 퇴직할 때 수령할 퇴직급여가 근무기간과 평균임금에 의해 사전에 법적으로 확정되어 있으며, 회사가 적립금을 직접 운용하고 성과 리스크를 전적으로 감당하는 유형은?",
      level: "LEVEL 20",
      options: [
        { text: "DB형 (확정급여형)", correct: true },
        { text: "DC형 (확정기여형)" },
        { text: "IRP (개인형)" },
        { text: "퇴직금제도" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "퇴직연금제도 중 하나로, 기업이 납입할 연간 부담금(연봉의 1/12 상당)이 고정 적립되며, 근로자가 자신의 계좌 내 적립금을 직접 책임지고 운용하며 실적 결과를 스스로 책임지는 유형은?",
      level: "LEVEL 20",
      options: [
        { text: "DC형 (확정기여형)", correct: true },
        { text: "DB형 (확정급여형)" },
        { text: "IRP (개인형)" },
        { text: "연금저축형" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "근로자가 이직하거나 조기 퇴직할 때 수령하는 퇴직금을 본인 명의 계좌로 이전받아 만 55세 연금 개시 시점까지 과세이월 혜택을 누리며 직접 납입·운용하는 개인형 퇴직연금 계좌는?",
      level: "LEVEL 20",
      options: [
        { text: "IRP (개인형 퇴직연금)", correct: true },
        { text: "DB형" },
        { text: "DC형" },
        { text: "종합자산관리계좌" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "퇴직연금제도 유지를 위해 회사와 근로자가 적립을 이행하는 자금으로, 특히 DC형 퇴직연금의 경우 연간 임금 총액의 12분의 1 이상에 해당하는 금액을 회사가 매년 납입해야 하는 비용은?",
      level: "LEVEL 20",
      options: [
        { text: "부담금", correct: true },
        { text: "퇴직기금" },
        { text: "영업기여금" },
        { text: "급여차감공제" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "근로자가 수년간 장기 근무한 직장으로부터 근로 관계를 해제하고 완전히 은퇴하거나 이직할 때 법정 산식에 따라 지급되는 급여는?",
      level: "LEVEL 20",
      options: [
        { text: "퇴직급여", correct: true },
        { text: "해고급여" },
        { text: "근로보장급여" },
        { text: "실업보조금" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "퇴직하기 전 퇴직연금 적립금을 미리 찾아 인출하는 행위로, DC형과 IRP에서 무주택자의 최초 주택 구입, 6개월 이상 요양 등 엄격한 법정 사유가 충족될 때만 허용되는 절차는?",
      level: "LEVEL 20",
      options: [
        { text: "중도인출", correct: true },
        { text: "임시해약" },
        { text: "이월상환" },
        { text: "지분매각" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "중도인출 사유와 유사하게, 퇴직연금 적립금을 금융기관에 담보로 제공하고 대출을 받아 유동성을 임시 확보하는 금융 행위는?",
      level: "LEVEL 20",
      options: [
        { text: "담보대출", correct: true },
        { text: "신용대출" },
        { text: "신탁인수" },
        { text: "퇴직급여 선지급" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "회사가 적립해주는 기본 퇴직금 자원 이외에, 세액공제 한도(최대 900만 원) 혜택을 추가로 누리기 위해 근로자 본인 예산으로 IRP 계좌에 자발적으로 자금을 불입하는 행위는?",
      level: "LEVEL 20",
      options: [
        { text: "추가납입", correct: true },
        { text: "기본불입" },
        { text: "임시출자" },
        { text: "연금이체" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "만 55세 이상 연금 가입자가 퇴직금을 일시에 전액 수령해 소모하지 않고, 매월 혹은 분기별로 일정한 산식 비율(연금수령한도) 내에서 분할하여 수급하는 연금 형태의 방식은?",
      level: "LEVEL 20",
      options: [
        { text: "연금수령", correct: true },
        { text: "일시금수령" },
        { text: "혼합수령" },
        { text: "이월지정수령" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "IRP 계좌에 개인이 추가 납입 시, 연금저축 납입액과 합쳐 연간 최대 900만 원 한도 내에서 12% 또는 15%의 소득 수준별 세액 환급 혜택을 제공하는 효과는?",
      level: "LEVEL 20",
      options: [
        { text: "세제혜택 (세액공제)", correct: true },
        { text: "비과세소득분류" },
        { text: "소득공제우대" },
        { text: "법인세감면" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  21: [
    {
      question: "부동산의 성격을 파악할 때 단순히 눈에 보이는 물리적 현황(기술적 개념)뿐만 아니라, 등기나 규제 등의 '법률적 개념', 그리고 자산 가치 등의 '경제적 개념'이 복합된 실체로 파악하는 관점은?",
      level: "LEVEL 21",
      options: [
        { text: "복합개념의 부동산", correct: true },
        { text: "복합부동산" },
        { text: "협의의 부동산" },
        { text: "광의의 부동산" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "법원 등기소의 공적 장부인 등기부등본에 부동산의 표제 정보 및 권리관계 소유권을 기재하여 제3자에게 외적으로 공시하는 법률 제도는?",
      level: "LEVEL 21",
      options: [
        { text: "부동산 등기", correct: true },
        { text: "부동산 점유" },
        { text: "대장등록" },
        { text: "확정일자" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "물건을 실제 사실상 지배하고 있는 물리적인 상태로서, 적법한 소유권 등기 여부와 상관없이 그 지배 사실 자체를 법률상 보호해 주는 민법상의 권리는?",
      level: "LEVEL 21",
      options: [
        { text: "점유권", correct: true },
        { text: "소유권" },
        { text: "지상권" },
        { text: "임차권" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "임시로 해둔 가등기에 대응하여, 본래 예고했던 소유권 변동이나 권리 설정 등의 최종적 효력을 정상적으로 온전히 관철시키는 등기 유형은?",
      level: "LEVEL 21",
      options: [
        { text: "본등기", correct: true },
        { text: "가등기" },
        { text: "말소등기" },
        { text: "이전등기" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "소유권 이전 청구권처럼 장래에 실행될 본등기의 권리 순위를 보존하기 위해, 등기부 상에 미리 예고 기재 형식으로 설정해 두는 예비적 등기는?",
      level: "LEVEL 21",
      options: [
        { text: "가등기", correct: true },
        { text: "본등기" },
        { text: "예고등기" },
        { text: "부기등기" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "타인의 토지나 건물을 일정한 범위 내에서 사용하고 수익할 수 있는 권리를 뜻하는 물권으로 지상권, 지역권, 전세권 등이 속하는 대분류는?",
      level: "LEVEL 21",
      options: [
        { text: "용익물권", correct: true },
        { text: "담보물권" },
        { text: "소유물권" },
        { text: "점유물권" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "채무자 소유의 부동산을 담보로 확보하여 채무 불이행 시 이를 매각(경매)하여 우선 변제받을 수 있는 담보 목적 물권으로 저당권, 유치권 등이 속하는 대분류는?",
      level: "LEVEL 21",
      options: [
        { text: "담보물권", correct: true },
        { text: "용익물권" },
        { text: "기타물권" },
        { text: "소유권" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "타인의 토지에 건물, 공작물 또는 수목을 소유하기 위하여 그 토지를 사용할 수 있는 권리를 갖는 용익물권은?",
      level: "LEVEL 21",
      options: [
        { text: "지상권", correct: true },
        { text: "지역권" },
        { text: "전세권" },
        { text: "임차권" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "전세금을 지급하고 타인의 부동산을 점유하여 사용·수익하며, 추후 전세금 반환 지체 시 후순위 채권자보다 우선변제를 받을 수 있는 물권은?",
      level: "LEVEL 21",
      options: [
        { text: "전세권", correct: true },
        { text: "임차권" },
        { text: "유치권" },
        { text: "지상권" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "채무자 또는 제3자가 점유를 채권자에게 이전하지 않고 채무의 담보로만 제공한 부동산에 대해, 채권자가 다른 채권자보다 자기 대출금을 우선 변제받을 수 있는 담보물권은?",
      level: "LEVEL 21",
      options: [
        { text: "저당권", correct: true },
        { text: "지상권" },
        { text: "지역권" },
        { text: "유치권" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  22: [
    {
      question: "부동산의 지번, 면적, 용도 등 물리적 현황과 소유권, 저당권 등 모든 법적 권리관계가 총망라되어 등기소에서 열람 및 발급이 가능한 대표적인 공부는?",
      level: "LEVEL 22",
      options: [
        { text: "부동산 등기부등본", correct: true },
        { text: "건축물대장" },
        { text: "토지대장" },
        { text: "지적도" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "등기부등본의 세부 구성 중, 부동산의 소유권에 관련된 법적 정보(소유주의 인적사항, 소유권 이전 내역, 압류, 가등기 등)가 기재되는 부문은?",
      level: "LEVEL 22",
      options: [
        { text: "갑구", correct: true },
        { text: "을구" },
        { text: "표제부" },
        { text: "근저당권설정부" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "등기부등본의 구성 중, 소유권 이외의 권리(저당권, 전세권, 임차권, 지상권 등 대출 담보 설정 현황)에 관한 정보가 상세히 기록되는 구역은?",
      level: "LEVEL 22",
      options: [
        { text: "을구", correct: true },
        { text: "갑구" },
        { text: "표제부" },
        { text: "대장부" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "해당 부동산 건물의 구조, 층수, 정확한 면적, 주차장 현황 등 등기부보다 더 자세하고 정확한 물리적 현황을 정부가 기록하여 보관하는 공적 대장은?",
      level: "LEVEL 22",
      options: [
        { text: "건축물대장", correct: true },
        { text: "토지대장" },
        { text: "지적도" },
        { text: "등기부등본" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "토지의 소재지, 지번, 지목(토지 용도), 실제 면적 및 세금의 기초가 되는 개별공시지가 등이 자세히 등록된 정부 공적 대장은?",
      level: "LEVEL 22",
      options: [
        { text: "토지대장", correct: true },
        { text: "건축물대장" },
        { text: "토지이용계획서" },
        { text: "임야도" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "각 필지(토지)의 경계선과 경계점, 지번, 도로망 배치 등을 알기 쉽도록 그림 지도로 표시해 놓은 토지 경계 확인용 공부는?",
      level: "LEVEL 22",
      options: [
        { text: "지적도", correct: true },
        { text: "토지대장" },
        { text: "건축물대장" },
        { text: "토지이용계획확인원" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "해당 토지에 어떤 건축 행위를 할 수 있는지 규제하는 용도지역, 용도지구, 용도구역과 공법상 개발 제한 요소를 미리 확인하기 위해 열람하는 서류는?",
      level: "LEVEL 22",
      options: [
        { text: "토지이용계획확인원", correct: true },
        { text: "토지대장" },
        { text: "지적도" },
        { text: "등기부등본" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "부동산 물권을 직접 사용, 수익, 처분할 수 있는 가장 절대적이고 기초적인 지배 권리를 가리키는 민법상의 소유 권한은?",
      level: "LEVEL 22",
      options: [
        { text: "소유권", correct: true },
        { text: "점유권" },
        { text: "저당권" },
        { text: "임차권" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "등기부등본상의 채권 액수와 가압류 유무를 파악하여, 소유권 이전 및 경매 시 낙찰자가 인수해야 할 리스크 금액을 분석하는 일련의 조사를 무엇이라 하는가?",
      level: "LEVEL 22",
      options: [
        { text: "권리관계 분석", correct: true },
        { text: "물리적 현황조사" },
        { text: "감정평가" },
        { text: "임대차조사" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "토지를 실제로 매입하거나 신축 공사를 할 때, 인접 토지와의 마찰을 줄이기 위해 도면상 경계와 땅의 실제 현황 경계를 일치시키는 현장 측량 및 대조 절차는?",
      level: "LEVEL 22",
      options: [
        { text: "경계확인", correct: true },
        { text: "권리분석" },
        { text: "형질변경" },
        { text: "토지분할" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  23: [
    {
      question: "부동산투자회사(REITs) 유형 중, 상근 임직원을 실제로 직접 채용하여 두고 조달한 자금의 부동산 투자를 자체 내에서 전담하여 실행하는 실체회사 형태는?",
      level: "LEVEL 23",
      options: [
        { text: "자기관리리츠", correct: true },
        { text: "위탁관리리츠" },
        { text: "기업구조조정리츠 (CR리츠)" },
        { text: "부동산전문펀드" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "본사는 명목상의 페이퍼컴퍼니 형태로 존재하며, 자금 조달 후 자산의 실제 투자 및 운용을 전문 자산관리회사(AMC)에 의무적으로 위탁하는 리츠 유형은?",
      level: "LEVEL 23",
      options: [
        { text: "위탁관리리츠", correct: true },
        { text: "자기관리리츠" },
        { text: "다각화리츠" },
        { text: "인프라리츠" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "부채 상환 압박을 받는 기업들의 구조조정용 부동산 매물을 전문 매입하여 운용하며, 위탁관리처럼 명목회사 구조를 취하고 AMC에 위탁하는 리츠 유형은?",
      level: "LEVEL 23",
      options: [
        { text: "CR리츠 (기업구조조정리츠)", correct: true },
        { text: "자기관리리츠" },
        { text: "위탁관리리츠" },
        { text: "개발리츠" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "리츠 회사가 설립 등기를 마친 후 본격적인 일반 투자자 대상 영업 및 자산 편입을 개시하기 위해 국토교통부장관으로부터 필히 득해야 하는 인허가 절차는?",
      level: "LEVEL 23",
      options: [
        { text: "영업인가 (또는 등록)", correct: true },
        { text: "사업계획승인" },
        { text: "유가증권등록" },
        { text: "금융위신고" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "위탁관리리츠 및 CR리츠의 위탁 계약에 따라, 부동산의 매입, 매각, 개발, 임대 관리 등 모든 운용 실무를 도맡아 대행하는 전문 금융기관 법인은?",
      level: "LEVEL 23",
      options: [
        { text: "자산관리회사 (AMC)", correct: true },
        { text: "투자자문사" },
        { text: "자산운용사" },
        { text: "신탁은행" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "리츠의 자금 독점 방지와 대중성 확보를 위해, 설립(영업인가) 후 주식 총수의 일정 비율(예: 30%) 이상을 의무적으로 일반 대중에게 청약 공모하도록 유도하는 법적 규제는?",
      level: "LEVEL 23",
      options: [
        { text: "공모의무 규정", correct: true },
        { text: "의결권제한 규정" },
        { text: "주식분산의무 규정" },
        { text: "대주주지분락 규정" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "리츠의 과도한 레버리지로 인한 도산 위험을 막기 위해, 부동산투자회사법상 리츠가 조달할 수 있는 차입금 및 사채 발행 한도를 자기자본의 몇 배 이내로 제한하는가? (원칙 기준)",
      level: "LEVEL 23",
      options: [
        { text: "2배", correct: true },
        { text: "5배" },
        { text: "10배" },
        { text: "1배" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "법인세 면제 혜택을 온전히 적용받기 위해, 리츠가 매 사업연도 배당가능이익의 최소 몇 % 이상을 주주에게 의무적으로 현금 배당하여야 하는가?",
      level: "LEVEL 23",
      options: [
        { text: "90%", correct: true },
        { text: "50%" },
        { text: "70%" },
        { text: "80%" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "대한민국 리츠(부동산투자회사)의 설립 요건, 자산운용 의무, 최저자본금 조건 등을 세세히 규율하는 특별 감독 법률은?",
      level: "LEVEL 23",
      options: [
        { text: "부동산투자회사법", correct: true },
        { text: "자본시장법" },
        { text: "신탁법" },
        { text: "건축법" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "리츠 지분을 일반 상장주식과 똑같이 매일 거래소 거래 가격으로 소액 실시간 매매할 수 있도록 상장한 기업 형태의 리츠를 무엇이라 하는가?",
      level: "LEVEL 23",
      options: [
        { text: "상장리츠", correct: true },
        { text: "사모리츠" },
        { text: "재간접리츠" },
        { text: "혼합리츠" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  24: [
    {
      question: "시행자(사업주)의 고유 신용도나 담보 물건 대신, 부동산 개발 등 특정 프로젝트에서 발생할 장래 현금흐름과 완성될 건물 자산을 유일한 담보로 삼아 거액의 개발 자금을 대출해주는 특수 금융 기법은?",
      level: "LEVEL 24",
      options: [
        { text: "프로젝트 파이낸싱 (PF)", correct: true },
        { text: "기업신용대출" },
        { text: "ABS 유동화" },
        { text: "저당대부" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "프로젝트 파이낸싱의 핵심 성격으로, 개발 프로젝트가 도중에 무산·실패하더라도 금융 대주단(채권자)이 사업주의 고유 자산이나 본사에 대해 원래 대출금 상환을 추가 요구할 수 없는 비소급 대출의 성격은?",
      level: "LEVEL 24",
      options: [
        { text: "비소구금융", correct: true },
        { text: "완전소구금융" },
        { text: "제한소구금융" },
        { text: "신용공여금융" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "현실적인 한국의 PF 환경에서, 완전한 비소구금융의 리스크를 피하기 위해 대주단이 사업주(시행사)에게 추가적인 보증이나 자금 부족 시 무조건적인 대여 의무를 부과하는 구조는?",
      level: "LEVEL 24",
      options: [
        { text: "제한소구금융", correct: true },
        { text: "비소구금융" },
        { text: "일방소구금융" },
        { text: "무제한신용금융" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "시공사(건설사)가 공사 도중 부도가 나거나 공사비 분쟁이 생기더라도, 금융 대주단에게 약속된 기한 내에 건물을 무조건 책임지고 완공할 것을 약정하는 강력한 신용보강 장치는?",
      level: "LEVEL 24",
      options: [
        { text: "책임준공 확약", correct: true },
        { text: "책임분양 확약" },
        { text: "자금보충 약정" },
        { text: "연대보증 약정" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "시행사가 미분양이 발생하여 대출 상환금이 부족할 시, 시공사나 시행 주체가 남은 미분양 물량을 본인 예산으로 직접 매수(인수)할 것을 대주단에 보장하는 약정은?",
      level: "LEVEL 24",
      options: [
        { text: "책임분양 약정", correct: true },
        { text: "책임준공 약정" },
        { text: "자금보충 약정" },
        { text: "저당권 설정" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "PF 사업장 리스크 분담을 위해 모기업 시공사가 시행사(SPC)가 차입한 대출금 채무 상환 채무에 대해 연대하여 지급 책임을 지기로 확약하는 보증 방식은?",
      level: "LEVEL 24",
      options: [
        { text: "연대보증", correct: true },
        { text: "자금보충" },
        { text: "책임준공" },
        { text: "담보신탁" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "PF 사업 진행 중 일시적인 유동성 위기나 금리 상승으로 SPC의 자금이 고갈되어 대출 이자 등이 체납될 때, 사업주가 자금을 즉각 무이자로 대여하거나 지분을 납입해 자금을 충당해주는 약정은?",
      level: "LEVEL 24",
      options: [
        { text: "자금보충 약정", correct: true },
        { text: "연대보증 약정" },
        { text: "책임준공 확약" },
        { text: "부동산 신탁" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "부동산 PF 개발에서 사업 대상 토지의 소유권을 신탁회사에 이전하고 신탁회사로부터 수익권증서를 교부받아, 이를 금융 대주단에 최우선 순위 담보로 제공하는 신탁 모델은?",
      level: "LEVEL 24",
      options: [
        { text: "담보신탁", correct: true },
        { text: "관리신탁" },
        { text: "분양관리신탁" },
        { text: "처분신탁" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "PF 대출 실행 시 대주단이 개발 토지나 차후 세워질 완공 건물 등에 대해 설정하여 두는 강력한 물적 담보권은?",
      level: "LEVEL 24",
      options: [
        { text: "근저당권 (저당권)", correct: true },
        { text: "지상권" },
        { text: "질권" },
        { text: "유치권" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "PF 사업 전반에 내재된 불확실성으로서, 토지 인허가 지연, 공사비 폭등에 따른 시공사 공사중단, 분양률 저하에 따른 부도 가능성 등을 총칭하는 말은?",
      level: "LEVEL 24",
      options: [
        { text: "PF 위험", correct: true },
        { text: "인프라 위험" },
        { text: "체계적 위험" },
        { text: "금리 위험" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  25: [
    {
      question: "경영 참여형 사모펀드(PEF)의 무한책임사원으로서, 자금을 제공받아 실제로 피투자 기업의 경영권을 인수하고 펀드를 총괄 책임 운용하는 주체는?",
      level: "LEVEL 25",
      options: [
        { text: "GP (General Partner)", correct: true },
        { text: "LP (Limited Partner)" },
        { text: "SI (Strategic Investor)" },
        { text: "FI (Financial Investor)" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "PEF의 투자 주체 중 하나로, 펀드에 대규모 자금만을 위탁하고 실제 경영권 관여 의무는 일체 배제되며 자신의 출자 비율 한도 내에서 유한 책임만 지는 재무 투자자는?",
      level: "LEVEL 25",
      options: [
        { text: "LP (Limited Partner)", correct: true },
        { text: "GP (General Partner)" },
        { text: "CEO" },
        { text: "인수금융단" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "PEF가 대상 기업의 주식 지분 과반수와 경영권을 함께 패키지로 사들여서, 기업 체질 개선과 가치 극대화를 거친 후 고가에 매각하는 주된 사모펀드 투자 전략은?",
      level: "LEVEL 25",
      options: [
        { text: "바이아웃 (Buyout)", correct: true },
        { text: "메자닌 투자" },
        { text: "벤처 투자" },
        { text: "부실채권 투자" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "PEF가 인수한 피투자 기업 주식을 재매각(매도)하거나 기업을 증시에 상장시켜 투자금을 현금 형태로 안전하게 원리금 환수하는 퇴출 출구 단계는?",
      level: "LEVEL 25",
      options: [
        { text: "투자회수 (Exit)", correct: true },
        { text: "투자집행 (Call)" },
        { text: "출자완료" },
        { text: "기업인수 (Buy)" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "비상장 상태인 피투자 기업의 지분을 주식 시장에 기업 공개 형식으로 신규 등록하여, 대중 주주들에게 주식을 매도함으로써 PEF의 투자 자금을 회수하는 기법은?",
      level: "LEVEL 25",
      options: [
        { text: "IPO (기업공개)", correct: true },
        { text: "M&A" },
        { text: "블록딜" },
        { text: "증자" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "PEF가 인수한 기업을 다른 대기업이나 동종 전략적 투자자(SI)에게 지분 통째로 재매각하여 경영권을 매각 이전하는 투자회수 방식은?",
      level: "LEVEL 25",
      options: [
        { text: "M&A (인수합병)", correct: true },
        { text: "IPO" },
        { text: "유상감자" },
        { text: "배당수령" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "PEF가 인수 기업에 축적된 유동현금 잉여금을 만기 엑싯 전에 회수하기 위해, 기업의 자본금을 인위적으로 축소하고 감소된 가액만큼을 본인 계좌로 인출 수령하는 절차는?",
      level: "LEVEL 25",
      options: [
        { text: "유상감자", correct: true },
        { text: "무상감자" },
        { text: "배당가산" },
        { text: "주식소각" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "사모투자합자회사(PEF)의 구성원 중, 채무 불이행 시 자신의 고유 재산 전부를 털어 펀드 전체 빚에 대해 무한대의 배상 변제 의무를 지는 GP를 무엇이라 하는가?",
      level: "LEVEL 25",
      options: [
        { text: "무한책임사원", correct: true },
        { text: "유한책임사원" },
        { text: "감사사원" },
        { text: "등기이사" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "소수의 특정 고액 개인 자산가(예: 3억 이상)나 연기금 등 기관들로부터 자금을 은밀히 모집하여 결성하는 비공개 형식의 투자 펀드는?",
      level: "LEVEL 25",
      options: [
        { text: "사모펀드 (Private Equity Fund)", correct: true },
        { text: "공모펀드" },
        { text: "뮤추얼펀드" },
        { text: "소액적립식펀드" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "자본시장법상 일반적인 투자 목적 펀드와 달리, PEF는 피투자 기업 지분 10% 이상을 의무 취득하여 이사회 장악이나 경영진 교체 등 어떤 행위를 반드시 수반해야 하는가?",
      level: "LEVEL 25",
      options: [
        { text: "경영참여", correct: true },
        { text: "단순시세차익추구" },
        { text: "우회상장" },
        { text: "계열사합병" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  26: [
    {
      question: "헤지펀드의 대표적인 전략으로 주가 하락이 강하게 예상되는 자산 주식을 빌려서 매도한 뒤, 나중에 하락 시 싼값에 되사 갚음으로써 하락 차익을 실현하는 기법은?",
      level: "LEVEL 26",
      options: [
        { text: "공매도 (Short Selling)", correct: true },
        { text: "롱 전략" },
        { text: "스왑" },
        { text: "선물매수" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "저평가된 주식은 사고(Long), 동시에 동종 고평가된 주식은 빌려 매도(Short)하는 방식을 조합하여 증시 전체 변동 리스크를 완전 중화시키는 시장 중립 전략은?",
      level: "LEVEL 26",
      options: [
        { text: "롱숏 전략 (Long/Short)", correct: true },
        { text: "매크로 전략" },
        { text: "채권중립 전략" },
        { text: "이벤트 드리븐" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "인수합병(M&A), 구조조정, 기업 분사, 부도 등 기업 경영상의 중대한 재무적 특수 국면(Event)이 도래할 때, 발생하는 주가 왜곡을 이용하여 차익을 취하는 헤지펀드 전략은?",
      level: "LEVEL 26",
      options: [
        { text: "이벤트 드리븐 (Event-Driven)", correct: true },
        { text: "글로벌 매크로" },
        { text: "채권차익거래" },
        { text: "추세추종전략" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "M&A 대상 기업이 발표된 후, 피인수 기업의 주가는 오르고 인수 기업의 주가는 하락하는 갭을 포착하여, 피인수사는 롱(매수)하고 인수사는 쇼트(매도)하여 변동 리스크를 중화시키는 차익거래 기법은?",
      level: "LEVEL 26",
      options: [
        { text: "합병차익거래 (Merger Arbitrage)", correct: true },
        { text: "전환차익거래" },
        { text: "금리차익거래" },
        { text: "시장간 차익거래" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "발행 기업의 고평가된 주식은 공매도(Short)하고, 동시에 저평가된 전환사채(CB)를 매수(Long)하여, 주가 하락 시 채권 보호를 받고 상승 시 전환권 행사 차익을 추구하는 리스크 헤지 전략은?",
      level: "LEVEL 26",
      options: [
        { text: "전환차익거래 (Convertible Arbitrage)", correct: true },
        { text: "합병차익거래" },
        { text: "채권차익거래" },
        { text: "통화차익거래" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "만기 구조나 발행 주체 신용도가 거의 유사한 국공채 채권들 간에 일시적으로 발생하는 가격 괴리(스프레드)를 이용해 상대적으로 비싼 것을 매도하고 싼 것을 매입해 갭 축소 시 청산하는 무위험 전략은?",
      level: "LEVEL 26",
      options: [
        { text: "채권차익거래 (Fixed Income Arbitrage)", correct: true },
        { text: "전환차익거래" },
        { text: "글로벌 매크로" },
        { text: "롱숏 전략" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "세계 각국의 경제 지표(금리, 환율, 경상수지, 인플레이션 등) 거시 흐름을 수학적으로 예측하여 글로벌 통화, 금리 선물, 주가 지수 등에 거액을 직접 방향성 투입하는 헤지펀드 전략은?",
      level: "LEVEL 26",
      options: [
        { text: "글로벌 매크로 (Global Macro)", correct: true },
        { text: "CTA 전략" },
        { text: "이벤트 드리븐" },
        { text: "합병차익거래" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "상품 및 금융 선물거래소에서 시장의 가격 추세를 수학적 알고리즘 프로그램으로 추적 분석하여, 상승 추세에서는 선물 매수, 하락 시 매도 등 컴퓨터가 자동 집행하는 전략 또는 투자 업자는?",
      level: "LEVEL 26",
      options: [
        { text: "CTA (Commodity Trading Advisor)", correct: true },
        { text: "글로벌 매크로" },
        { text: "시장조성자" },
        { text: "일임자문사" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "헤지펀드가 보유 원금의 수배에서 수십 배에 달하는 포지션을 취할 수 있도록 은행 대출(인수금융)이나 파생 계약을 지렛대 삼아 투자 규모와 변동률을 극대화시키는 기법은?",
      level: "LEVEL 26",
      options: [
        { text: "레버리지 (Leverage)", correct: true },
        { text: "헤지" },
        { text: "롤오버" },
        { text: "마진콜" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "보유 포티폴리오의 주가 하락이나 환율 요동에 의한 손실을 차단하기 위해, 반대 방향의 풋옵션 매수나 선물 쇼트 포지션을 설정하여 위험을 철저히 상쇄해두는 방어적 조치는?",
      level: "LEVEL 26",
      options: [
        { text: "헤지 (Hedge)", correct: true },
        { text: "레버리지" },
        { text: "투기" },
        { text: "스프레드차익" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  27: [
    {
      question: "채권의 신용 위험(부도 위험)만을 본래 채권 본체에서 분리하여 스왑 형식으로 거래하는 신용파생상품으로, 부도 시 손실 배상을 약정하고 보험금 성격의 프리미엄을 정기 납입하는 계약은?",
      level: "LEVEL 27",
      options: [
        { text: "CDS (신용부도스왑)", correct: true },
        { text: "CDO" },
        { text: "CLN" },
        { text: "TRS" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "회사채, 기업 대출채권, 혹은 신용부도스왑(CDS) 계약 등을 기초자산 자산 풀(Pool)로 구성하고, 이를 담보 삼아 발행하는 신용 연계 구조화 채권은?",
      level: "LEVEL 27",
      options: [
        { text: "CDO (부채담보부증권)", correct: true },
        { text: "CDS" },
        { text: "CLN" },
        { text: "TRS" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "일반 채권에 CDS(신용부도스왑) 파생 조항을 결합한 채권 형태로, 참조 기업의 부도나 워크아웃 등 신용 사건이 터질 시 채권 원금 전액(또는 일부)이 삭감 소멸되는 위험 사채는?",
      level: "LEVEL 27",
      options: [
        { text: "CLN (신용연계채권)", correct: true },
        { text: "CDO" },
        { text: "TRS" },
        { text: "MBS" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "실제 현물 채권이나 대출을 자산 풀에 직접 담보로 보유하지 않는 대신, 기초자산에 대한 신용 위험 보험인 CDS 계약들만으로 현금 흐름 담보를 대체하여 조립 발행한 특수 CDO 유형은?",
      level: "LEVEL 27",
      options: [
        { text: "합성 CDO (Synthetic CDO)", correct: true },
        { text: "현물 CDO" },
        { text: "하이브리드 CDO" },
        { text: "CLN 연계 CDO" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "자산의 소유권을 완전 이전하지 않은 채, 자산에서 나오는 총이익(배당/이자 및 가치변동분)과 약정 금리(리보금리+가산금리)를 주기적으로 서로 정환 교환하는 일대일 계약 스왑은?",
      level: "LEVEL 27",
      options: [
        { text: "TRS (총수익스왑)", correct: true },
        { text: "CDS" },
        { text: "IRS" },
        { text: "CRS" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "신용파생상품에서 보장매도자가 가장 우려하는 핵심 리스크로서, 준거 기업이나 차입자가 부도, 회생, 파산 등을 내어 만기 원리금을 상환하지 못해 발생하는 손실 위험은?",
      level: "LEVEL 27",
      options: [
        { text: "신용위험 (Credit Risk)", correct: true },
        { text: "시장위험" },
        { text: "운영위험" },
        { text: "결제위험" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "신용 파생상품 및 구조화 자산 가치가 시중 금리 폭등, 기초자산 지수 왜곡 등 통제 불가의 시장 거시 지표 요동으로 인하여 동반 하락하는 리스크는?",
      level: "LEVEL 27",
      options: [
        { text: "시장위험 (Market Risk)", correct: true },
        { text: "신용위험" },
        { text: "법률위험" },
        { text: "유동성위험" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "CDO 등의 신용 구조화 채권 발행 시, 부도 손실을 가장 먼저 100% 떠안는 가장 후순위의 초고위험 트랜치로, 고위험 감수 대가로 대단히 높은 청산 배당 배수를 주는 영역은?",
      level: "LEVEL 27",
      options: [
        { text: "에퀴티 트랜치 (Equity Tranche)", correct: true },
        { text: "메자닌 트랜치" },
        { text: "시니어 트랜치" },
        { text: "하이일드 트랜치" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "CDO 발행 트랜치 분류에서 가장 안전한 선순위와 가장 위험한 에퀴티의 중간에 끼어 있으며, BBB~BB 수준의 신용 등급을 부여받아 중간 위험과 수익을 제공하는 부분은?",
      level: "LEVEL 27",
      options: [
        { text: "메자닌 트랜치 (Mezzanine Tranche)", correct: true },
        { text: "에퀴티 트랜치" },
        { text: "시니어 트랜치" },
        { text: "선순위 보증부" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "CDO 등 구조화 증권에서 부도 손실 변제 순위가 최고 최선순위여서 기초자산 부도가 크게 터져도 가장 마지막까지 원금을 전액 방어받는, 주로 AAA등급을 득하는 부분은?",
      level: "LEVEL 27",
      options: [
        { text: "시니어 트랜치 (Senior Tranche)", correct: true },
        { text: "메자닌 트랜치" },
        { text: "에퀴티 트랜치" },
        { text: "후순위 트랜치" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  28: [
    {
      question: "미국의 모건스탠리 캐피털 인터내셔널이 산출하여 배포하는 주가 지수로, 전 세계 글로벌 기관투자자들이 펀드 벤치마크 및 해외 투자 결정에 최고 공신력으로 추종하는 지수 브랜드는?",
      level: "LEVEL 28",
      options: [
        { text: "MSCI 지수", correct: true },
        { text: "FTSE 지수" },
        { text: "Dow Jones 지수" },
        { text: "S&P 지수" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "MSCI 세계 주가지수 대분류 중, 한국, 중국, 인도, 브라질 등 신흥국 국가들의 우량 상장 주식들로 가중 산출되어 국내 증시에 글로벌 자금이 유입될 때 중추 지표가 되는 지수는?",
      level: "LEVEL 28",
      options: [
        { text: "MSCI EM (Emerging Markets)", correct: true },
        { text: "MSCI World" },
        { text: "MSCI KOREA" },
        { text: "MSCI Frontier" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "자산의 국내 집중 쏠림을 막고, 국가 간 주식 시장의 낮은 상관관계를 기반으로 해외에 자본을 분산 투자함으로써 개별 국가의 정치/환율 변동(비체계적 위험)을 상쇄하는 기법은?",
      level: "LEVEL 28",
      options: [
        { text: "국제분산투자", correct: true },
        { text: "국내집중투자" },
        { text: "레버리지 헤지" },
        { text: "인덱스복제" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "해외 투자 시 해외 자산의 가치는 동일하나 대한민국 원화 대비 표시 통화(달러, 유로 등)의 환율 요동으로 인하여 최종 환산 손실을 입을 수 있는 불확실성 리스크는?",
      level: "LEVEL 28",
      options: [
        { text: "환위험 (Exchange Risk)", correct: true },
        { text: "국가위험" },
        { text: "인플레이션 위험" },
        { text: "채무불이행 위험" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "특정 국내 기업이 해외 다수 금융 허브(예: 런던, 룩셈부르크 등) 시장에서 자사 주식을 유통하기 위해, 본래 주식을 수탁원에 예치하고 동시 발행한 글로벌 예탁증서 약어는?",
      level: "LEVEL 28",
      options: [
        { text: "GDR", correct: true },
        { text: "ADR" },
        { text: "KDR" },
        { text: "EDR" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "미국 주식 시장(NYSE, NASDAQ)에서 외국 상장 기업 주식이 미국 달러로 원활하게 실시간 거래 및 청산될 수 있도록 미국 수탁 기관이 발행해 주는 주식 대체 증서는?",
      level: "LEVEL 28",
      options: [
        { text: "ADR", correct: true },
        { text: "GDR" },
        { text: "Yankee" },
        { text: "Eurobond" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "외국의 정부나 대기업이 채권 발행지인 국가의 현지 통화로 해당 국가 채권 시장에서 공식 발행하여 판매하는 성격의 채권(예: 양키본드, 사무라이본드 등)은?",
      level: "LEVEL 28",
      options: [
        { text: "외국채", correct: true },
        { text: "유로채" },
        { text: "국공채" },
        { text: "이중통화채" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "발행지가 속한 국가의 법정 통화가 아닌 제3국의 통화(주로 미국 달러)로 발행되어 각국의 국제 금융 허브를 통해 전 세계적으로 넓게 판매·유통되는 채권은?",
      level: "LEVEL 28",
      options: [
        { text: "유로채", correct: true },
        { text: "외국채" },
        { text: "특수채" },
        { text: "하이브리드채" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "외국 정부나 다국적 기업이 미국 뉴욕 금융시장에서 미국 달러화(USD) 표시로 발행하여 공급하는 외국채를 부르는 별칭은?",
      level: "LEVEL 28",
      options: [
        { text: "양키본드 (Yankee Bond)", correct: true },
        { text: "사무라이본드" },
        { text: "아리랑본드" },
        { text: "판다본드" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "개인 투자자가 국내 거래소를 이용하지 않고, 해외 주식 위탁 계좌를 통해 미국이나 일본, 유럽 거래소에 직결하여 현지 법인 주식을 직접 소유하는 자산 형태는?",
      level: "LEVEL 28",
      options: [
        { text: "해외주식", correct: true },
        { text: "국내주식" },
        { text: "외화채권" },
        { text: "외화환금 예금" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  29: [
    {
      question: "기업의 당기순이익을 부채와 자본을 모두 포함한 총 자산액으로 나누어 백분율 한 지표로, 기업이 모든 자본 자산을 얼마나 생산적으로 굴려 이익을 얻었는지 측정하는 비율은?",
      level: "LEVEL 29",
      options: [
        { text: "ROA (총자산이익률)", correct: true },
        { text: "ROE" },
        { text: "PER" },
        { text: "PBR" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "주주가 납입한 자기자본(순자산)에 대해 기업이 연간 얼마의 당기순이익을 창출했는가 측정하여, 주주 가치 환원 효율성을 보여주는 핵심 재무비율은?",
      level: "LEVEL 29",
      options: [
        { text: "ROE (자기자본이익률)", correct: true },
        { text: "ROA" },
        { text: "PER" },
        { text: "PEG" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "현재의 주가(Price)를 당해 연도 주당순이익(EPS)으로 나눈 값으로, 기업이 내는 주당 순이익 대비 주가가 몇 배로 형성되어 고평가/저평가되었는지 판정하는 지수 비율은?",
      level: "LEVEL 29",
      options: [
        { text: "PER (주가수익비율)", correct: true },
        { text: "PBR" },
        { text: "EV/EBITDA" },
        { text: "ROE" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "기업의 PER(주가수익비율) 값을 기업의 주당순이익 성장률(Growth)로 한 번 더 나누어 산출하며, 성장성 대비 주가 매력도를 종합 측정하여 성장주 밸류에이션에 널리 활용되는 것은?",
      level: "LEVEL 29",
      options: [
        { text: "PEG", correct: true },
        { text: "PBR" },
        { text: "ROE" },
        { text: "PSR" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "기업의 시장 가치(시가총액 + 순부채)를 영업활동 현금흐름의 대용치인 세전영업이익으로 나눈 비율로, 기업이 영업을 통해 투자한 기업가치(EV)를 회수하는 데 몇 년이 걸리는지 평가하는 지표는?",
      level: "LEVEL 29",
      options: [
        { text: "EV/EBITDA", correct: true },
        { text: "PER" },
        { text: "PEG" },
        { text: "Tobin's Q" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "기업의 총 주식 시가총액과 부채 총액의 합을 기업이 보유한 모든 유무형 자산의 현재 '재조달 원가'로 나누어 산출하며, 1보다 크면 투자 여력이 충분하고 주가가 고평가된 상태일 수 있다고 판정하는 지표는?",
      level: "LEVEL 29",
      options: [
        { text: "Tobin's Q", correct: true },
        { text: "EV/EBITDA" },
        { text: "EVA" },
        { text: "ROA" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "세후 순영업이익에서 기업이 투자한 총자본에 대한 자본비용(타인자본 이자비용 + 자기자본 기회비용)을 차감하여 남은 금액으로, 진정한 주주 가치의 부가 증가액을 정산하는 지표는?",
      level: "LEVEL 29",
      options: [
        { text: "EVA (경제적부가가치)", correct: true },
        { text: "Tobin's Q" },
        { text: "ROE" },
        { text: "EBITDA" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "기업이 영업활동을 통해 얻은 이익으로 자본 부채에 따른 이자 비용을 얼마나 감당할 수 있는지 나타내는 채무상환 능력 지표로서, '영업이익 / 이자비용' 식으로 구해지는 비율은?",
      level: "LEVEL 29",
      options: [
        { text: "이자보상배율", correct: true },
        { text: "유동비율" },
        { text: "부채비율" },
        { text: "당좌비율" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "1년 이내에 즉시 돈으로 바꿀 수 있는 유동자산을 1년 이내에 만기가 돌아오는 유동부채로 나눈 비율로, 기업의 단기 지급 능력을 측정하는 대표적 안정성 지표는?",
      level: "LEVEL 29",
      options: [
        { text: "유동비율", correct: true },
        { text: "부채비율" },
        { text: "이자보상배율" },
        { text: "자산회전율" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "연간 총 매출액을 총자본 자산으로 나눈 값으로, 기업이 보유한 자산 전체를 1년에 몇 번이나 회전시켜 매출을 실현했는가를 나타내는 자산 운용 효율성 지표는?",
      level: "LEVEL 29",
      options: [
        { text: "자산회전율 (Asset Turnover)", correct: true },
        { text: "유동비율" },
        { text: "자기자본비율" },
        { text: "매출총이익률" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ],
  30: [
    {
      question: "자본시장법 및 금융투자업 직무윤리에서, 임직원이 직무를 집행할 때 발생할 수 있는 사적 동기를 차단하고 성실하게 행동하여 항상 자기 이익보다 누구를 먼저 배려해야 하는가?",
      level: "LEVEL 30",
      options: [
        { text: "고객우선 원칙", correct: true },
        { text: "회사우선 원칙" },
        { text: "주주우선 원칙" },
        { text: "공동체우선 원칙" }
      ],
      progress: 0.1,
      current: 1,
      total: 10
    },
    {
      question: "상대방의 신뢰를 배반하지 않도록 서로 도리상 신의와 성실을 다해 계약과 법률적 의무를 이행해야 한다는 원칙으로, 자본시장법 제3조에 근간으로 천명된 법적 도리는?",
      level: "LEVEL 30",
      options: [
        { text: "신의성실의 원칙", correct: true },
        { text: "고객우선의 원칙" },
        { text: "적합성의 원칙" },
        { text: "내부통제 원칙" }
      ],
      progress: 0.2,
      current: 2,
      total: 10
    },
    {
      question: "금융투자회사와 고객 간, 또는 특정 고객과 다른 타 고객 간에 이익이 서로 충돌하고 어긋나 손해를 줄 수 있는 위험 상태를 방지 및 감독해야 하는 윤리적 개념은?",
      level: "LEVEL 30",
      options: [
        { text: "이해상충 (Conflict of Interest)", correct: true },
        { text: "이익편취" },
        { text: "일임계약위반" },
        { text: "부당권유" }
      ],
      progress: 0.3,
      current: 3,
      total: 10
    },
    {
      question: "금융회사 임직원이 고객의 재산 상황 및 투자 목적을 무시한 채, 오로지 금융사의 중개 수수료 수입을 증대시키기 위해 필요 이상으로 과다하게 잦은 주식 거래를 권유 및 유도하는 위법 행위는?",
      level: "LEVEL 30",
      options: [
        { text: "과당매매", correct: true },
        { text: "부당권유" },
        { text: "일임매매" },
        { text: "미공개정보이용" }
      ],
      progress: 0.4,
      current: 4,
      total: 10
    },
    {
      question: "일반투자자에게 투자를 권유할 때 투자자의 나이, 자산 규모, 리스크 선호도, 투자 경험 등을 상세히 파악하여, 투자자 성향에 안전하게 걸맞은 적정한 등급의 상품만을 권유해야 하는 법정 의무는?",
      level: "LEVEL 30",
      options: [
        { text: "적합성의 원칙", correct: true },
        { text: "적정성의 원칙" },
        { text: "설명의무" },
        { text: "신의성실의 원칙" }
      ],
      progress: 0.5,
      current: 5,
      total: 10
    },
    {
      question: "금융회사 직원이 고객에게 자산을 권유 및 추천하기에 앞서, 면담이나 작성양식을 통하여 투자자의 인적 정보 및 리스크 수용 성향을 정밀 분석해 파악해야 하는 프로세스는?",
      level: "LEVEL 30",
      options: [
        { text: "KYC (Know Your Customer)", correct: true },
        { text: "AML" },
        { text: "LTV" },
        { text: "DSR" }
      ],
      progress: 0.6,
      current: 6,
      total: 10
    },
    {
      question: "투자자의 사전 요청(방문 수락, 전화 동의 등)이 전혀 없음에도 불구하고 금융투자업자가 자발적으로 불쑥 찾아가거나 전화를 걸어 고위험 파생상품 등을 권유하는 것을 금지하는 자본시장법 조항은?",
      level: "LEVEL 30",
      options: [
        { text: "불초청권유 금지", correct: true },
        { text: "재권유 금지" },
        { text: "부당권유 금지" },
        { text: "정보비대칭 금지" }
      ],
      progress: 0.7,
      current: 7,
      total: 10
    },
    {
      question: "투자자가 판매 직원의 투자 권유를 명시적으로 거절하고 거부의사를 피력했음에도 불구하고, 판매사가 끈질기게 다시 들러 같은 권유를 지속적으로 행하는 것을 차단하는 법적 조항은?",
      level: "LEVEL 30",
      options: [
        { text: "재권유 금지", correct: true },
        { text: "불초청권유 금지" },
        { text: "과당매매 금지" },
        { text: "손실보전 금지" }
      ],
      progress: 0.8,
      current: 8,
      total: 10
    },
    {
      question: "금융투자회사 임직원이 법령을 준수하고 자산을 투명하게 굴리며 고객을 보호하기 위해, 회사 내부적으로 이행하여 지켜야 하는 제반 임직원 윤리 지침과 감사 통제 절차는?",
      level: "LEVEL 30",
      options: [
        { text: "내부통제 기준", correct: true },
        { text: "직무집행 규칙" },
        { text: "외부감사 규정" },
        { text: "자율규제 강령" }
      ],
      progress: 0.9,
      current: 9,
      total: 10
    },
    {
      question: "금융회사 내부통제 기준의 위반 여부를 상시 점검하고 감시하며, 위법 징후 발견 시 사내 조사하여 대표이사나 이사회에 위반을 공식 보고하는 업무를 전담하는 필수 직책은?",
      level: "LEVEL 30",
      options: [
        { text: "준법감시인 (Compliance Officer)", correct: true },
        { text: "사외이사" },
        { text: "회계감사원" },
        { text: "최고재무책임자" }
      ],
      progress: 1.0,
      current: 10,
      total: 10
    }
  ]
};
