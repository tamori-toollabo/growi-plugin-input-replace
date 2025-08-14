module.exports = {
  activate: async (appContext: any) => {
    const { markdown } = appContext;

    markdown.postProcessors.push((html: string) => {
      let replacedHtml = html;

      // {{input(name, placeholder)}} → <input ...>
      replacedHtml = replacedHtml.replace(
        /\{\{input\(([^,]+),([^)]+)\)\}\}/g,
        (match, name, placeholder) => {
          return `<input name="${name.trim()}" placeholder="${placeholder.trim()}">`;
        }
      );

      // {{replace(target, value)}} → <span data-replace="...">...</span>
      replacedHtml = replacedHtml.replace(
        /\{\{replace\(([^,]+),([^)]+)\)\}\}/g,
        (match, target, value) => {
          return `<span class="replace-target" data-target="${target.trim()}">${value.trim()}</span>`;
        }
      );

      return replacedHtml;
    });
  },
};
