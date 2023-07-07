
const BreakdownGraph = ({ averageRating }) => {

  const renderGraph = (averageRating) => {
    let elements = [];

    //const baseRating = Math.floor(averageRating);

    for (let i = 0; i < 5; i++) {

      const arrowPercentage = averageRating - i;

      elements.push(
        <span className="h-full w-[20%] mr-1 bg-[#d4d4d4] inline-block box-border relative">
          {
            arrowPercentage > 0 && arrowPercentage <= 1 && (
              <span className="h-full w-[90%] absolute inset-x-[0%]">
                {/* This span will be replaced with an actual arrow (eventually) */}
                <span
                  className="h-full bg-black w-[10%] inline-block absolute"
                  style={{left: `${arrowPercentage * 100}%`}}
                  >
                </span>
              </span>
            )
          }
        </span>
      );
    }

    return elements;
  }

  return (
    <div className="w-full h-2 rounded flex">
      {renderGraph(averageRating)}
      <span className="inline-block">{(Math.round(averageRating * 100) / 100)}</span>
    </div>
  );
}

export default BreakdownGraph;
