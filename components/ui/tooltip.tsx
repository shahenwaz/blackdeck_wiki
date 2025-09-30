"use client";

import * as React from "react";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";

import { cn } from "@/lib/utils";

function TooltipProvider({
  delayDuration = 0,
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Provider>) {
  return (
    <TooltipPrimitive.Provider
      data-slot="tooltip-provider"
      delayDuration={delayDuration}
      {...props}
    />
  );
}

function Tooltip({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Root>) {
  return (
    <TooltipProvider>
      <TooltipPrimitive.Root data-slot="tooltip" {...props} />
    </TooltipProvider>
  );
}

function TooltipTrigger({
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Trigger>) {
  return <TooltipPrimitive.Trigger data-slot="tooltip-trigger" {...props} />;
}

function TooltipContent({
  className,
  sideOffset = 0,
  children,
  // NEW: keep API the same; we don’t expose any new props
  ...props
}: React.ComponentProps<typeof TooltipPrimitive.Content>) {
  return (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        data-slot="tooltip-content"
        sideOffset={sideOffset}
        className={cn(
          // keep shadcn defaults minimal; your caller classes (Token.tsx) will override bg/typography
          "animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "z-50 w-fit origin-[var(--radix-tooltip-content-transform-origin)] rounded-md px-3 py-1.5 text-xs",
          "text-balance",
          className
        )}
        {...props}
      >
        {children}

        {/* Arrow styled to match the “glassy” tooltip you built in Token.tsx */}
        <TooltipPrimitive.Arrow
          className={cn(
            // diamond carret size & shape
            "size-3.5 rotate-45 rounded-[3px]",
            "bg-[color-mix(in_oklab,var(--popover)_94%,transparent)]",
            "fill-[color-mix(in_oklab,var(--popover)_94%,transparent)]",
            // border to avoid the 'dot' look
            "border-b-2 border-r-2 border-[color:var(--border)]/85",
            // position tweak so it kisses the bubble edge nicely
            "translate-y-[calc(-50%_+_1.5px)]"
          )}
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  );
}

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
