
const Report = () => {
  return (
    <div className="flex flex-row">
      <button
        className="btn btn-sm border-gray-300 shadow-sm"
        onClick={(e) => {
          console.log('Reporting!')
        }}
      >
        Report
      </button>
    </div>
  )
}

export default Report;