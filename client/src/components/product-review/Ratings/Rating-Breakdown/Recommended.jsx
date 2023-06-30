
const calculateRecommendedPercentage = (recommendedVals = {}) => {
  console.log(`recommendedVals::::: ${JSON.stringify(recommendedVals,null,2)}`)
  const sum = Number(recommendedVals.true) + Number(recommendedVals.false);

  return Math.round((Number(recommendedVals.true) / sum) * 100);
}

const Recommended = ({ recommendedVals }) => {
  return (
    <div>
      <p>{calculateRecommendedPercentage(recommendedVals)}% of users recommend this prodct</p>
    </div>
  )
}

export default Recommended;