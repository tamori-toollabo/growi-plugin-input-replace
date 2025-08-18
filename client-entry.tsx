import React from 'react';

import config from './package.json';

import { createRoot } from 'react-dom/client';
import InputReplace from './src/components/InputReplace';
import SpanReplace from './src/components/SpanReplace';
import { inputReplacePlugin } from './src/remarkInputReplace';
import remarkDirective from 'remark-directive';
import { InputReplaceProvider } from './src/components/InputReplaceContext';
import { Options, Func, ViewOptions } from './types/utils';


//declare const growiFacade: any;
declare const growiFacade : {
  markdownRenderer?: {
    optionsGenerators: {
      customGenerateViewOptions: (path: string, options: Options, toc: Func) => ViewOptions,
      generateViewOptions: (path: string, options: Options, toc: Func) => ViewOptions,
      generatePreviewOptions: (path: string, options: Options, toc: Func) => ViewOptions,
      customGeneratePreviewOptions: (path: string, options: Options, toc: Func) => ViewOptions,
    },
  },
  react: typeof React,
};


// DOM操作は不要になったためreplaceCustomTagsは削除

const activate = (): void => {
  if (typeof growiFacade === 'undefined' || growiFacade == null || growiFacade.markdownRenderer == null) {
    return;
  }
  const { optionsGenerators } = growiFacade.markdownRenderer;
  const originalCustomViewOptions = optionsGenerators.customGenerateViewOptions;
  optionsGenerators.customGenerateViewOptions = (...args) => {
    const options = originalCustomViewOptions ? originalCustomViewOptions(...args) : optionsGenerators.generateViewOptions(...args);
    // Providerでラップしたコンポーネントを登録
      (options.components as any)['inputreplace'] = (props: any) => {
      const { node, ...inputProps } = props;
      return (
        <InputReplaceProvider>
          <InputReplace {...inputProps} />
        </InputReplaceProvider>
      );
    };
    (options.components as any)['spanreplace'] = (props: any) => {
      const { node, ...spanProps } = props;
      return (
        <InputReplaceProvider>
          <SpanReplace {...spanProps} />
        </InputReplaceProvider>
      );
    };
    options.remarkPlugins.push(inputReplacePlugin as any);
    return options;
  };

  // For preview
  const originalGeneratePreviewOptions = optionsGenerators.customGeneratePreviewOptions;
  optionsGenerators.customGeneratePreviewOptions = (...args) => {
    const preview = originalGeneratePreviewOptions ? originalGeneratePreviewOptions(...args) : optionsGenerators.generatePreviewOptions(...args);
    (preview.components as any)['inputreplace'] = (props: any) => {
      const { node, ...inputProps } = props;
      return (
        <InputReplaceProvider>
          <InputReplace {...props} />
        </InputReplaceProvider>
      );
    };
    (preview.components as any)['spanreplace'] = (props: any) => {
      const { node, ...spanProps } = props;
      return (
        <InputReplaceProvider>
          <SpanReplace {...props} />
        </InputReplaceProvider>
      );
    };
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
