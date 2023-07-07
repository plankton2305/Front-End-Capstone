
//TODO: Add onClick and hover event handlers
const GraphBar = ({shadedVal}) => {
  // Bar with a fixed length, calculate amount shaded in based off of total % of ratings
  return (
    <div className="w-60 h-5 bg-[#d4d4d4] rounded">
      <div className={`bg-[#ffa41c] h-full rounded`} style={{width: shadedVal}}></div>
    </div>
  )
}

export default GraphBar;

