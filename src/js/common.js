import JSONFormatter from 'json-formatter-js'

$(document).ready(function() {
  $('#btn').click(function(e) {
    var jsonData = {}
    
    var formData = $('#myform').serializeArray()
    // console.log(formData);

    $.each(formData, function() {
      if (jsonData[this.name]) {
        if (!jsonData[this.name].push) {
          jsonData[this.name] = [jsonData[this.name]]
        }
        jsonData[this.name].push(this.value || '')
      } else {
        jsonData[this.name] = this.value || ''
      }
    })
    console.log(jsonData)
    const formatter = new JSONFormatter(jsonData, 1 , {
      hoverPreviewEnabled: false,
      hoverPreviewArrayCount: 100,
      hoverPreviewFieldCount: 5,
      theme: '',
      animateOpen: true,
      animateClose: true,
      useToJSON: true
    });
    document.body.appendChild(formatter.render());
    formatter.openAtDepth(3);
    
      var doc = new jsPDF();
  
      doc.text(JSON.stringify(jsonData, 2, 2),10 ,10);
      doc.save('a4.pdf');
    

    $.ajax({
      url: 'action.php',
      type: 'POST',
      data: jsonData,
    })
    e.preventDefault()
  })
})

    



