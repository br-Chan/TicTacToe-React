function Square() {
  return <button className="square">1</button>;
}

export default function Board() {
  // Uses Fragments (<> </>) to have more than one button, and divs with class board-row to create
  // 3x3 grid instead of one single row.
  // <square /> renders the Square component.
  return (
    <>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
      <div className="board-row">
      <Square />
      <Square />
      <Square />
      </div>
    </>
  );
}
