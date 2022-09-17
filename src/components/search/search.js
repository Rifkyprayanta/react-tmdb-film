import { data } from 'autoprefixer'
import React from 'react'

const Search = (props) => {
  return (
    <div>
        {props.map((props,index) => {
            <div key={index}>
                <li>{props.title}</li>
            </div>
        })}
    </div>
  )
}

export default Search