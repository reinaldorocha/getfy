function isPdf(file) {
  return file?.type === 'application/pdf' || file?.name?.toLowerCase().endsWith('.pdf');
}

export function setupPdfImportEvents({ state, render, showToast }) {
  const acceptPdf = (file) => {
    if (!file) return;
    if (!isPdf(file)) {
      showToast('Por favor, envie um arquivo no formato PDF.', 'warning');
      return;
    }
    state.editalPdfFile = file;
    state.editalPdfFileName = file.name;
    state.editalPdfFileSize = `${(file.size / (1024 * 1024)).toFixed(2)} MB`;
    render();

    const formData = new FormData();
    formData.append('pdf_file', file);
    fetch('/mentoria2/external-import/extract-pdf-text', {
      method: 'POST',
      headers: {
        'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '',
        Accept: 'application/json',
      },
      body: formData,
    }).then((response) => response.json()).then((data) => {
      if (!data.ok) return;
      const length = data.text_length || data.length || (data.text ? data.text.length : 0);
      state.editalExtractedText = data.text || data.text_snippet || '';
      state.editalExtractedLength = length;
      render();
      showToast(`PDF lido com sucesso (${length} caracteres extraídos)!`, 'success');
    }).catch(() => {
      showToast('Não foi possível ler este PDF agora. Tente novamente.', 'error');
    });
  };

  document.addEventListener('dragover', (event) => {
    const dropzone = event.target.closest('.m2-edital-dropzone');
    if (!dropzone) return;
    event.preventDefault();
    dropzone.classList.add('dragover');
    if (event.dataTransfer) event.dataTransfer.dropEffect = 'copy';
  });

  document.addEventListener('dragenter', (event) => {
    event.target.closest('.m2-edital-dropzone')?.classList.add('dragover');
  });

  document.addEventListener('dragleave', (event) => {
    const dropzone = event.target.closest('.m2-edital-dropzone');
    if (dropzone && !dropzone.contains(event.relatedTarget)) dropzone.classList.remove('dragover');
  });

  document.addEventListener('drop', (event) => {
    const dropzone = event.target.closest('.m2-edital-dropzone');
    if (!dropzone) return;
    event.preventDefault();
    dropzone.classList.remove('dragover');
    acceptPdf(event.dataTransfer?.files?.[0]);
  });

  document.addEventListener('change', (event) => {
    if (event.target.id === 'm2-edital-pdf-input') acceptPdf(event.target.files?.[0]);
  });
}
