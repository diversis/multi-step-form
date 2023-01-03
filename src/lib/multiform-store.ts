import { writable as localWritable } from 'svelte-local-storage-store';
import { writable, type Writable } from 'svelte/store';

export const currentStep: Writable<number> = localWritable('currentStep', 1);
export const userName: Writable<string> = localWritable('userName', '');
export const userEmail: Writable<string> = localWritable('userEmail', '');
export const userPhone: Writable<string> = localWritable('userPhone', '');
export const paymentPlan: Writable<string> = localWritable('paymentPlan', '');
export const paymentPeriod: Writable<string> = localWritable('paymentPeriod', '');
export const addons: Writable<string[]> = localWritable('addons', []);
