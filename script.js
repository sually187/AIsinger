// 搜索框聚焦事件
document.querySelector('input[type="search"]').addEventListener('focus', function() {
  this.style.borderColor = '#007bff';
});

// 搜索框失焦事件
document.querySelector('input[type="search"]').addEventListener('blur', function() {
  this.style.borderColor = '#ccc';
});

// 购买按钮点击事件
document.querySelectorAll('button.buy').forEach(function(button) {
  button.addEventListener('click', function() {
    alert('购买成功！');
  });
});