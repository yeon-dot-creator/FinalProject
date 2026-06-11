import svgPaths from "../../imports/DashboardHighFidelity/svg-sunnvy0181";

type Tab = 'home' | 'learn' | 'stats' | 'profile';

interface BottomNavProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white h-[72px] flex items-center justify-around px-[47px] shadow-[0px_-4px_10px_-2px_rgba(0,0,0,0.05)] border-t border-[#f3f4f6]">
      <button onClick={() => onTabChange('home')} className="flex flex-col items-center justify-center gap-0">
        <div className="pb-[4px]">
          <div className="h-[20px] w-[22.5px] relative">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
              <path d={svgPaths.p34558000} fill={activeTab === 'home' ? '#00754A' : '#9CA3AF'} />
            </svg>
          </div>
        </div>
        <span style={{ fontSize: 10, fontWeight: activeTab === 'home' ? 600 : 500, color: activeTab === 'home' ? '#00754a' : '#9ca3af', letterSpacing: '-0.16px' }}>홈</span>
      </button>
      <button onClick={() => onTabChange('learn')} className="flex flex-col items-center justify-center gap-0">
        <div className="pb-[4px]">
          <div className="h-[20px] w-[22.5px] relative">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.5 20">
              <path d={svgPaths.p11cc9f00} fill={activeTab === 'learn' ? '#00754A' : '#9CA3AF'} />
            </svg>
          </div>
        </div>
        <span style={{ fontSize: 10, fontWeight: activeTab === 'learn' ? 600 : 500, color: activeTab === 'learn' ? '#00754a' : '#9ca3af', letterSpacing: '-0.16px' }}>학습</span>
      </button>
      <button onClick={() => onTabChange('stats')} className="flex flex-col items-center justify-center gap-0">
        <div className="pb-[4px]">
          <div className="relative size-[20px]">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.p359f3c00} fill={activeTab === 'stats' ? '#00754A' : '#9CA3AF'} />
            </svg>
          </div>
        </div>
        <span style={{ fontSize: 10, fontWeight: activeTab === 'stats' ? 600 : 500, color: activeTab === 'stats' ? '#00754a' : '#9ca3af', letterSpacing: '-0.16px' }}>통계</span>
      </button>
      <button onClick={() => onTabChange('profile')} className="flex flex-col items-center justify-center gap-0">
        <div className="pb-[4px]">
          <div className="h-[20px] w-[17.5px] relative">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.5 20">
              <path d={svgPaths.p3fbba500} fill={activeTab === 'profile' ? '#00754A' : '#9CA3AF'} />
            </svg>
          </div>
        </div>
        <span style={{ fontSize: 10, fontWeight: activeTab === 'profile' ? 600 : 500, color: activeTab === 'profile' ? '#00754a' : '#9ca3af', letterSpacing: '-0.16px' }}>프로필</span>
      </button>
    </div>
  );
}
