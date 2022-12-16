import * as React from 'react'
import styled from 'styled-components'
import './style.css'
import books from './books-2.json'
import chap from './data/51-mf/5.json'

interface Book {
  id: number
  testament: 'ot' | 'nt'
  title: string
  shortTitle: string
  chaptersCount: number
  code: string
  shortCode: string
  menu: string
}

interface Chapter {
  id: number
  number: number
  bookId: number
  verseCount: number
  title: string
  verses: Verse[]
}

interface Parallel {
  verseId: number
  bookId: number
  bookCode: string
  chapter: number
  short: string
}

interface Verse {
  id: number
  number: number
  bookId: number
  text: string
  chapter: number
  chapterId: number
  parallels: Parallel[]
  translates: { [code: string]: string }
}

// console.log(books)

// const targetBook = books[50]

// const test = async () => {
//   const chap = await import(`./data/51-mf/1.json`)
//   console.log(chap)
// }

// test()

const W = styled.div`
  width: 100%;
  font-family: "Roboto Condensed";
  font-weight: 400;
`

const R = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  width: 2em;
  background: yellow;
  display: flex;
  align-items: center;
  justify-items: center;
  margin: auto;
  text-align: center;
  box-sizing: border-box;
`

const T = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 2.5;
  padding-left: 2.2em;
  padding-bottom: 1.1em;
`

const D = styled.div`
  font-size: 12px;
  color: grey;
  position: absolute;
  top: 1.5em;
  left: 2.2em;
  bottom: 0;
  right: 0;
  z-index: -1;
  line-height: 2.5;
`

export default function App() {
  return (
    <W>
      {chap.verses.map((v: Verse) => {
        return (
          <T>
            <R>{v.number}</R>
            {v.translates['tex_rec']}
            <D>{v.translates['podstr']}</D>
          </T>
        )
      })}
    </W>
  )
}
