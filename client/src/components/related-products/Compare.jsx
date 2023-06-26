const React = require('react');

const Compare = () => {

  // Rough draft for html structure
  return (
    <div className="compare">
      <h2>Comparing</h2>
      <table>
        <tbody>
          <tr>
            <th>Current Product Name</th>
            <th>Compared Product Name</th>
          </tr>
          <tr>
            <td>Current Product Value</td>
            <td>Compared Product Value</td>
          </tr>
          {/* Add more rows for each characteristic */}
        </tbody>
      </table>
    </div>
  );
};

export default Compare;