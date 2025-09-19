"use client";
import * as React from "react";
import Image from "next/image";
import { TOKENS, type ItemId } from "@/src/data/tokens";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type TriggerMode = "auto" | "hover" | "click" | "none";

export function Token({
  id,
  size = 28,
  className,
  trigger = "auto",
}: {
  id: ItemId;
  size?: number;
  className?: string;
  trigger?: TriggerMode;
}) {
  const t = TOKENS[id];
  const [pref, setPref] = React.useState<"hover" | "click">("click");

  React.useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    setPref(canHover ? "hover" : "click");
  }, []);

  const mode =
    trigger === "auto" ? pref : trigger === "none" ? "hover" : trigger;

  // neutral trigger (no hover ring/bg anywhere)
  const triggerNode = (
    <span
      className={[
        "inline-block align-middle select-none",
        className || "",
      ].join(" ")}
    >
      <Image
        src={t.src}
        alt={t.name}
        width={size}
        height={size}
        className="align-middle"
      />
    </span>
  );

  if (trigger === "none") return triggerNode;

  if (mode === "click") {
    // POPover (tap on mobile) — compact, centered, nicer border & shadow
    return (
      <Popover>
        <PopoverTrigger
          asChild
          // kill any focus rings/dots from parent styles
          className="focus:outline-none focus-visible:outline-none focus:ring-0"
        >
          {triggerNode}
        </PopoverTrigger>
        <PopoverContent
          side="top"
          align="center"
          sideOffset={10}
          className={[
            "max-w-[260px] text-center",
            "rounded-xl px-3.5 py-2.5",
            "border-2 border-[color:var(--border)]/85", // thicker, crisper border
            "bg-[color-mix(in_oklab,var(--popover)_92%,transparent)]",
            "backdrop-blur-md", // a touch more blur
            // two-layer strong shadow for real lift
            "shadow-[0_22px_46px_-12px_rgba(0,0,0,0.65),0_3px_10px_rgba(0,0,0,0.28)]",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
            "text-[13px] leading-snug",
          ].join(" ")}
        >
          <div className="font-semibold tracking-tight">{t.name}</div>
          <p className="mt-1 text-xs text-muted-foreground text-pretty">
            {t.desc}
          </p>
        </PopoverContent>
      </Popover>
    );
  }

  // TOOLTIP (hover on desktop) — same visual language as popover
  return (
    <Tooltip delayDuration={120}>
      <TooltipTrigger
        asChild
        className="focus:outline-none focus-visible:outline-none focus:ring-0"
      >
        {triggerNode}
      </TooltipTrigger>
      <TooltipContent
        side="top"
        align="center"
        sideOffset={8}
        className={[
          "relative z-50",
          "max-w-[240px] text-center",
          "rounded-xl px-3 py-2",
          "border-2 border-[color:var(--border)]/85",
          "bg-[color-mix(in_oklab,var(--popover)_94%,transparent)]",
          "backdrop-blur-md",

          // --- compact, near-border halo (no double rings, no huge spread) ---
          // --- compact but darker + slightly wider halo ---
          "shadow-[0_4px_10px_1px_rgba(0,0,0,0.80)]",

          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "text-[13px] leading-snug",
        ].join(" ")}
      >
        <div className="font-medium">{t.name}</div>
        <p className="mt-0.5 text-xs text-muted-foreground text-pretty">
          {t.desc}
        </p>
      </TooltipContent>
    </Tooltip>
  );
}
