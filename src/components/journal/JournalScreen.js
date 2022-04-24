import React from 'react'
import { NoteScreen } from '../notes/NoteScreen'
//import { NothingSelected } from './NothingSelected'
import { SideBar } from './SideBar'

export const JournalScreen = () => {
  return (
    <div className='journal__main-content'>
        <SideBar/>

        <main style={{width:'100%'}}>
          {/* <NothingSelected/> */}
          <NoteScreen/>
        </main>
    </div>
  )
}
