// client-entry.tsx
import './style.css'; // 任意でCSS読み込み

declare const growiFacade: any;

const activate = (): void => {
  // GROWI本体が利用可能か確認
  if (typeof growiFacade === 'undefined' || growiFacade.markdownRenderer == null) {
    return;
  }

  // ページ内すべての input の変化を監視
  const updateReplace = () => {
    const inputs = document.querySelectorAll<HTMLInputElement>('input[name]');
    const values: Record<string,string> = {};
    inputs.forEach(i => { values[i.name] = i.value; });

    document.querySelectorAll<HTMLElement>('[data-replace]').forEach(el => {
      let text = el.dataset.template || '';
      Object.entries(values).forEach(([name, val]) => {
        text = text.replace(new RegExp(`{{replace\\(${name}\\)}}`, 'g'), val);
      });
      el.textContent = text;
    });
  };

  document.querySelectorAll<HTMLInputElement>('input[name]').forEach(input => {
    input.addEventListener('input', updateReplace);
  });

  updateReplace();
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
