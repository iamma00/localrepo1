const insert = document.getElementById('insert');
//reference from keydetect.html
window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class='color'>
  <table>
  <tr>
    <th>Key</th>
    <th>Keycodw</th>
    <th>ode</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "Space": e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});
