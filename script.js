function gerarRelatorio() {
  const data = document.getElementById('data').value;
  const responsavel = document.getElementById('responsavel').value;
  const local = document.getElementById('local').value;
  const descricao = document.getElementById('descricao').value;
  const observacoes = document.getElementById('observacoes').value;

  const html = `
    <h2>Relatório de Vistoria Técnica</h2>
    <p><strong>Data:</strong> ${data}</p>
    <p><strong>Responsável:</strong> ${responsavel}</p>
    <p><strong>Local:</strong> ${local}</p>
    <p><strong>Descrição da Vistoria:</strong><br>${descricao}</p>
    <p><strong>Observações:</strong><br>${observacoes}</p>
  `;

  document.getElementById('relatorio-gerado').innerHTML = html;
}

function exportarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const relatorio = document.getElementById('relatorio-gerado').innerText;

  const linhas = relatorio.split('\n');
  let y = 10;
  linhas.forEach(linha => {
    doc.text(linha, 10, y);
    y += 10;
  });

  doc.save("relatorio-vistoria.pdf");
}
