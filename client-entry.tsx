declare const growiFacade: any;
import React from 'react';
import { createRoot } from 'react-dom/client';
import InputReplace from './src/components/InputReplace';
import SpanReplace from './src/components/SpanReplace';
import { inputReplacePlugin } from './src/remarkInputReplace';
import remarkDirective from 'remark-directive';

/*function replaceCustomTags() {
  document.querySelectorAll('input-replace').forEach(el => {
    const name = el.getAttribute('name') || '';
    const placeholder = el.getAttribute('placeholder') || '';
    createRoot(el).render(<InputReplace name={name} placeholder={placeholder} />);
  });
  document.querySelectorAll('span-replace').forEach(el => {
    const target = el.getAttribute('target') || '';
    const value = el.getAttribute('value') || '';
    createRoot(el).render(<SpanReplace target={target} value={value} />);
  });
}*/

const activate = (): void => {
  if (typeof growiFacade === 'undefined' || growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }
  const { optionsGenerators } = growiFacade.markdownRenderer;
  const originalCustomViewOptions = optionsGenerators.customGenerateViewOptions;
  optionsGenerators.customGenerateViewOptions = (...args: any[]) => {
    const options = originalCustomViewOptions ? originalCustomViewOptions(...args) : optionsGenerators.generateViewOptions(...args);
    const IR = options.components['input-replace'];
    options.components['input-replace'] = InputReplace(IR);
    const SR = options.components['span-replace'];
    options.components['span-replace'] = SpanReplace(SR);
    options.remarkPlugins.push(remarkDirective);
    options.remarkPlugins.push(inputReplacePlugin as any);
    return options;
  };

  // For preview
  const originalGeneratePreviewOptions = optionsGenerators.customGeneratePreviewOptions;
  optionsGenerators.customGeneratePreviewOptions = (...args: any[]) => {
    const preview = originalGeneratePreviewOptions ? originalGeneratePreviewOptions(...args) : optionsGenerators.generatePreviewOptions(...args);
    const IR = preview.components['input-replace'];
    preview.components['input-replace'] = InputReplace(IR);
    const SR = preview.components['span-replace'];
    preview.components['span-replace'] = SpanReplace(SR);
    preview.remarkPlugins.push(remarkDirective);
    preview.remarkPlugins.push(inputReplacePlugin as any);
    return preview;
  };

/*  if (document.readyState !== 'loading') {
    replaceCustomTags();
  } else {
    document.addEventListener('DOMContentLoaded', replaceCustomTags);
  }*/
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

export default activate;
