import { writable as localWritable } from 'svelte-local-storage-store';
import { writable, type Writable } from 'svelte/store';

// Local storage
export const currentStep: Writable<number> = localWritable('currentStep', 1);
export const clientName: Writable<string> = localWritable('clientName', '');
export const clientEmail: Writable<string> = localWritable('clienEmail', '');
export const clientPhone: Writable<number | null> = localWritable('clienPhone', null);
export const paymentPlan: Writable<number> = localWritable('paymentPlan', 0);
export const billingTermMonthly: Writable<boolean> = localWritable('billingTerm', true);
export const selectedAddons: Writable<string[]> = localWritable('addons', []);
export const complitedSteps: Writable<number> = localWritable('complitedSteps', 0);

// svelte storage
export const canContinue: Writable<boolean> = writable(false);
export const inputName: Writable<string> = writable('');
export const inputEmail: Writable<string> = writable('');
export const inputPhone: Writable<number | null> = writable(0);
