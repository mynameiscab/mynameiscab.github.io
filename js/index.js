// index.js - 折叠功能
document.querySelectorAll('.category-title').forEach(function(title) {
  const list = document.getElementById(title.dataset.target);
  if (!list) return;

  let expanded = false;
  title.style.cursor = 'pointer';
  title.style.userSelect = 'none';

  // 初始状态：全部折叠
  list.style.display = 'none';

  // 创建状态标签（样式与链接选项一致）
  const badge = document.createElement('span');
  badge.textContent = '展开';
  badge.style.cssText = `
    display: inline-block;
    background-color: #f0f0f0;
    color: #000000;
    padding: 0.2rem 0.6rem;
    border-radius: 4px;
    font-size: 0.75rem;
    margin-left: 0.6rem;
    transition: all 0.3s ease;
    vertical-align: middle;
  `;
  title.appendChild(badge);

  // 标题悬停时，标签跟着变色
  title.addEventListener('mouseenter', function() {
    badge.style.backgroundColor = '#4CAF50';
    badge.style.color = 'white';
  });
  title.addEventListener('mouseleave', function() {
    if (!expanded) {
      badge.style.backgroundColor = '#f0f0f0';
      badge.style.color = '#000000';
    } else {
      badge.style.backgroundColor = '#4CAF50';
      badge.style.color = 'white';
    }
  });

  title.addEventListener('click', function() {
    expanded = !expanded;
    list.style.display = expanded ? '' : 'none';
    badge.textContent = expanded ? '收起' : '展开';
    badge.style.backgroundColor = expanded ? '#4CAF50' : '#f0f0f0';
    badge.style.color = expanded ? 'white' : '#000000';
  });
});
