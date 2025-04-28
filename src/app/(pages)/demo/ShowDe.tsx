"use client"
import React from "react"
import { join, map, size } from "lodash"
import MathContent from "./MathContent"

type ShowDeComponentProps = {
  dataList: any[]
  title?: string
}

export default function ShowDeComponent({
  dataList,
  title,
}: ShowDeComponentProps) {
  const listQuestion = dataList

  return (
    <div className="bg-white p-5 text-black">
      <h1 className="text-center text-[60px] font-bold text-red-500">
        {title}
      </h1>
      {map(listQuestion, (question, index) => {
        const lastItem = index === size(listQuestion) - 1
        const answer = question.question.answers

        return (
          <div
            key={question.idx}
            className={`border-b border-gray-200 py-5 ${
              lastItem ? "border-b-0" : ""
            }`}>
            <p className="mb-2 font-black text-red-500">
              Câu {index + 1} - {question.chapter.name}
            </p>
            <MathContent content={question.question.content[0].content} />
            {size(answer) > 0 ? (
              <>
                <p className="mt-2">
                  {map(answer, (answer, idx) => {
                    return (
                      <p key={idx} className="mb-1 flex gap-1">
                        <span className="font-bold uppercase">
                          {answer.answer_key}.
                        </span>
                        <MathContent content={answer.text[0].content} />
                      </p>
                    )
                  })}
                </p>
                <p>
                  <strong>Đáp án:</strong>{" "}
                  {map(answer, (answer) => {
                    const isCorrect = answer.correct ? answer.answer_key : ""
                    return (
                      <span key={answer.id} className="uppercase">
                        {isCorrect}
                      </span>
                    )
                  })}
                </p>
              </>
            ) : (
              <>
                <p className="mt-2 text-green-600">*Tự luận/điền đáp án</p>
                <p className="mt-2 flex gap-1">
                  <strong>Đáp án:</strong>{" "}
                  {join(question.question.correct_answer, "")}
                </p>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}
