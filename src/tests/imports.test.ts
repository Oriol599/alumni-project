import { beforeEach, describe, expect, it } from 'vitest';

import { renderizarAuth } from '../modules/auth/auth';
import { renderizarAlumni } from '../modules/alumni/alumni';
import { renderizarJobs } from '../modules/jobs/jobs';
import { renderizarEvents } from '../modules/events/events';
import { renderizarLanding } from '../modules/landing/landing';

describe('module entry points', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div id="app"></div>';
  });

  it('exports the renderer functions correctly', () => {
    expect(typeof renderizarAuth).toBe('function');
    expect(typeof renderizarAlumni).toBe('function');
    expect(typeof renderizarJobs).toBe('function');
    expect(typeof renderizarEvents).toBe('function');
  });

  it('renders the landing page with the top banner visible', async () => {
    await renderizarLanding();

    const banner = document.querySelector('.simple-banner');
    const heroImage = document.querySelector('.hero-img') as HTMLImageElement | null;

    expect(banner).not.toBeNull();
    expect(heroImage?.src).toContain('focused-teamwork-session-stockcake');
  });

  it('renders the updated hero actions for the landing page', async () => {
    await renderizarLanding();

    const ctaLabels = Array.from(document.querySelectorAll('.landing-ctas button'))
      .map((button) => button.textContent?.trim());

    expect(ctaLabels).toContain('Uneix-te');
    expect(ctaLabels).toContain('Mira què fem');
  });
});
