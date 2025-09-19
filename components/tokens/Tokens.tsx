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
  trigger = "auto", // << default
}: {
  id: ItemId;
  size?: number;
  className?: string;
  trigger?: TriggerMode;
  label?: boolean;
}) {
  const t = TOKENS[id];
  const [pref, setPref] = React.useState<"hover" | "click">("click");

  // Decide once on mount: if device supports hover, prefer tooltip; otherwise popover.
  React.useEffect(() => {
    const canHover = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    ).matches;
    setPref(canHover ? "hover" : "click");
  }, []);

  const mode =
    trigger === "auto" ? pref : trigger === "none" ? "hover" : trigger;

  const img = (
    <Image
      src={t.src}
      alt={t.name}
      width={size}
      height={size}
      className={["inline-block align-middle", className]
        .filter(Boolean)
        .join(" ")}
    />
  );

  if (trigger === "none") return img;

  if (mode === "click") {
    return (
      <Popover>
        <PopoverTrigger asChild>{img}</PopoverTrigger>
        <PopoverContent className="max-w-xs text-sm">
          <div className="font-medium">{t.name}</div>
          <p className="text-muted-foreground mt-1">{t.desc}</p>
        </PopoverContent>
      </Popover>
    );
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>{img}</TooltipTrigger>
      <TooltipContent side="top" className="max-w-xs">
        <div className="font-medium">{t.name}</div>
        <p className="text-xs text-muted-foreground mt-0.5">{t.desc}</p>
      </TooltipContent>
    </Tooltip>
  );
}
