import React, { useState } from 'react';

const FileReading = (props) => {
  const [fileData, setFileData] = useState('');
//   const [list1, setList1] = useState([]);

var list1=[]
  const processFileData = (data) => {
    var rowList = data.split('\r\n');
    if (rowList.length > 0) {
      rowList.forEach((item) => {
        var x = item.split(',')[0];
        var y = item.split(',')[1];
        try {
          var z = {
            ageList: x,
            personList: parseInt(y),
          };
          list1.push(z)
        } catch (error) {
          alert('Number of Persons is not a number.');
        }
      });
    }
    props.setList(list1);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]; // Get the selected file

    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result; // Read the file data
      setFileData(data); // Store the file data in the state variable
      processFileData(data); // Process the file data
      console.log(list1)
    };
    reader.readAsText(file); // Read the file as text
};

  

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
    </div>
  );
};

export default FileReading;
