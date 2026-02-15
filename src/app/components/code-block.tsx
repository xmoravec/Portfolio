"use client";

import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeBlockProps = {
  code: string;
  title?: string;
  language?: string;
  compact?: boolean;
  showLineNumbers?: boolean;
  wrapLongLines?: boolean;
  enableCopy?: boolean;
  copyLabel?: string;
  copiedLabel?: string;
};

export function CodeBlock({
  code,
  title,
  language = "typescript",
  compact = false,
  showLineNumbers = true,
  wrapLongLines = false,
  enableCopy = false,
  copyLabel = "Copy",
  copiedLabel = "Copied",
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCopied(false);
    }, 1400);

    return () => window.clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    if (!enableCopy) {
      return;
    }

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 shadow-[0_12px_30px_-12px_rgba(15,23,42,0.9)]">
      <div className="flex items-center justify-between gap-2 border-b border-zinc-800 bg-zinc-900/80 px-4 py-2">
        <p className="rounded-full border border-zinc-700 bg-zinc-900 px-2.5 py-0.5 text-xs text-zinc-400">{title ?? "typescript"}</p>
        {enableCopy ? (
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex h-7 items-center rounded-md border border-zinc-700 bg-zinc-900 px-2.5 text-xs font-medium text-zinc-200 transition hover:bg-zinc-800"
            aria-label={copyLabel}
          >
            {copied ? copiedLabel : copyLabel}
          </button>
        ) : null}
      </div>

      <div className="overflow-x-auto bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_42%)] px-0 py-3">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={showLineNumbers}
          wrapLongLines={wrapLongLines}
          customStyle={{
            margin: 0,
            background: "transparent",
            fontSize: compact ? "0.75rem" : "0.875rem",
            lineHeight: compact ? "1.45" : "1.6",
            padding: "0 1rem",
          }}
          codeTagProps={{
            style: {
              fontFamily: "var(--font-geist-mono), ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
            },
          }}
          lineNumberStyle={{
            minWidth: "1.8rem",
            color: "#71717a",
            marginRight: "0.85rem",
            userSelect: "none",
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
}
