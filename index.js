/**
 * TODO: Import some components
 * U might also need to import 'api' to get your initial data?
 */

const root = document.getElementById("root");

const render = () => {
  const form = document.createElement("form");
  root.insertAdjacentElement("afterbegin", form);
  form.innerHTML = `
  <input name="fname" type="text" id="fname" placeholder="Enter student first name here"/>
  <input name="lname" type="text" id="lname" placeholder="Enter student last name here"/>
  <input name="id" type="text" id="id" placeholder="Enter student ID here"/>
  <input name="exam" type="text" id="exam" placeholder="Enter exam name here"/>
  <input name="score" type="text" id="score" placeholder="Enter exam score here"/>
  <input type="submit" value="Submit Student Data"/>
  `;
  const table = document.createElement("table");
  root.insertAdjacentHTML(
    "beforeend",
    `<table>
      <thead>
        <tr>
          <th colspan="5">Student Exam Scores</th>
        </tr>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>ID Number</td>
          <td>Exam Name</td>
          <td>Exam Score</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td id="td_fname"></td>
          <td id="td_lname"></td>
          <td id="td_id"></td>
          <td id="td_exam"></td>
          <td id="td_score"></td>
        </tr>
      </tbody>
    </table>`
  );
  form.addEventListener("submit", (event) => {
    event.returnValue = false;
    const fname = document.getElementById("fname");
    const lname = document.getElementById("lname");
    const id = document.getElementById("id");
    const exam = document.getElementById("exam");
    const score = document.getElementById("score");
    document.querySelector("tbody").insertAdjacentHTML(
      "beforeend",
      `<tr>
    <td>${fname.value}</td>
    <td>${lname.value}</td>
    <td>${id.value}</td>
    <td>${exam.value}</td>
    <td>${score.value}</td>
  </tr>`
    );
    // const td_fname = document.getElementById("td_fname");
    // const td_lname = document.getElementById("td_lname");
    // const td_id = document.getElementById("td_id");
    // const td_exam = document.getElementById("td_exam");
    // const td_score = document.getElementById("td_score");
    // td_fname.textContent = fname.value;
    // td_lname.textContent = lname.value;
    // td_id.textContent = id.value;
    // td_exam.textContent = exam.value;
    // td_score.textContent = score.value;

    console.table({
      fname: fname.value,
    });
  });
};

// ⚠️ Don't 4get to actually render! 😆
render();

// TODO: Use api to 'fetch' 'initial data?' Maybe 'api.index()'?
