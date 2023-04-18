function agregarFila(idTabla, nombresInputs, nombreFormulario) {
    var table = document.getElementById(idTabla);
    var row = table.insertRow(-1);
    for (var i = 0; i < nombresInputs.length; i++) {
      var cell = row.insertCell(i);
      cell.innerHTML = '<input type="text" class="' + nombreFormulario[i] + 'name="' + nombresInputs[i] + '[]">';
    }
  }