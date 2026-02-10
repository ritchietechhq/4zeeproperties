import * as React from "react";
import { cn } from "@/lib/utils";

function Select({ children, value, onValueChange, ...props }: React.SelectHTMLAttributes<HTMLSelectElement> & { onValueChange?: (value: string) => void }) {
  return (
    <select
      value={value}
      onChange={(e) => onValueChange?.(e.target.value)}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50"
      )}
      {...props}
    >
      {children}
    </select>
  );
}

function SelectTrigger({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background", className)} {...props}>
      {children}
    </div>
  );
}

function SelectValue({ placeholder }: { placeholder?: string }) {
  return <span className="text-muted-foreground">{placeholder}</span>;
}

function SelectContent({ children, className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-md border bg-popover p-1 text-popover-foreground shadow-md", className)} {...props}>
      {children}
    </div>
  );
}

function SelectItem({ children, value, className, ...props }: React.HTMLAttributes<HTMLOptionElement> & { value: string }) {
  return (
    <option value={value} className={cn("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none", className)} {...props}>
      {children}
    </option>
  );
}

export { Select, SelectContent, SelectItem, SelectTrigger, SelectValue };
