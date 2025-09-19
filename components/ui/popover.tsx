"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

function Popover(props: React.ComponentProps<typeof PopoverPrimitive.Root>) {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
}

function PopoverTrigger(
  props: React.ComponentProps<typeof PopoverPrimitive.Trigger>
) {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
}

type PopoverContentProps = React.ComponentProps<
  typeof PopoverPrimitive.Content
> & {
  showArrow?: boolean;
};

function PopoverContent({
  className,
  align = "center",
  sideOffset = 8, // match your tooltip spacing
  showArrow = false, // default: no arrow (opt-in)
  ...props
}: PopoverContentProps) {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          "bg-popover text-popover-foreground",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95",
          "data-[side=bottom]:slide-in-from-top-2",
          "data-[side=left]:slide-in-from-right-2",
          "data-[side=right]:slide-in-from-left-2",
          "data-[side=top]:slide-in-from-bottom-2",
          "z-50 w-72 origin-[var(--radix-popover-content-transform-origin)]",
          "rounded-md border p-4 shadow-md outline-hidden",
          className
        )}
        {...props}
      >
        {props.children}

        {showArrow && (
          <PopoverPrimitive.Arrow
            className={cn(
              // diamond caret
              "size-3 rotate-45 rounded-[3px]",
              "bg-[color-mix(in_oklab,var(--popover)_92%,transparent)]",
              "fill-[color-mix(in_oklab,var(--popover)_92%,transparent)]",
              "border-b-2 border-r-2 border-[color:var(--border)]/85",
              // nudge to kiss the bubble edge
              "translate-y-[calc(-50%_+_1.5px)]"
            )}
          />
        )}
      </PopoverPrimitive.Content>
    </PopoverPrimitive.Portal>
  );
}

function PopoverAnchor(
  props: React.ComponentProps<typeof PopoverPrimitive.Anchor>
) {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
}

export { Popover, PopoverTrigger, PopoverContent, PopoverAnchor };
