const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function formatDate(date: string): string {
	const [year, month] = date.split('-');
	return `${MONTHS[Number(month) - 1]} ${year}`;
}
