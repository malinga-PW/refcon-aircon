import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export default function PageBanner({
  badge,
  badgeIcon: BadgeIcon,
  title,
  subtitle,
  bgImage,
  breadcrumbCurrent,
  onNavigateHome,
  extraContent
}) {
  return (
    <div className="relative pt-36 pb-14 lg:pt-40 lg:pb-16 overflow-hidden bg-slate-950 border-b border-slate-800">
      
      {/* 🖼️ High-Res Background Image with Cinematic Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center filter brightness-[0.42] saturate-125 scale-105 transform motion-safe:transition-transform duration-1000 ease-out"
        />
        {/* Sleek Gradient Overlay for Crisp Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-sky-950/60" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-500/15 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 🧭 Interactive Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs font-semibold text-slate-300 mb-4">
          <button
            onClick={onNavigateHome}
            className="flex items-center gap-1.5 text-slate-300 hover:text-sky-300 transition-colors focus:outline-hidden"
          >
            <Home className="w-3.5 h-3.5 text-sky-400" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-sky-400 font-bold bg-sky-950/60 px-2 py-0.5 rounded-md border border-sky-800/60">
            {breadcrumbCurrent || title}
          </span>
        </nav>

        {/* 🏷️ Badge + Title + Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-3">
            {badge && (
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-bold tracking-wide backdrop-blur-md">
                {BadgeIcon && <BadgeIcon className="w-3.5 h-3.5 text-sky-400" />}
                <span>{badge}</span>
              </div>
            )}

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-heading leading-tight drop-shadow-xs">
              {title}
            </h1>

            {subtitle && (
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
                {subtitle}
              </p>
            )}
          </div>

          {extraContent && (
            <div className="shrink-0 self-start md:self-end">
              {extraContent}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
