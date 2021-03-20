/* eslint-disable no-undef */
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'jest-canvas-mock';

/**
 * Import all your custom mocks in order to access them globally in your test files
 * without explicit declaration
 */
import 'tests/mocks/react-router-dom';
// Import specific mocked elements
import 'tests/mocks/window';
