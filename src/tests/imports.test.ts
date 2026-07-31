import { describe, expect, it } from 'vitest';

import { renderizarAuth } from '../modules/auth/auth';
import { renderizarAlumni } from '../modules/alumni/alumni';
import { renderizarJobs } from '../modules/jobs/jobs';
import { renderizarEvents } from '../modules/events/events';

describe('module entry points', () => {
  it('exports the renderer functions correctly', () => {
    expect(typeof renderizarAuth).toBe('function');
    expect(typeof renderizarAlumni).toBe('function');
    expect(typeof renderizarJobs).toBe('function');
    expect(typeof renderizarEvents).toBe('function');
  });
});
