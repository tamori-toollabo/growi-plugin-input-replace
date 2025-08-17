declare const growiFacade: any;
import React from 'react';
import { createRoot } from 'react-dom/client';
import InputReplace from './src/components/InputReplace';
import SpanReplace from './src/components/SpanReplace';
import { inputReplacePlugin } from './src/remarkInputReplace';
import remarkDirective from 'remark-directive';
import { InputReplaceProvider } from './src/components/InputReplaceContext';

// DOM操作は不要になったためreplaceCustomTagsは削除

const activate = (): void => {
  if (typeof growiFacade === 'undefined' || growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }
  const { optionsGenerators } = growiFacade.markdownRenderer;
  const originalCustomViewOptions = optionsGenerators.customGenerateViewOptions;
  optionsGenerators.customGenerateViewOptions = (...args: any[]) => {
    const options = originalCustomViewOptions ? originalCustomViewOptions(...args) : optionsGenerators.generateViewOptions(...args);
    // Providerでラップしたコンポーネントを登録
  options.components['inputreplace'] = InputReplace;
  options.components['spanreplace'] = SpanReplace;
    options.remarkPlugins.push(remarkDirective);
    options.remarkPlugins.push(inputReplacePlugin as any);
    return options;
  };

  // For preview
  const originalGeneratePreviewOptions = optionsGenerators.customGeneratePreviewOptions;
  optionsGenerators.customGeneratePreviewOptions = (...args: any[]) => {
    const preview = originalGeneratePreviewOptions ? originalGeneratePreviewOptions(...args) : optionsGenerators.generatePreviewOptions(...args);
  preview.components['inputreplace'] = InputReplace;
  preview.components['spanreplace'] = SpanReplace;
    preview.remarkPlugins.push(remarkDirective);
    preview.remarkPlugins.push(inputReplacePlugin as any);
    return preview;
  };

// DOM操作は不要
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
