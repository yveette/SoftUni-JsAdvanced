function solve(input) {
   let students = JSON.parse(input);

   console.log('<table>');
   let keys = Object.keys(students[0]);
   console.log(keyRow(keys));

   for (let student of students) {
      let values = Object.values(student);
      console.log(valueRow(values));
   }

   console.log('</table>');


   function keyRow(arr) {
      let result = `   <tr>`;
      arr.forEach(element => {
         result += `<th>${escapeHTML(element)}</th>`;
      });
      result += `</tr>`;
      return result;
   }

   function escapeHTML(htmlCode) {
      const entryMap = {
         "&": "&amp;",
         "<": "&lt;",
         ">": "&gt;",
         '"': "&quot;",
         "'": "&#39;",
      };

      return htmlCode
         .toString()
         .replace(/[&<>"']/g, (char) => entryMap[char]);
   }

   function valueRow(arr) {
      let result = `   <tr>`;
      arr.forEach(el => {
          result += `<td>${escapeHTML(el)}</td>`;
      });
      result += `</tr>`;
      return result;
  }
}




solve(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`)

/*
<table>
   <tr><th>Name</th><th>Score</th></tr>
   <tr><td>Stamat</td><td>5.5</td></tr>
   <tr><td>Rumen</td><td>6</td></tr>
</table>
*/


solve(`[{"Name":"Pesho",
    "Score":4,
    " Grade":8},
   {"Name":"Gosho",
    "Score":5,
    " Grade":8},
   {"Name":"Angel",
    "Score":5.50,
    " Grade":10}]`)
/*
<table>
   <tr><th>Name</th><th>Score</th><th>Grade</th></tr>
   <tr><td>Pesho</td><td>4</td><td>8</td></tr>
   <tr><td>Gosho</td><td>5</td><td>8</td></tr>
   <tr><td>Angel</td><td>5.5</td><td>10</td></tr>
</table>
*/
