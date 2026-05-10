export interface Event {
	date: string;
	day: string;
	time: string;
	end: string;
	short_title: string;
	title: string;
	person: string;
	description: string;
	location: string;
	color: string;
}

export interface EventWithColAndRow extends Event { col: number; row: number; }

export interface TableCellEvent extends EventWithColAndRow { span: number; }