"use client"
import React, { useState } from "react"
import deso1 from "./deso1.json"
import deso2 from "./deso2.json"
import deso3 from "./deso3.json"
import deso4 from "./deso4.json"
import deso5 from "./deso5.json"
import deso6 from "./deso6.json"
import deso7 from "./deso7.json"
import deso8 from "./deso8.json"
import deso9 from "./deso9.json"
import deso10 from "./deso10.json"
import deso11 from "./deso11.json"

import ShowDeComponent from "./ShowDe"
import { join, map, size } from "lodash"

const listDe = [
  {
    id: 1,
    title: "Đề số 1",
    data: deso1.questions,
  },
  {
    id: 2,
    title: "Đề số 2",
    data: deso2.questions,
  },
  {
    id: 3,
    title: "Đề số 3",
    data: deso3.questions,
  },
  {
    id: 4,
    title: "Đề số 4",
    data: deso4.questions,
  },
  {
    id: 5,
    title: "Đề số 5",
    data: deso5.questions,
  },
  {
    id: 6,
    title: "Đề số 6",
    data: deso6.questions,
  },
  {
    id: 7,
    title: "Đề số 7",
    data: deso7.questions,
  },
  {
    id: 8,
    title: "Đề số 8",
    data: deso8.questions,
  },
  {
    id: 9,
    title: "Đề số 9",
    data: deso9.questions,
  },
  {
    id: 10,
    title: "Đề số 10",
    data: deso10.questions,
  },
  {
    id: 11,
    title: "Đề số 11",
    data: deso11.questions,
  },
]

export default function DemoPage() {
  const [data, setData] = useState<any[]>(deso1.questions)
  const [title, setTitle] = useState<string>(listDe[0].title)

  const handleClick = (id: number) => {
    setData(listDe.find((item) => item.id === id)?.data || [])
    setTitle(listDe.find((item) => item.id === id)?.title || "")
  }

  return (
    <div className="bg-white p-5 text-black">
      <div className="flex hidden gap-2.5">
        {map(listDe, (item, idx) => {
          return (
            <button
              key={idx}
              onClick={() => handleClick(item.id)}
              className={`rounded-md px-4 py-2 font-medium transition-colors ${
                title === item.title
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}>
              Đề số {item.id}
            </button>
          )
        })}
      </div>
      <div>
        {map(listDe, (item, idx) => {
          return (
            <div
              key={idx}
              className="mb-7 overflow-hidden rounded-2xl bg-gray-100 p-5">
              <h2 className="my-3 border-b border-gray-300 pb-4 font-bold text-red-500">
                {item.title}
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                {map(item.data, (questionData, index) => {
                  if (
                    typeof questionData === "object" &&
                    questionData !== null &&
                    "question" in questionData
                  ) {
                    const answer = questionData.question.answers
                    return (
                      <div className="border border-gray-400 p-2">
                        {size(answer) > 0 ? (
                          <>
                            <p>
                              <strong>Câu {index + 1}:&nbsp;</strong>{" "}
                              {map(answer, (answer) => {
                                const isCorrect = answer.correct
                                  ? answer.answer_key
                                  : ""
                                return (
                                  <span
                                    key={answer.id}
                                    className="font-medium text-red-500 uppercase">
                                    {isCorrect}
                                  </span>
                                )
                              })}
                            </p>
                          </>
                        ) : (
                          <p>
                            <strong>Câu {index + 1}:&nbsp;</strong>{" "}
                            <span className="font-medium text-red-500">
                              {join(questionData.question.correct_answer, "")}
                            </span>
                          </p>
                        )}
                      </div>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          )
        })}
      </div>
      {/* <ShowDeComponent dataList={data} title={title} /> */}
    </div>
  )
}
