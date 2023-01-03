import { writable as localWritable } from 'svelte-local-storage-store';
import { writable, type Writable } from 'svelte/store';

// Local storage
export const currentStep: Writable<number> = localWritable('currentStep', 1);
export const userName: Writable<string> = localWritable('userName', '');
export const userEmail: Writable<string> = localWritable('userEmail', '');
export const userPhone: Writable<string> = localWritable('userPhone', '');
export const paymentPlan: Writable<number> = localWritable('paymentPlan', 0);
export const billingTermMonthly: Writable<boolean> = localWritable('billingTerm', true);
export const addons: Writable<string[]> = localWritable('addons', []);
export const finishedSteps: Writable<number[]> = localWritable('finishedSteps', []);

// svelte storage
export const canContinue: Writable<boolean> = writable(false);
