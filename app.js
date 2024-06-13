// write code here
function truncate(str, length) {
            if (str.length > length) {
              return str.slice(0, length - 1) + "…";
            }
            return str;
          }
          
          let strInput = prompt("โปรดระบุข้อความ :");
          let lengthInput = prompt("โปรดระยุความยาวที่ต้องการ :");
          
          lengthInput = parseInt(lengthInput);
          
          if (!isNaN(lengthInput)) {
            let result = truncate(strInput, lengthInput);
            console.log(result);
          } else {
            alert("โปรดใส่แค่ตัวเลขเท่านั้น.");
          }
