import { useState } from 'react'
import './App.css'
import axios from 'axios'
import styled from 'styled-components'

function App() {
  // OPEN API : 해당 지역의 날씨 정보를 출력
  // 해당 지역
  const [location, setLocation] = useState('');

  // API에서 받아온 값을 주입
  const [result, setResult] = useState({});

  return (
    <>
      <div>
        <h1> Open API 를 사용해서 axios 사용해서 날씨 데이터 출력 </h1>

      </div>
    </>
  )
}

export default App
