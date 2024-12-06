import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// executa uma limpeza após cada caso de teste
afterEach(() => {
  cleanup();
});
