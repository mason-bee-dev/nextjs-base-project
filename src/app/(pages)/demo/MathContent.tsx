import React, { JSX } from "react"
import "katex/dist/katex.min.css"
import { InlineMath } from "react-katex"
import parse, { HTMLReactParserOptions } from "html-react-parser"

interface MathContentProps {
  content: string
}

const MathContent: React.FC<MathContentProps> = ({ content }) => {
  const renderMathContent = (htmlContent: string) => {
    const options: HTMLReactParserOptions = {
      replace: (domNode) => {
        if (domNode.type === "text" && "data" in domNode && domNode.data) {
          const text = domNode.data

          if (text.includes("\\(") && text.includes("\\)")) {
            const parts: (string | JSX.Element)[] = []
            let lastIndex = 0
            let startIndex = text.indexOf("\\(")

            while (startIndex !== -1) {
              if (startIndex > lastIndex) {
                parts.push(text.substring(lastIndex, startIndex))
              }

              const endIndex = text.indexOf("\\)", startIndex)
              if (endIndex === -1) break

              const formula = text.substring(startIndex + 2, endIndex)
              parts.push(
                <InlineMath key={`math-${lastIndex}`} math={formula} />,
              )

              lastIndex = endIndex + 2
              startIndex = text.indexOf("\\(", lastIndex)
            }

            if (lastIndex < text.length) {
              parts.push(text.substring(lastIndex))
            }

            return <>{parts}</>
          }
        }
        return undefined
      },
    }

    return parse(htmlContent, options)
  }

  return <div className="math-content">{renderMathContent(content)}</div>
}

export default MathContent
