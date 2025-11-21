export type ViewState = 'scanner' | 'dashboard';

export interface LogEntry {
  id: number;
  text: string;
}

export interface ArchiveItem {
  title: string;
  content: string;
}