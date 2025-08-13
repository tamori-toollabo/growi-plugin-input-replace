// client-entry.tsx
import './style.css'; // 任意でCSS読み込み

declare const growiFacade: any;

const activate = (): void => {
  // GROWI本体が利用可能か確認
  if (typeof growiFacade === 'undefined' || growiFacade.markdownRenderer == null) {
    return;
  }

  // -----------------------------
  // [input ...] を input 要素に置換する処理
  // -----------------------------
  const convertShortcodes = () => {
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
        // 前半テキストを追加
        frag.appendChild(document.createTextNode(text.slice(lastIndex, match.index)));

        // input 要素作成
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
  };

  // ページ全体のプレースホルダー置換
  const updatePlaceholders = () => {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[name]');
    const values: Record<string, string> = {};
    inputs.forEach(input => { values[input.name] = input.value; });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      if (!node.nodeValue) continue;
      let text = node.nodeValue;
      Object.entries(values).forEach(([name, val]) => {
        const re = new RegExp(`{{${name}}}`, 'g');
        text = text.replace(re, val);
      });
      node.nodeValue = text;
    }
  };

  // 初期置換
  convertShortcodes();
  updatePlaceholders();

  // input にイベント追加
  document.querySelectorAll<HTMLInputElement>('input[name]').forEach(input => {
    input.addEventListener('input', updatePlaceholders);
  });
};

const deactivate = (): void => {
  // 必要に応じてクリーンアップ処理を追加
};

// window.pluginActivators への登録
if ((window as any).pluginActivators == null) {
  (window as any).pluginActivators = {};
}
(window as any).pluginActivators['growi-plugin-input-replace'] = {
  activate,
  deactivate,
};
