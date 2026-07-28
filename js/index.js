// index.js - 折叠功能
document.querySelectorAll('.category-title').forEach(function(title) {
  const list = document.getElementById(title.dataset.target);
  if (!list) return;

  let expanded = false;
  title.style.cursor = 'pointer';
  title.style.userSelect = 'none';
  title.style.padding = '0.4rem 0.8rem';
  title.style.borderRadius = '4px';
  title.style.transition = 'all 0.3s ease';
  title.style.display = 'inline-block';

  // 初始状态：全部折叠
  list.style.display = 'none';
  // 折叠样式（浅灰底 + 黑字，和链接选项一致）
  title.style.backgroundColor = '#f0f0f0';
  title.style.color = '#000000';

  title.addEventListener('mouseenter', function() {
    title.style.backgroundColor = '#4CAF50';
    title.style.color = 'white';
  });

  title.addEventListener('mouseleave', function() {
    if (!expanded) {
      title.style.backgroundColor = '#f0f0f0';
      title.style.color = '#000000';
    } else {
      title.style.backgroundColor = '#4CAF50';
      title.style.color = 'white';
    }
  });

  title.addEventListener('click', function() {
    expanded = !expanded;
    list.style.display = expanded ? '' : 'none';
    if (expanded) {
      title.style.backgroundColor = '#4CAF50';
      title.style.color = 'white';
      title.textContent = '▼ ' + title.textContent.replace(/^[▼▶]\s*/, '');
    } else {
      title.style.backgroundColor = '#f0f0f0';
      title.style.color = '#000000';
      title.textContent = '▶ ' + title.textContent.replace(/^[▼▶]\s*/, '');
    }
  });
});
