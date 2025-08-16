import { visit } from 'unist-util-visit';
import type { Plugin } from 'unified';
import type { Node } from 'unist';

interface GrowiNode extends Node {
  name: string;
  data: {
    hProperties?: Record<string, any>;
    hName?: string;
    hChildren?: Node[];
    [key: string]: any;
  };
  type: string;
  attributes: { [key: string]: string };
  children: { type: string; value: string }[];
  value?: string;
}

export const inputReplacePlugin: Plugin = () => {
  return (tree: Node) => {
    visit(tree, 'leafDirective', (node: Node) => {
      const n = node as unknown as GrowiNode;
      if (n.name === 'input') {
        const data = n.data || (n.data = {});
        const name = n.attributes.name || '';
        const placeholder = n.attributes.placeholder || '';
        data.hName = 'input-replace';
        data.hProperties = { name, placeholder };
        data.hChildren = [];
      }
      if (n.name === 'replace') {
        const data = n.data || (n.data = {});
        const target = n.attributes.target || '';
        const value = n.attributes.value || '';
        data.hName = 'span-replace';
        data.hProperties = { 'data-target': target };
        data.hChildren = [{ type: 'text', value }] as unknown as Node[];
      }
    });
  };
};