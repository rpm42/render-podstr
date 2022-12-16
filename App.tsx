import * as React from 'react'
import styled from 'styled-components'
import './style.css'
import books from './books-2.json'

console.log(books)

const targetBook = books[50]

const test = async () => {
  for (let i = 1; i <= targetBook.chaptersCount; i++) {
    const fn = `./data/${targetBook.id}-${targetBook.shortCode}/${i}.json`
    console.log(fn)
    const chap = await import(fn)
    console.log(chap)
  }
}

test()

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
  border: 1px solid gold;
  box-sizing: border-box;
`

const T = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 2.5em;
  padding-left: 2em;
  padding-bottom: 1.1em;
`

const D = styled.div`
  font-size: 12px;
  color: blue;
  position: absolute;
  top: 1.2em;
  left: 2em;
  bottom: 0;
  right: 0;
  z-index: -1;
  line-height: 2.5em;
`

export default function App() {
  return (
    <W>
      <T>
        <R>1</R>
        Βίβλος γενέσεως ᾽Ιησοῦ Χριστοῦ υἱοῦ Δαυὶδ υἱοῦ ᾽Αβραάμ.
        <D>Книга происхождения Иисуса Христа Сына Давида Сына Авраама.</D>
      </T>
      <T>
        <R>2</R>
        ᾽Αβραὰμ ἐγέννησεν τὸν ᾽Ισαάκ, ᾽Ισαὰκ δὲ ἐγέννησεν τὸν ᾽Ιακώβ, ᾽Ιακὼβ δὲ ἐγέννησεν τὸν
        ᾽Ιούδαν καὶ τοὺς ἀδελφοὺς αὐτοῦ,
        <D>Авраам родил Исаака, Исаак же родил Иакова, Иаков же родил Иуду и братьев его,</D>
      </T>

      <T>
        <R>3</R>
        Πᾶσαι οὖν αἱ γενεαὶ ἀπὸ ᾽Αβραὰμ ἕως Δαυὶδ γενεαὶ δεκατέσσαρες, καὶ ἀπὸ Δαυὶδ ἕως τῆς
        μετοικεσίας Βαβυλῶνος γενεαὶ δεκατέσσαρες, καὶ ἀπὸ τῆς μετοικεσίας Βαβυλῶνος ἕως τοῦ
        Χριστοῦ γενεαὶ δεκατέσσαρες.
        <D>
          Все итак поколений от Авраама до Давида поколений четырнадцать, и от Давида до
          переселения Вавилонского поколений четырнадцать, и от переселения Вавилонского до
          Христа поколений четырнадцать.
        </D>
      </T>
    </W>
  )
}
