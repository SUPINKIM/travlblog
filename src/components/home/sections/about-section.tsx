"use client";

import { PixelIcon, PixelProgress, ScrollSection } from "@/components/home";
import { SECTION_ICONS, SKILLS } from "@/constant/home-data";

export function AboutSection() {
  return (
    <ScrollSection className="min-h-screen p-8 md:p-16 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="border-4 border-cyan-400 bg-slate-800 p-8 shadow-[12px_12px_0_#06b6d4] relative">
          {/* 코너 장식 */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-cyan-400" />
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyan-400" />
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-cyan-400" />
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-cyan-400" />

          <h2 className="text-xl text-cyan-400 mb-8 flex items-center gap-3">
            <PixelIcon name={SECTION_ICONS.about} size="lg" />
            ABOUT ME
          </h2>

          <div className="space-y-6 text-sm leading-relaxed text-slate-300">
            <p className="flex items-start gap-2">
              <PixelIcon
                name="chevron-right"
                size="sm"
                className="text-pink-400 mt-1 shrink-0"
              />
              <span>
                안녕하세요!{" "}
                <span className="text-yellow-400">
                  프론트엔드 개발자 김수빈
                </span>
                입니다.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <PixelIcon
                name="chevron-right"
                size="sm"
                className="text-pink-400 mt-1 shrink-0"
              />
              <span>
                현재 <span className="text-pink-400">Levit</span>에서
                <span className="text-green-400"> Alwayz 앱</span>과 농장
                시뮬레이션 게임
                <span className="text-green-400"> 올팜</span>을 개발하고 있어요.
              </span>
            </p>
            <p className="flex items-start gap-2">
              <PixelIcon
                name="chevron-right"
                size="sm"
                className="text-pink-400 mt-1 shrink-0"
              />
              <span>
                코드로 재미있는 경험을 만드는 걸 좋아하고, 여행하면서 보고 느낀
                것들을 기록합니다.
              </span>
            </p>
          </div>

          {/* 스킬 */}
          <div className="mt-10 space-y-4">
            <h3 className="text-sm text-yellow-400 mb-4 flex items-center gap-2">
              <PixelIcon name="sword" size="md" className="text-yellow-400" />
              SKILLS
            </h3>
            {SKILLS.map((skill) => (
              <PixelProgress
                key={skill.name}
                label={skill.name}
                value={skill.value}
                color={skill.color}
                icon={skill.icon}
              />
            ))}
          </div>

          {/* 스탯 서머리 */}
          <div className="mt-8 pt-6 px-4 border-t-2 border-slate-700 flex flex-wrap justify-between gap-6 text-center items-end">
            <div>
              <div className="inline-flex items-center gap-2">
                <PixelIcon
                  name="calender"
                  size="sm"
                  className="text-yellow-400 mx-auto mb-2"
                />
                <p className="text-xs text-slate-500 pb-2">EXPERIENCE</p>
              </div>
              <p className="text-sm text-white">5+ Years</p>
            </div>
            <div>
              <div className="inline-flex gap-2 items-center">
                <PixelIcon
                  name="folder"
                  size="sm"
                  className="text-pink-400 mx-auto mb-2"
                />
                <p className="text-xs text-slate-500 pb-2">PROJECTS</p>
              </div>
              <p className="text-sm text-white">10+</p>
            </div>
            <div>
              <div className="inline-flex gap-2 items-center">
                <PixelIcon
                  name="headphones-solid"
                  size="sm"
                  className="text-orange-400 mx-auto mb-2"
                />
                <p className="text-xs text-slate-500 pb-2">COFFEE</p>
              </div>
              <p className="text-sm text-white">∞</p>
            </div>
          </div>
        </div>
      </div>
    </ScrollSection>
  );
}
