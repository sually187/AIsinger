// ������۽��¼�
document.querySelector('input[type="search"]').addEventListener('focus', function() {
  this.style.borderColor = '#007bff';
});

// ������ʧ���¼�
document.querySelector('input[type="search"]').addEventListener('blur', function() {
  this.style.borderColor = '#ccc';
});

// ����ť����¼�
document.querySelectorAll('button.buy').forEach(function(button) {
  button.addEventListener('click', function() {
    alert('����ɹ���');
  });
});