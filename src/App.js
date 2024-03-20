function Square({ value }) {
  return <button className="square">{value}</button>;
}

export default function Board() {
  // Uses Fragments (<> </>) to have more than one button, and divs with class board-row to create
  // 3x3 grid instead of one single row.
  // <square /> renders the Square component.
  return (
    <>
      <div className="board-row">
      <Square value="1" />
      <Square value="2" />
      <Square value="3" />
      </div>
      <div className="board-row">
      <Square value="4" />
      <Square value="5" />
      <Square value="6" />
      </div>
      <div className="board-row">
      <Square value="7" />
      <Square value="8" />
      <Square value="9" />
      </div>
    </>
  );
}
