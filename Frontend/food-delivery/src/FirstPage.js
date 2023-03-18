import React from 'react'
import Navbar from './Component/Navbar/Navbar';
import DisplayArea from './Component/ViewPage/Display/DisplayArea';
import Filtter from './Component/ViewPage/Filtter/Filtter';

export default function FirstPage() {
  return (
    <div>
      <Navbar/>
      <Filtter/>
      <DisplayArea/>
    </div>
  )
}
