"use client";
import hljs from "highlight.js";
import { cn } from "@/lib/utils";
import "highlight.js/styles/mono-blue.css";

export const CodeBlock = ({
  code,
  language = "auto",
}: {
  code: string;
  language: string;
}) => {
  const codeClass = `language-${language}`;
  const codeHightHtml =
    language == "auto"
      ? hljs.highlightAuto(code)
      : hljs.highlightAuto(code, [language]);

  return (
    <pre className="overflow-x-auto">
      <code
        className={cn(codeClass, " whitespace-break-spaces")}
        id={codeClass}
        dangerouslySetInnerHTML={{ __html: codeHightHtml.value }}
      />
    </pre>
  );
};
