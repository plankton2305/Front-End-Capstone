
//TODO: Add onClick and hover event handlers
const GraphBar = ({shadedVal}) => {
  // Bar with a fixed length, calculate amount shaded in based off of total % of ratings
  console.log(`SHADEDVAL::::: ${shadedVal}`);
  return (
    <div className="w-80 h-4 bg-[#d4d4d4]">
      <div className={`bg-[#ffa41c] h-full`} style={{width: shadedVal}}></div>
    </div>
  )
}

export default GraphBar;

// bg-gradient-to-r from-indigo-500 to-blue-500