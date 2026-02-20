import test from 'node:test';
import assert from 'node:assert';
import { presets } from '../src/fonts.js';

test('Font Presets exist', () => {
  assert.strictEqual(presets.inter, 'Inter');
  assert.strictEqual(Object.keys(presets).length, 10);
});