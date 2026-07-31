import { beforeEach, describe, expect, it } from 'vitest';

import { renderizarAlumni } from '../modules/alumni/alumni';

describe('renderizarAlumni', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  it('renders the alumni list and the filter controls', () => {
    renderizarAlumni();

    const app = document.getElementById('app');
    expect(app).not.toBeNull();
    expect(app?.querySelectorAll('.zona-filtros').length).toBe(1);
    expect(app?.querySelectorAll('.tarjeta').length).toBeGreaterThan(0);
    expect(app?.textContent).toContain('Anna Costa');
  });
});
