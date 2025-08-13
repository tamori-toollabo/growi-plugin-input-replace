// client-entry.ts
import './style.css'; // 任意でCSS読み込み

function convertShortcodes() {
  // ページ全体のテキストノードを走査
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const text = node.nodeValue;
    if (!text) continue;

    // [input name="xxx" placeholder="yyy"] を検出
    const regex = /\[input\s+name="([^"]+)"\s+placeholder="([^"]+)"\]/g;
    let match: RegExpExecArray | null;
    let replaced = false;
    let lastIndex = 0;
    const frag = document.createDocumentFragment();

    while ((match = regex.exec(text)) !== null) {
      replaced = true;
      // テキストの前半を追加
      frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));

      // input 要素を作成
      const input = document.createElement('input');
      input.type = 'text';
      input.name = match[1];
      input.placeholder = match[2];
      frag.appendChild(input);

      lastIndex = regex.lastIndex;
    }

    if (replaced) {
      frag.appendChild(document.createTextNode(text.slice(lastIndex)));
      node.parentNode?.replaceChild(frag, node);
    }
  }
}

// ページ読み込み後に実行
document.addEventListener('DOMContentLoaded', () => {
  // 1. [input name="xxx"] ショートコードを input 要素に置換
  convertShortcodes();

  // 2. ページ内の置換対象を記録
  const placeholders: { node: Text; template: string }[] = [];

  // ページ全体のテキストノードを走査
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    if (node.nodeValue?.includes('{{')) {
      placeholders.push({ node: node as Text, template: node.nodeValue });
    }
  }

  // 3. 入力値の変更で置換
  const updatePlaceholders = () => {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[name]');
    const values: Record<string, string> = {};
    inputs.forEach(input => { values[input.name] = input.value; });

    placeholders.forEach(p => {
      let text = p.template;
      Object.entries(values).forEach(([name, val]) => {
        const re = new RegExp(`{{${name}}}`, 'g');
        text = text.replace(re, val);
      });
      p.node.nodeValue = text;
    });
  };

  // 4. input にイベントリスナー
  document.querySelectorAll<HTMLInputElement>('input[name]').forEach(input => {
    input.addEventListener('input', updatePlaceholders);
  });

  // 初期反映
  updatePlaceholders();
});

