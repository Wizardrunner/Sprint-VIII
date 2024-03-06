// src/app/models/event-dialog-data.model.ts
export interface EventDialogData {
    event: {
      id: number;
      title: string;
      start: string; 
      end: string;   
      color?: string; 
    };
    delete?: boolean;
}
