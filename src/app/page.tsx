
export default function Home() {

  const create_grid = () => {
    const grid_size : number = 20
    const divs = []
    for(let y = 0; y < grid_size; y++){
      for(let x = 0; x < grid_size; x++){
        const cell_key : string = x + "," + y
        const cell = <div key={cell_key} className={"grid-cell "} ></div>
        //cell_divs.set(cell_key, cell)
        divs.push(cell);
      }
    }
    return divs
  }

  return (
    <div className="content">
      <div className="cells">
        {create_grid()}
      </div>
    </div>
  );
}
