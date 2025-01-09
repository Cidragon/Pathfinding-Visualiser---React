"use client"
import { ReactElement, ReactHTMLElement, useState } from "react"

export default function Home() {

  const grid_size : number = 20
  let cell_divs : Map<string, ReactElement> = new Map()

  const[drag_and_drop_flag, set_drag_and_drop_flag] = useState(false)
  const[start_flag, set_start_flag] = useState("")
  const[end_flag, set_end_flag] = useState("")
  const [cell_flag_type, set_cell_flag_type] = useState(() => {
    let flags : string[][]= []
    for (let y : number = 0; y < grid_size; y++){
      flags.push([])
      for (let x : number = 0; x < grid_size; x++){
        flags[y].push("")
      }
    }
    return flags
  })
  
  
  const create_grid = () => {
    const divs = []
    for(let y = 0; y < grid_size; y++){
      divs.push([])
      for(let x = 0; x < grid_size; x++){
        const cell_key : string = x + "," + y
        const cell : ReactElement = <div key={cell_key} className={"grid-cell " + cell_flag_type[y][x]} onClick={() => check_start_and_end_flags(x,y)}></div>
        cell_divs.set(cell_key, cell)
        divs.push(cell); 
      }
    }
    return divs
  }

  const check_start_and_end_flags = (x : number, y : number) => {
    console.log(x + "," + y)

    if(start_flag == ""){
      set_start_flag(x + "," + y)
      const new_flags : string[][]= [...cell_flag_type]
      new_flags[y][x] = "start-cell"
      set_cell_flag_type(new_flags)
    }else if(end_flag == ""){
      set_end_flag(x + "," + y)
      const new_flags : string[][]= [...cell_flag_type]
      new_flags[y][x] = "end-cell"
      set_cell_flag_type(new_flags)
    }
  }

  return (
    <div className="content">
      <div className="cells">
        {create_grid()}
      </div>
    </div>
  );
}
