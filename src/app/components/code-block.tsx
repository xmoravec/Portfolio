"use client";

import { useEffect, useState } from "react";

type CodeBlockProps = {
  code: string;
  title?: string;
  compact?: boolean;
  enableCopy?: boolean;
  copyLabel?: string;
  copiedLabel?: string;
};

const KEYWORDS = new Set([
  "async",
  "await",
  "const",
  "let",
  "return",
  "if",
  "else",
  "for",
  "while",
  "function",
  "type",
  "interface",
  "import",
  "from",
  "export",
  "new",
  "try",
  "catch",
  "throw",
]);

function renderToken(token: string, key: string) {
  if (KEYWORDS.has(token)) {
    return (
      <span key={key} className="text-fuchsia-300">
        {token}
      </span>
    );
  }

  if (/^\d+$/.test(token)) {
    return (
      <span key={key} className="text-amber-300">
        {token}
      </span>
    );
  }

  if (/^[{}()[\].,;:+\-*/=<>&|!]+$/.test(token)) {
    return (
      <span key={key} className="text-zinc-400">
        {token}
      </span>
    );
  }

  return (
    <span key={key} className="text-sky-200">
      {token}
    </span>
  );
}

function tokenizeCode(line: string, lineIndex: number) {
  const commentIndex = line.indexOf("//");
  const codePart = commentIndex >= 0 ? line.slice(0, commentIndex) : line;
  const commentPart = commentIndex >= 0 ? line.slice(commentIndex) : "";

  const matches = codePart.match(/\s+|"[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`|[A-Za-z_][A-Za-z0-9_]*|\d+|[{}()[\].,;:+\-*/=<>&|!]+/g) ?? [];

  const rendered = matches.map((token, tokenIndex) => {
    const key = `${lineIndex}-${tokenIndex}`;

    if (/^\s+$/.test(token)) {
      return <span key={key}>{token}</span>;
    }

    if (/^"|^'|^`/.test(token)) {
      return (
        <span key={key} className="text-emerald-300">
          {token}
        </span>
      );
    }

    return renderToken(token, key);
  });

  if (commentPart) {
    rendered.push(
      <span key={`${lineIndex}-comment`} className="text-zinc-500">
        {commentPart}
      </span>,
    );
  }

  return rendered;
}

export function CodeBlock({
  code,
  title,
  compact = false,
  enableCopy = false,
  copyLabel = "Copy",
  copiedLabel = "Copied",
}: CodeBlockProps) {
  const lines = code.split("\n");
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

      <pre className={`overflow-x-auto bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.18),transparent_45%),radial-gradient(circle_at_bottom_left,rgba(236,72,153,0.12),transparent_42%)] px-0 py-3 text-zinc-100 ${compact ? "text-xs" : "text-sm"}`}>
        <code>
          {lines.map((line, lineIndex) => (
            <span key={lineIndex} className="grid grid-cols-[2.2rem_1fr] gap-3 px-4 leading-6">
              <span className="select-none text-right text-zinc-600">{lineIndex + 1}</span>
              <span>{tokenizeCode(line, lineIndex)}</span>
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
