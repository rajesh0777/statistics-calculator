import React from "react";

function mean(data) {
  var sum = 0;
  var n = 0;

  data.forEach((item) => {
    sum = sum + item.personList;
    n++;
  });

  return sum / n;
}


function median(data) {
  var x = data[0].ageList.split("-");
  var h = x[1] - x[0];

  var maxIndex = 0;
  var cf = 0;
  var sum = 0;
  var f = 0;
  data.map((item, index) => {
    sum = sum + item.personList;
    if (item.personList > f) {
      f = item.personList;
      maxIndex = index;
    }
  });
  for (var i = 0; i < maxIndex; i++) {
    cf = cf + data[i].personList;
  }

  var l = data[maxIndex].ageList.split("-")[0];

  var medianres = ((sum / 2 - cf) * h + l * f) / f;

  return medianres;
}

function mode(data) {
  var x = data[0].ageList.split("-");
  var h = x[1] - x[0];

  var maxIndex = 0;
  var f1 = 0;

  data.map((item, index) => {
    if (item.personList > f1) {
      f1 = item.personList;
      maxIndex = index;
    }
  });
var f2 =0;
var f0 = 0;
  if (maxIndex - 1 >= 0 && maxIndex - 1 < data.length) {
     f0 = data[maxIndex - 1].personList;
  }
  
  if (maxIndex + 1 >= 0 && maxIndex + 1 < data.length) {
     f2 = data[maxIndex + 1].personList;
  }
  var l = data[maxIndex].ageList.split("-")[0];
var deno = (2*f1-f0-f2)
var nom = (deno*l+h*(f1-f0))
var modeRes = nom/deno
return modeRes


}

const Calcution = (props) => {
  var meanval = mean(props.list);
  var medianval = median(props.list);
  var modeval = mode(props.list);
  return (
    <>
      <div className="center">
        <table>
          <thead>
            <tr>
              <th>Mean</th>
              <th>Median</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{meanval}</td>
              <td>{medianval}</td>
              <td>{modeval}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Calcution;
